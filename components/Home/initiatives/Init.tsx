import Image from "next/image";
import diamond from "./Diamond.png";
import game from "./Game.png";
import laDebug from "./LaDebug.png";
import guru from "./Guru.png";
function Init() {
  return (
    <section
      className={`initiatives-grid gap-10 my-14
    max-w-screen-lg w-4/5 mx-auto `}
    >
      <div className="c1 bg-[#191322] flex items-center justify-between">
        <h2 className="ml-4 flex-1 text-orange-500  font-clashDisplay  text-5xl max-w-sm">
          The
          <br />
          LaDebug Club
        </h2>
        <div>
          <div className="relative  m-12 isolate">
            <Image
              src={laDebug}
              alt="LaDebug"
              width={160}
              height={198}
              className=" aspect-[113/140] w-40 "
            />
            <figure className="w-4/5 h-4/5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  bg-[#F55B5B] blur-3xl -z-10" />
          </div>
        </div>
      </div>
      <div className="bg-[#191322] c2 space-y-7">
        <div className="w-full">
          <div className="w-max mx-auto relative isolate">
            <Image
              src={game}
              alt="Game"
              width={185}
              height={185}
              className="w-36 aspect-square"
            />
            <figure
              className="
            w-2/3 h-2/3 blur-2xl bg-[#EB00FF] -z-10
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <h2 className="text-center font-clashDisplay text-[#9E4FFF] text-5xl ">
          Bhartiya <br /> Gaming Co.
        </h2>
      </div>

      <div className="bg-[#191322] c3 space-y-7">
        <div className="w-full">
          <div className="w-max mx-auto relative isolate">
            <Image
              src={guru}
              alt="Guru"
              width={185}
              height={185}
              className="w-36 aspect-square"
            />
            <figure
              className="
            w-2/3 h-2/3 blur-2xl bg-[#ffb800] -z-10
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <h2 className="text-center font-clashDisplay  text-[#E6A866] text-5xl ">
          Life of <br /> Gurus
        </h2>
      </div>

      <div className="c4 bg-[#191322] flex items-center justify-between">
        <h2 className="ml-4 flex-1 text-orange-500  font-clashDisplay  text-5xl max-w-sm">
          Membership
          <br />
          Townhall
        </h2>
        <div>
          <div className="relative  m-12 isolate">
            <Image
              src={diamond}
              alt="Membership Townhall"
              width={362}
              height={362}
              className=" aspect-square w-52 "
            />
            <figure className="w-4/5 h-4/5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  bg-[#F55B5B] blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Init;
