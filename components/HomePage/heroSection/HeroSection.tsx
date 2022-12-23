import Image from "next/image";
import hs from "../heroSection/hs.svg";
import { motion } from "framer-motion";
function HeroSection() {
  return (
    <main className="flex flex-col-reverse lg:flex-row  items-center justify-between   lg:mt-10 pb-24 px-5 ">
      <section className="max-w-[575px] space-y-5 lg:space-y-6  z-30 flex flex-col flex-grow lg:flex-grow-0 ">
        <h2 className="font-clashDisplay font-medium text-white  text-3xl md:text-5xl lg:text-6xl text-center lg:text-start ">
          Fastest growing student society in North India
        </h2>
        <p className="font-montserrat text-hsWhite leading-7 text-center lg:text-justify text-sm md:text-base">
          Created by the students for the students. Pioneered with the objective
          of integrating passionate and driven tech and non-tech enthusiasts
          across the world.
        </p>
        <button
          type="button"
          className="rounded-full  w-fit mx-auto lg:mx-0 p-2 px-3 bg-hsBlue text-hsWhite font-montserrat text-sm md:text-base"
        >
          Learn More
        </button>
      </section>
      <section className="py-3 lg:py-6 flex-grow-0 lg:flex-grow relative z-10 ">
        <motion.div>
          <Image
            src={hs}
            alt="hero section Logo "
            className="mx-auto h-72 lg:h-96"
            width={387}
            height={417}
            priority
          />
        </motion.div>

        <div className="bg-hsBlue w-80 h-80 sm:w-[492px] sm:h-[492px] blur-3xl rounded-full absolute -top-2 translate-x-32 -z-10">
          <div className="bg-hsPink w-36 h-36 sm:w-[192px] sm:h-[192px] blur-xl rounded-full absolute top-10 translate-x-48" />
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
