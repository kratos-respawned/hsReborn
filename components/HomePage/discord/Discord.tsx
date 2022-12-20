import Image from "next/image";
import Bubble from "./Bubble";
function Discord() {
  return (
    <section className=" -mt-2 mb-28 overflow-y-hidden  relative">
      <div className=" translate-y-[35%] sm:translate-y-1/3  relative mx-auto rounded-full w-[min(80vw,800px)] h-[min(80vw,800px)]    bg-hsBlack rotate-180 shadow-2xl shadow-[#8000ff5b]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  w-[70%] h-[70%]    shadow-2xl shadow-[#8000ff5b] ">
          <div className="absolute right-0 bottom-0  rotate-180 ">
            <Bubble link="bec" />
          </div>
          <div className="absolute right-0 bottom-1/2 translate-x-full translate-y-1/2  rotate-180 ">
            <Bubble link="plasma" />
          </div>
          <div className="absolute left-0 bottom-0 -translate-x-1/2 -translate-y-1/2  rotate-180 ">
            <Bubble link="plasma" />
          </div>
          <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full min-w-min w-[60%] h-[60%]  inner shadow-violet rotate-180">
            <div className="relative w-full h-full flex flex-col justify-center items-center sm:gap-y-4">
              <div className="">
                <Image
                  src="/Discord.png"
                  alt="discord"
                  width={150}
                  height={150}
                  className="md:w-40 md:h-40 sm:w-32 sm:h-32 w-20 h-20 object-scale-down"
                />
              </div>
              <button
                type="button"
                className="rounded-full navlink font-light  w-fit mx-auto lg:mx-0 p-2 sm:px-3 bg-hsBlue text-hsWhite navlink  hidden sm:block text-sm"
              >
                Join the server
              </button>
              <div className="absolute right-0 translate-x-full scale-[70%]">
                <Bubble link="solid" />
              </div>
              <div className="absolute left-5 -translate-x-2/3  bottom-1/2 scale-[70%] ">
                <Bubble link="asdasd" />
              </div>
              <div className="absolute right-0 -top-5 -translate-x-full scale-75 ">
                <Bubble link="liquid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discord;
