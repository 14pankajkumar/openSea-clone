import { gql, GraphQLClient } from "graphql-request"
import type { NextApiRequest, NextApiResponse } from "next"

const graphqlAPI: string = `${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`;

const saveUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_AUTH_TOKEN}`,
        }
    })

    const query = gql`
        mutation CreateCreator(
            $walletAddress: String!
        ) {
            createCreator(
                data: {
                    walletAddress: $walletAddress
                }
            ) {

                id
            }
        }
    `;

    try {
        const result = await graphQLClient.request(query, req.body);

        try {
            const creatorId = result.createCreator.id;

            const publishCreator = gql`
                mutation PublishCreator ($id: ID!) {
                    publishCreator(where: {id: $id}, to: PUBLISHED) {
                        id
                    }
                }              
            `;

            const publishResult = await graphQLClient.request(publishCreator, { id: creatorId });

            res.status(200).send(publishResult)

        } catch (error) {
            res.status(400).send(error)
        }

    } catch (error) {
        res.status(500).send(error)
    }

}

export default saveUser