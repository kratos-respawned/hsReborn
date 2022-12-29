import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
function HeroSection() {
  let height = useRef(415);
  let width = useRef(384);
  const image = useRef<HTMLImageElement>(null);
  const hover = () => {
    const imgHeight = image.current?.clientHeight;
    const imgWidth = image.current?.clientWidth;
    image.current?.addEventListener("mousemove", handleMove);
    function handleMove(e: MouseEvent) {
      const xVal: number = e.offsetX;
      const yVal: number = e.offsetY;
      if (!imgHeight || !imgWidth) return;
      const yRotation: number = 10 * ((xVal - imgWidth / 2) / imgWidth);

      const xRotation: number = -10 * ((yVal - imgHeight / 2) / imgHeight);

      const string =
        "perspective(500px) scale(1) rotateX(" +
        xRotation +
        "deg) rotateY(" +
        yRotation +
        "deg)";

      if (image.current) image.current.style.transform = string;
    }

    image.current?.addEventListener("mouseout", function () {
      if (image.current)
        image.current.style.transform =
          "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    });
  };

  useEffect(() => {
    if (window?.innerWidth < 1024) {
      height.current = 309.6;
      width.current = 288;
    }
    hover();
  }, []);
  return (
    <main className="flex flex-col-reverse lg:flex-row  items-center justify-between lg:gap-2   lg:mt-10 pb-24 px-5 ">
      <section className="max-w-[580px] lg:max-w-[575px] space-y-5 lg:space-y-6  z-30 flex flex-col flex-grow lg:flex-grow-0 ">
        <h2 className="font-clashDisplay font-medium text-white  text-3xl md:text-5xl lg:text-6xl text-center lg:text-start ">
          Fastest growing student society in North India
        </h2>
        <p className="font-Montserrat text-hsWhite leading-7 text-center lg:text-justify text-sm md:text-base">
          Created by the students for the students. Pioneered with the objective
          of integrating passionate and driven tech and non-tech enthusiasts
          across the world.
        </p>
        <button
          type="button"
          className="rounded-full  w-fit mx-auto lg:mx-0 p-2 px-3 bg-hsBlue hover:bg-hsPink transition-colors duration-200 hover:text-hsBlack text-hsWhite font-Montserrat text-sm md:text-base"
        >
          Learn More
        </button>
      </section>
      <section className="py-3 lg:py-6 flex-grow-0 lg:flex-grow relative z-10 ">
        <motion.div layout layoutId="loader">
          <Image
            ref={image}
            src="/hsLogo.png"
            alt="hero section Logo "
            className="mx-auto  z-10 relative "
            width={width.current}
            height={height.current}
            priority
            loading="eager"
            unoptimized
          />
        </motion.div>

        <figure
          aria-hidden
          className="bg-hsBlue w-80 h-80 sm:w-[492px] sm:h-[492px] blur-3xl rounded-full absolute -top-2 translate-x-32 -z-10"
        >
          <figure className="bg-hsPink w-36 h-36 sm:w-[192px] sm:h-[192px] blur-xl rounded-full absolute top-10 translate-x-48" />
        </figure>
      </section>
    </main>
  );
}

export default HeroSection;
