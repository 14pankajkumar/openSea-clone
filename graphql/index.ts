import { gql, request } from "graphql-request"

const graphqlAPI: string = `${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`;

export const saveUser = async (obj: object) => {
    const result = await fetch("/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj)
    })

    return result.json()
}

export const getCreators = async () => {
    const query = gql`
    query GetCreators {
        creators{
          id
          walletAddress
        }
      }      
    `

    const result = await request(graphqlAPI, query)
    return result.creators
}

export const getCreator = async (walletAddress: string) => {
    const query = gql`
        query GetCreator($walletAddress: String!) {
            creator(where: {walletAddress: $walletAddress}) {
                id
                username
                walletAddress
                twitterHandle
            }
        } 
    `

    const result = await request(graphqlAPI, query, { walletAddress });
    return result.creator

}

export const getMarketItems = async (contractAddress: string | string[]) => {
    const query = gql`
        query GetMarketItems($contractAddress: String!) {
            marketItems(where: {contractAddress: $contractAddress}) {
                id
                title
                description
                contractAddress
                floorPrice
                volumeTraded
                owners {
                    username
                }
                profileImage {
                    url
                }
                bannerImage {
                    url
                }
                nftcreatedby {
                    ...on Creator{
                    username
                    }
                }
            }
        } 
    `
    const result = await request(graphqlAPI, query, { contractAddress })
    return result.marketItems[0]
}