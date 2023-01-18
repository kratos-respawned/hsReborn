import Image from "next/image";
import diamond from "./Diamond.png";
import game from "./Game.png";
import laDebug from "./LaDebug.png";
import guru from "./Guru.png";
function Init() {
  return (
    <main className="relative isolate">
      <figure
        aria-hidden
        className="bg-[#FF1BBB] w-20 h-20 sm:h-40 sm:w-40 blur-3xl  absolute right-0 -top-12 sm:top-0 -z-10"
      />
      <figure
        aria-hidden
        className="bg-[#623FFF]  w-32 h-32 sm:h-72 sm:w-72 blur-3xl sm:blur-[110px]  absolute -left-9  -bottom-24 sm:-bottom-4 -z-10"
      />
      <h2 className="font-clashDisplay text-4xl md:text-6xl text-center text-hsWhite font-medium my-10">
        Our Initiatives
      </h2>
      <section
        className={`initiatives-grid gap-4 sm:gap-y-10 sm:gap-x-7
       my-14 max-w-screen-lg w-full px-5 sm:px-0 sm:w-4/5 sm:mx-auto
        
       `}
      >
        <div className="c1 group hover:shadow-[#f55b5bc2] hover:shadow-2xl transition-shadow duration-300 bg-[#191322] flex items-center justify-between">
          <h2 className="ml-4 text-orange-500  font-clashDisplay    text-2xl sm:text-4xl max-w-xs">
            The
            <br />
            LaDebug Club
          </h2>
          <div>
            <div className="relative  m-5 sm:m-12 isolate">
              <Image
                src={laDebug}
                alt="LaDebug"
                width={160}
                height={198}
                className=" group-hover:scale-110 duration-300 -translate-y-1/4 aspect-[113/140] w-32 sm:w-40 "
              />
              <figure className="w-4/5 h-4/5 absolute bottom-1/2 left-1/2 translate-y-1/4 -translate-x-1/2  bg-[#F55B5B] blur-3xl -z-10" />
            </div>
          </div>
        </div>
        <div className="bg-[#191322] c2 group hover:shadow-[#ea00ffcb] hover:shadow-2xl  transition-shadow duration-200 space-y-5">
          <div className="w-full">
            <div className="w-max mx-auto relative isolate">
              <Image
                src={game}
                alt="Game"
                width={185}
                height={185}
                className="group-hover:scale-110 transition-transform duration-200 -translate-y-1/4 w-24 sm:w-36 aspect-square"
              />
              <figure
                className="
            w-2/3 h-2/3 blur-2xl bg-[#EB00FF] -z-10
            absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/4"
              />
            </div>
          </div>
          <h2 className="text-center font-clashDisplay text-[#9E4FFF]   text-2xl sm:text-4xl ">
            Bhartiya <br /> Gaming Co.
          </h2>
        </div>

        <div className="bg-[#191322] c3 group transition-shadow duration-200 hover:shadow-[#ffb700d5] hover:shadow-2xl space-y-5">
          <div className="w-full">
            <div className="w-max mx-auto relative isolate">
              <Image
                src={guru}
                alt="Guru"
                width={185}
                height={185}
                className="-translate-y-1/4 group-hover:scale-110 transition-transform duration-200 w-24 sm:w-36 aspect-square"
              />
              <figure
                className="
            w-2/3 h-2/3 blur-2xl bg-[#ffb800] -z-10
            absolute bottom-1/2 left-1/2 -translate-x-1/2 "
              />
            </div>
          </div>
          <h2 className="text-center font-clashDisplay  text-[#E6A866]   text-2xl sm:text-4xl ">
            Life of <br /> Gurus
          </h2>
        </div>

        <div className="c4 group hover:shadow-[#8000ffdf] hover:shadow-2xl transition-shadow duration-300 bg-[#191322] flex lg:flex-col-reverse items-center justify-between lg:justify-center ">
          <div className="lg:flex-1 ml-3 lg:mb-12">
            <h2 className=" text-[#00C3FF] text-center   font-clashDisplay    text-2xl sm:text-4xl max-w-sm">
              Membership
              <br />
              Townhall
            </h2>
          </div>
          <div className="lg:flex-1 lg:basis-3/5">
            <div className="relative  lg:translate-y-1/2  m-4 lg:my-auto lg:mx-0 sm:m-12 isolate">
              <Image
                src={diamond}
                alt="Membership Townhall"
                width={362}
                height={362}
                className=" group-hover:scale-110 transition-transform duration-300 aspect-square w-32 sm:w-52 lg:w-64"
              />
              <figure className="w-4/5 h-4/5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  bg-[#8000FF] blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Init;
