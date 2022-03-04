import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const { connectWallet, error } = useWeb3()

  useEffect(() => {
    if (error) {
      toast.error(error.message, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    }
  }, [error])

  return (
    <div className="mx-3 flex h-screen items-center justify-center">
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <div>
        <h1 className="text-2xl font-bold text-white">Connect your wallet.</h1>
        <p className="text-xl font-semibold text-gray-400">
          Connect with one of our available{' '}
          <span className="cursor-pointer text-blue-500">wallet</span> providers
          or create a new one.
        </p>
        <div className="mt-10 grid-cols-1 flex-col items-center justify-start rounded-lg bg-white">
          <div
            className="flex cursor-pointer gap-4 rounded-t-lg border border-gray-700 bg-[#202225] p-4 hover:bg-[#494B4D]"
            onClick={() => connectWallet('injected')}
          >
            <img
              className="h-8 w-8"
              src="https://opensea.io/static/images/logos/metamask-alternative.png"
              alt=""
            />
            <p className="text-lg font-semibold text-white">MetaMask</p>
          </div>

          <div
            className="flex cursor-pointer gap-4 border border-gray-700 bg-[#202225] p-4 hover:bg-[#494B4D]"
            onClick={() => connectWallet('walletconnect')}
          >
            <img
              className="h-8 w-8"
              src="https://storage.opensea.io/static/wallets/walletconnect/walletconnect-alternative.png"
              alt=""
            />
            <p className="text-lg font-semibold text-white">WalletConnect</p>
          </div>

          <div
            className="flex cursor-pointer gap-4 rounded-b-lg border border-gray-700 bg-[#202225] p-4 hover:bg-[#494B4D]"
            onClick={() => connectWallet('walletlink')}
          >
            <img
              className="h-8 w-8"
              src="https://storage.opensea.io/static/wallets/walletlink/walletlink-alternative.png"
              alt=""
            />
            <p className="text-lg font-semibold text-white">Coinbase Wallet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
