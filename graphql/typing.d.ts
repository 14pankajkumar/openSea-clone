export interface Creators {
    id: string,
    walletAddress: string
}

export interface Creator {
    id: string,
    walletAddress: string
    username: string
    twitterHandle: string
}

export interface Collection {
    id: string
    title: string
    description: string
    contractAddress: string
    floorPrice: number
    volumeTraded: number
    owners: {
        username: string
    }
    profileImage: {
        url: string
    }
    bannerImage: {
        url: string
    }
    nftcreatedby: {
        username: string
    }
}

export interface NftItem {
    id: string
    name: string
    description: string
    image: string
    uri: string
}

export interface Listings {
    id: string
    asset: NftItem
    assetContractAddress: string
    buyoutCurrencyValuePerToken: {
        decimals: number
        displayValue: string
        name: string
        symbol: string
        value: string
    }
    secondsUntilEnd: {
        sellerAddress: string
    }
}