"use client";
import Image from "next/image";
import Bubble from "./Bubble";
import {
  useScroll,
  useSpring,
  motion,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
function useParallax(value: MotionValue, distance: number) {
  return useTransform(value, [0, 1], [1, distance]);
}
function Discord() {
  const [distance, setDistance] = useState(10);
  const circleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: circleRef });
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.innerWidth);
      if (window.innerWidth < 768) {
        setDistance(-5);
      } else {
        setDistance(10);
      }
    }
  }, []);
  return (
    <section className=" -mt-2 mb-28 overflow-hidden  relative">
      <div
        ref={circleRef}
        className=" translate-y-[35%] sm:translate-y-1/3  relative mx-auto rounded-full w-[min(80vw,800px)] h-[min(80vw,800px)]    bg-hsBlack inner shadow-violet  "
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  w-[70%] h-[70%]    inner shadow-violet ">
          <div className="relative w-full h-full ">
            <motion.div
              style={{
                translateX: useSpring(useParallax(scrollYProgress, -distance)),
                translateY: useSpring(useParallax(scrollYProgress, distance)),
              }}
              className="absolute top-1/2 left-0 -translate-x-1/2   "
            >
              <Bubble link="becaa" />
            </motion.div>
            <motion.div
              style={{
                translateX: useSpring(useParallax(scrollYProgress, -distance)),
                translateY: useSpring(useParallax(scrollYProgress, -distance)),
              }}
              className=" absolute left-0    "
            >
              <Bubble link="plasma" />
            </motion.div>
            <motion.div
              style={{
                translateX: useSpring(useParallax(scrollYProgress, distance)),
                translateY: useSpring(useParallax(scrollYProgress, -distance)),
              }}
              className="absolute right-0 top-1/3 translate-x-1/2 -translate-y-1/2   "
            >
              <Bubble link="plasma" />
            </motion.div>
          </div>

          <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full min-w-min w-[60%] h-[60%]  inner shadow-violet ">
            <div className="relative w-full h-full flex flex-col justify-center items-center sm:gap-y-4">
              <div className="scale-100">
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
                className="rounded-full navlink font-light  w-fit mx-auto lg:mx-0 p-2 sm:px-3 bg-hsBlue text-hsWhite font-montserrat  hidden sm:block text-sm"
              >
                Join the server
              </button>

              <motion.div
                style={{
                  translateX: useSpring(useParallax(scrollYProgress, distance)),
                  translateY: useSpring(useParallax(scrollYProgress, distance)),
                }}
                className="absolute -right-2 sm:right-0 translate-x-full scale-[70%]"
              >
                <Bubble link="solid" />
              </motion.div>
              <motion.div
                style={{
                  translateX: useSpring(
                    useParallax(scrollYProgress, -distance)
                  ),
                  translateY: useSpring(
                    useParallax(scrollYProgress, -distance)
                  ),
                }}
                className="absolute -left-5 sm:left-0  -translate-x-2/3  bottom-1/2 scale-[70%] "
              >
                <Bubble link="asdasd" />
              </motion.div>
              <motion.div
                style={{
                  translateX: useSpring(useParallax(scrollYProgress, distance)),
                  translateY: useSpring(
                    useParallax(scrollYProgress, -distance)
                  ),
                }}
                className="absolute right-0 -top-5 -translate-x-full scale-75 "
              >
                <Bubble link="liquid" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discord;
