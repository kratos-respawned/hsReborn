import Image from "next/image";
import LaDebug from "./LaDebug.png";
import Game from "./Game.png";
import Guru from "./Guru.png";
import Diamond from "./Diamond.png";
function Init() {
  return (
    <section className="relative ">
      <div className="bg-hsPink w-20 h-20 sm:h-40 sm:w-40 blur-3xl  absolute right-0 -top-12 sm:top-0 -z-10" />
      <div className="bg-hsBlue w-32 h-32 sm:h-72 sm:w-72 blur-3xl sm:blur-[110px]  absolute -left-9  -bottom-24 sm:-bottom-4 -z-10" />
      <main>
        <h2>Out Initiatives</h2>
      </main>
      <main className=" initiatives font-clashDisplay mx-auto px-16 gap-x-10 gap-y-10 ">
        <div className="LaDebug px-5 rounded-3xl justify-between items-center py-6">
          <h2 className="text-[#FF7560] text-3xl  sm:text-4xl flex-grow">
            The <br /> LaDebug Club
          </h2>
          <div className="glow relative  -translate-y-1/4 z-10">
            <Image src={LaDebug} width={200} height={200} alt="LaDebug" />
            {/* <div className="blur-3xl bg-[#F55B5B] rounded-full w-52 h-52 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 -z-10 " /> */}
          </div>
        </div>
        <div className="BGMI p-3 flex-col rounded-3xl justify-center gap-y-2 items-center">
          <div className="glow  relative flex-grow z-10">
            <Image
              className="w-full h-full scale-105 -translate-y-1/4 "
              src={Game}
              width={120}
              height={120}
              alt="BGMI"
            />
          </div>
          <h2 className="text-[#9E4FFF] text-3xl  sm:text-4xl text-center basis-1/2">
            Bharatiya <br /> Gaming Co.
          </h2>
        </div>
        <div className="Gurujiii p-3 flex-col rounded-3xl justify-center gap-y-2 items-center">
          <div className="glow relative flex-grow z-10 ">
            <Image
              className=" w-full h-full -translate-y-1/4"
              src={Guru}
              width={120}
              height={120}
              alt="Guruji"
            />
          </div>
          <h2 className="text-[#E6A866] text-3xl  sm:text-4xl basis-1/2">
            Life of
            <br /> Gurus
          </h2>
        </div>
        <div className="Townhall p-5 flex-row gap-x-10 lg:px-24 lg:flex-col-reverse lg:gap-y-5 rounded-3xl justify-between items-center">
          <h2 className="text-[#00C3FF] text-3xl  sm:text-4xl text-center lg:basis-1/3">
            Membership <br /> Townhall
          </h2>
          <div className="glow grid place-items-end lg:place-items-center relative flex-grow z-10">
            <Image
              src={Diamond}
              width={300}
              height={300}
              alt="Membership Townhall"
            />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Init;
