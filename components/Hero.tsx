import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem] mt-4`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  cards: `h-full w-full cursor-pointer overflow-hidden rounded-lg`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Jolly</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 h-full w-full pb-5">
        <div className="relative flex items-center justify-center p-5 text-2xl font-bold text-white">
          Notable Drops
        </div>
        <div className="relative my-5 grid grid-cols-1 gap-12 px-12 md:grid-cols-2 lg:grid-cols-3">
          <div className={style.cards}>
            <img
              src="https://storage.opensea.io/static/promocards/glimpses-promocard.png"
              alt=""
            />
            <div className="grid flex-col gap-12 bg-black p-5 text-white">
              <div>
                <h1 className="flex items-center justify-center text-lg font-bold">
                  Glimpses of Existence
                </h1>
                <p className="flex items-center justify-center text-sm font-semibold">
                  16 1/1's from a lens-based visual artis
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex w-1/4 items-center justify-center rounded-lg border border-white">
                  Live
                </div>
              </div>
            </div>
          </div>

          <div className={style.cards}>
            <img
              src="https://storage.opensea.io/static/promocards/superchief-cyberpunk-promocard.jpg"
              alt=""
            />
            <div className="grid flex-col gap-12 bg-[#FE0200] p-5 text-white">
              <div>
                <h1 className="flex items-center justify-center text-lg font-bold">
                  Glimpses of Existence
                </h1>
                <p className="flex items-center justify-center text-sm font-semibold">
                  16 1/1's from a lens-based visual artis
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex w-1/4 items-center justify-center rounded-lg border border-white">
                  Live
                </div>
              </div>
            </div>
          </div>

          <div className={style.cards}>
            <img
              src="https://storage.opensea.io/static/promocards/overseers-promocard.png"
              alt=""
            />
            <div className="grid flex-col gap-12 bg-black p-5 text-white">
              <div>
                <h1 className="flex items-center justify-center text-lg font-bold">
                  Glimpses of Existence
                </h1>
                <p className="flex items-center justify-center text-sm font-semibold">
                  16 1/1's from a lens-based visual artis
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex w-1/4 items-center justify-center rounded-lg border border-white">
                  Live
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
