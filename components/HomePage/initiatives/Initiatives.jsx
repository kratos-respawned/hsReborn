import Image from "next/image";
import diamond from "./Diamond.png";
import game from "./Game.png";
import laDebug from "./LaDebug.png";
import guru from "./Guru.png";
export default function Initiatives() {
  return (
    <>
      <main className="mt-40 md:mt-36 pb-28 relative  w-full h-full ">
        <section className="z-30 flex flex-col w-full h-full  border-none ">
          <section className="flex-col gap-y-12 h-full bg-transparent z-40 flex justify-start items-center relative">
            <div className="bg-hsPink w-20 h-20 sm:h-40 sm:w-40 blur-3xl  absolute right-0 -top-12 sm:top-0 -z-10" />
            <div className="bg-hsBlue w-32 h-32 sm:h-72 sm:w-72 blur-3xl sm:blur-[110px]  absolute -left-9  -bottom-24 sm:-bottom-4 -z-10" />
            <div className="flex flex-col  items-center justify-center max-w-[658px] relative">
              <div className="font-clashDisplay font-medium text-[#fff] text-4xl md:text-6xl">
                Our Initiatives
              </div>
            </div>
            <section className="mt-24 mx-3 sm:mx-7 md:mx-9 lg:mx-12 flex-1 h-96 grid grid-cols-7 gap-x-3 md:gap-x-9 gap-y-12 grid-rows-3 lg:grid-rows-2 w-[95%] sm:w-[80%] md:max-w-[1000px]  ">
              <div className="hover:shadow-[#8000ffdf] hover:shadow-2xl  duration-300 group py-6 lg:py-0 z-20 flex justify-between flex-row-reverse w-full lg:flex-col lg:justify-center lg:gap-y-10 md:place-items-center  lg:h-[500px] rounded-3xl  row-start-3 col-span-8 lg:row-start-1 lg:row-span-2  lg:col-span-3 bg-[#191322]">
                <div className="relative">
                  <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-full lg:h-full z-10">
                    <Image
                      src={diamond}
                      width={250}
                      height={250}
                      className="px-4 py-4 z-20"
                      alt="membership townhall"
                    />
                  </div>
                  <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 blur-[77px] bg-[#8000FF] -z-10" />
                </div>
                <h1 className="text-center z-10 py-6 lg:py-0 px-4 font-clashDisplay text-[#00C3FF] text-2xl sm:text-4xl leading-[48px] group-hover:-translate-y-2 duration-300 transition-transform">
                  Membership <br /> Townhall
                </h1>
              </div>
              <div className="hover:shadow-[#f55b5bc2] hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 duration-300 group grid grid-cols-2 w-full h-full rounded-3xl col-span-8 lg:col-span-4 bg-[#191322]">
                <h1 className="py-9 my-auto px-4 font-clashDisplay text-[#FF7560] text-xl sm:text-3xl md:text-5xl lg:text-4xl leading-[48px]">
                  The <br /> LaDebug Club
                </h1>
                <div className="relative z-20 ">
                  <div className="absolute bottom-1/2 left-1/2 -translate-x-1/3 translate-y-1/3 w-[120px] h-[120px] md:w-[160px] md:h-[200px]  lg:w-[220px] lg:h-[220px]">
                    <Image
                      src={laDebug}
                      width={180}
                      height={220}
                      className="z-20 "
                      alt="LaDebug"
                    />
                  </div>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  -z-10 w-20 h-20 md:w-40 md:h-40 blur-3xl bg-[#F55B5B]" />
                </div>
              </div>
              <div className="hover:shadow-[#ea00ffcb] hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 duration-300 w-full h-full p-2 flex flex-col rounded-3xl  row-start-2 col-span-4 lg:col-span-2 bg-[#191322]">
                <div className="flex-1 relative z-40 ">
                  <div className="absolute z-40 right-1/2 translate-x-1/2 -top-8 md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]">
                    <Image
                      src={game}
                      width={120}
                      height={120}
                      className="z-20  "
                      alt="BGC"
                    />
                  </div>
                  <span className="absolute top-3 right-1/2 translate-x-1/2  -z-40 w-16 h-16 blur-xl   bg-[#EB00FF]" />
                </div>
                <h1 className="text-center mb-9 px-4 font-clashDisplay  text-base sm:text-2xl md:text-5xl lg:text-3xl text-[#9E4FFF] ">
                  Bharatiya <br /> Gaming Co.
                </h1>
              </div>
              <div className="hover:shadow-[#ffb700d5] hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 duration-300 w-full h-full p-2 flex flex-col rounded-3xl   row-start-2 col-span-4 lg:col-span-2 bg-[#191322]">
                <div className="flex-1 relative z-20 ">
                  <div className="absolute z-40 right-1/2 translate-x-1/2 -top-8  w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]">
                    <Image
                      src={guru}
                      width={120}
                      height={120}
                      className="z-20  "
                      alt="Life of Guru"
                    />
                  </div>
                  <span className="absolute top-4 right-1/2 translate-x-1/2  -z-40 w-16 h-16 blur-xl  bg-[#FFB800]" />
                </div>
                <h1 className="text-center mb-9 px-4 font-clashDisplay text-[#E6A866] text-xl sm:text-2xl md:text-5xl lg:text-3xl z-10 ">
                  Life of
                  <br /> Gurus
                  {/* <p className="text-sm">Know More</p> */}
                </h1>
              </div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
