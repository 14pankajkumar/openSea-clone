import { useWeb3 } from '@3rdweb/hooks'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { Header, Hero, Login } from '../components'
import { getCreator, getCreators, saveUser } from '../graphql'
import { Creator, Creators } from '../graphql/typing'

interface Props {
  creators: [Creators]
}

const Home = ({ creators }: Props) => {
  const { address } = useWeb3()

  useEffect(() => {
    if (!address) return

    const userExist = creators.find((item) => item.walletAddress == address)

    if (userExist) return

    const obj = {
      walletAddress: address,
    }

    saveUser(obj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }, [address])

  return (
    <div>
      <Head>
        <title>OpenSea clone</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {address ? (
        <div>
          <Header />
          <Hero />
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const creators = await getCreators()

  return {
    props: {
      creators,
    },
  }
}
