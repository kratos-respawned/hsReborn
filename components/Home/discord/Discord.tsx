"use client";
import Image from "next/image";
import Bubble from "./Bubble";
import {
  useScroll,
  m as motion,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
function useParallax(value: MotionValue, distance: number) {
  if (typeof window !== "undefined") {
    if (window.innerWidth < 768) {
      return useTransform(value, [1, 0], [1, distance]);
    } else {
      return useTransform(value, [0, 1], [1, distance]);
    }
  }
  return useTransform(value, [0, 1], [1, distance]);
}
function Discord() {
  const [distance, setDistance] = useState(10);
  const circleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: circleRef });
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setDistance(1.2);
      } else {
        setDistance(1.3);
      }
    }
  }, []);
  return (
    <section
      ref={circleRef}
      className=" mt-6   overflow-hidden  relative z-40 "
    >
      <h2 className=" translate-y-10 sm:translate-y-20 text-center font-clashDisplay text-white  text-3xl sm:text-5xl">
        Join our Discord
      </h2>
      {/* circle 1 */}
      <div className=" translate-y-[35%] sm:translate-y-1/3   relative mx-auto rounded-full w-[min(90vw,900px)] h-[min(90vw,900px)]     inner shadow-violet  ">
        {/* circle 2 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  w-[70%] h-[70%]    inner shadow-violet ">
          <motion.div
            style={{
              scale: useSpring(useParallax(scrollYProgress, distance)),
            }}
            className="relative w-full h-full "
          >
            <div className="absolute top-1/2 left-0 -translate-x-1/2   ">
              <Bubble link="becaa" />
            </div>
            <div className=" absolute left-0    ">
              <Bubble link="plasma" />
            </div>
            <div className="absolute right-0 top-1/3 translate-x-1/2 -translate-y-1/2   ">
              <Bubble link="plasma" />
            </div>
          </motion.div>
          {/* circle 3 */}
          <div className="isolate grid place-items-center absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full min-w-min w-[60%] h-[60%]  inner shadow-violet ">
            {/* discord images */}
            <div className="space-y-3">
              <div className="scale-90">
                <Image
                  src="/Discord.png"
                  alt="discord"
                  width={120}
                  height={120}
                  className="md:w-40 md:h-40 sm:w-32 sm:h-32 w-20 h-20 object-scale-down"
                />
              </div>
              <button
                type="button"
                className="rounded-full navlink   w-fit mx-auto  p-2 sm:px-3 bg-hsBlue text-hsWhite font-generalSans  hidden lg:block text-sm"
              >
                Join the server
              </button>
            </div>
            {/* inner images */}
            <motion.div
              style={{
                scale: useSpring(useParallax(scrollYProgress, distance)),
              }}
              className="-z-10 absolute w-full h-full flex flex-col justify-center items-center gap-y-2"
            >
              <motion.div className="absolute -right-2 sm:right-0 translate-x-full scale-[70%]">
                <Bubble link="solid" />
              </motion.div>
              <motion.div className="absolute -left-5 sm:left-0  -translate-x-2/3  bottom-1/2 scale-[70%] ">
                <Bubble link="asdasd" />
              </motion.div>
              <motion.div className="absolute right-0 -top-5 -translate-x-full scale-75 ">
                <Bubble link="liquid" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discord;
