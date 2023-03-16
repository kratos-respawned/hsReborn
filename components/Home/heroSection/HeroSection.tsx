import Image from "next/image";
import { m as motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
function HeroSection() {
  const image = useRef<HTMLImageElement>(null);
  const hover = () => {
    if (!image.current) return;
    const imgHeight = image.current.clientHeight;
    const imgWidth = image.current.clientWidth;
    image.current.addEventListener("mousemove", handleMove);
    function handleMove(e: MouseEvent) {
      if (!image.current) return;
      const xVal: number = e.offsetX;
      const yVal: number = e.offsetY;
      const yRotation: number = 10 * ((xVal - imgWidth / 2) / imgWidth);
      const xRotation: number = -10 * ((yVal - imgHeight / 2) / imgHeight);
      const string =
        "perspective(500px) scale(1) rotateX(" +
        xRotation +
        "deg) rotateY(" +
        yRotation +
        "deg)";
      image.current.style.transform = string;
    }
    image.current.addEventListener("mouseout", function () {
      if (!image.current) return;
      image.current.style.transform =
        "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      hover();
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <main className="flex flex-col-reverse lg:flex-row  items-center justify-between lg:gap-5   lg:mt-10 pb-24 px-5 ">
      <section className="max-w-[580px] lg:max-w-[575px] space-y-5 lg:space-y-6  z-30 flex flex-col flex-grow lg:flex-grow-0 ">
        <h2 className="font-clashDisplay font-medium text-white  text-3xl md:text-5xl lg:text-6xl text-center lg:text-start ">
          Fastest growing student society in North India
        </h2>
        <p className="font-Montserrat text-hsWhite leading-7 text-center lg:text-justify text-sm md:text-base">
          Created by the students for the students. Pioneered with the objective
          of integrating passionate and driven tech and non-tech enthusiasts
          across the world.
        </p>
        {/* <Link
          type="button"
          href={"/about"}
          className="rounded-full  w-fit mx-auto lg:mx-0 p-2 px-3 bg-hsBlue hover:bg-hsPink transition-colors duration-200 hover:text-hsBlack text-hsWhite font-Montserrat text-sm md:text-base"
        >
          Learn More
        </Link> */}
      </section>
      <section className="py-3 lg:py-6 flex-grow-0 lg:flex-grow relative z-10 ">
        <motion.div>
          <Image
            ref={image}
            src="/hsLogo.png"
            alt="hero section Logo "
            className="mx-auto lg:w-96 lg:h-[415px] sm:w-80 w-64 aspect-[388/419]  z-10 relative "
            width={384}
            height={415}
            priority
          />
        </motion.div>

        <figure
          aria-hidden
          className="bg-hsBlue w-80 h-80 sm:w-[492px] sm:h-[492px] blur-3xl rounded-full absolute -top-2 translate-x-32 -z-10"
        >
          <figure className="bg-hsPink w-36 h-36 sm:w-[192px] sm:h-[192px] blur-2xl rounded-full absolute top-10 translate-x-48" />
        </figure>
      </section>
    </main>
  );
}

export default HeroSection;
