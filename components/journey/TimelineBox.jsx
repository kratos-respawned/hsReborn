"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export default function TimelineBox(props) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const animation = useAnimation();
  const axis = props.right ? 80 : -80;
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
  }, [inView]);
  const gradientStyle = {
    background:
      "linear-gradient(0deg, rgba(18, 18, 18, 0.1), rgba(18, 18, 18, 0.6)), linear-gradient(90deg, #0F0E0E 4.89%, rgba(21, 21, 21, 0) 100%)",
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: axis }}
        ref={ref}
        animate={animation}
        className={`  group overflow-hidden hover:shadow-[#452a91] hover:shadow-2xl  transition-shadow  relative flex flex-col items-start justify-start px-3 py-5 min-h-[220px] w-[400px] max-w-full md:w-[450px] rounded-l-3xl rounded-b-3xl ${props.className} `}
        style={gradientStyle}
      >
        <div className="w-full h-full">
          <div className="absolute top-0 -right-3 transition-transform group-hover:-translate-x-3 ease-out hidden md:block">
            <svg
              width="212"
              height="12"
              viewBox="0 0 212 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.91892 0H42L36.3243 12H0L4.91892 0Z"
                fill="#7242F9"
                fillOpacity="0.55"
              />
              <path
                d="M49.9189 0H87L81.3243 12H45L49.9189 0Z"
                fill="#7242F9"
                fillOpacity="0.79"
              />
              <path
                d="M94.9189 0H132L126.324 12H90L94.9189 0Z"
                fill="#7242F9"
                fillOpacity="0.85"
              />
              <path
                d="M139.919 0H177L171.324 12H135L139.919 0Z"
                fill="#7242F9"
                fillOpacity="0.85"
              />
              <path
                d="M185.034 0H212V12H180L185.034 0Z"
                fill="#7242F9"
                fillOpacity="0.85"
              />
            </svg>
          </div>
          <div className="absolute top-0 right-0 md:hidden">
            <svg
              width="149"
              height="9"
              viewBox="0 0 149 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.21015 0H29.2711L25.4352 8.11009H0.885742L4.21015 0Z"
                fill="#267B8D"
                fillOpacity="0.55"
              />
              <path
                d="M34.3819 0H57.6527L54.0909 8.11009H31.2949L34.3819 0Z"
                fill="#267B8D"
                fillOpacity="0.79"
              />
              <path
                d="M63.0109 0H88.0718L84.236 8.11009H59.6865L63.0109 0Z"
                fill="#267B8D"
                fillOpacity="0.85"
              />
              <path
                d="M93.4201 0H118.481L114.645 8.11009H90.0957L93.4201 0Z"
                fill="#267B8D"
                fillOpacity="0.85"
              />
              <path
                d="M123.838 0H148.899L145.063 8.11009H120.514L123.838 0Z"
                fill="#267B8D"
                fillOpacity="0.85"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-x-2 sm:flex-row justify-between w-full">
            <p className="font-clashDisplay tracking-widest font-semibold text-lg uppercase text-[#267B8D] md:text-white relative w-full mt-5">
              {props.title}
            </p>
            <span className="font-clashDisplay font-semibold text-lg uppercase text-[#267B8D] md:text-[#A686FF] absolute right-1">
              {props.year}
            </span>
          </div>

          <p className="text-sm text-[#bbb] h-full leading-6 mt-7 font-extralight font-generalSans tracking-wider">
            {props.desc}
          </p>
          <div className="absolute bottom-0 right-0">
            <svg
              width="33"
              height="34"
              viewBox="0 0 33 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H11V11H0V0Z" fill="#1A2024" />
              <path d="M0 0H11V11H0V0Z" fill="#1A2024" />
              <path d="M22 0L33 0V11H22V0Z" fill="#1A2024" />
              <path d="M22 0L33 0V11H22V0Z" fill="#1A2024" />
              <rect
                x="11"
                y="11"
                width="11.3574"
                height="11.3574"
                fill="#1A2024"
              />
              <rect y="22" width="11.3574" height="11.3574" fill="#1A2024" />
            </svg>
          </div>
        </div>
      </motion.div>
    </>
  );
}
