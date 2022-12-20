import React, { Fragment, useEffect, useRef } from "react";
import TimelineBox from "./TimelineBox";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
// @ts-ignore
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [0, distance]);
}
export default function Journey() {
  const heading = useRef(null);
  const isInView = useInView(heading, { amount: 1 });
  const ref = useRef(null);
  const [height, setHeight] = React.useState(100);
  const { scrollYProgress } = useScroll({ target: ref });
 // @ts-ignore
 const y = useSpring(useParallax(scrollYProgress, height), {
    // @ts-ignore
type: "spring",

   // @ts-ignore
 stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      heading.current.classList.add("start");
    }
    setHeight(ref.current.clientHeight);
  }, [isInView]);

  return (
    <main className="mt-0 md:mt-64 pb-16 relative">
      <div className="flex flex-col justify-center items-center gap-y-7  my-10 mb-16 relative">
        <h2 className="z-30 align-middle text-center block font-clashDisplay md:leading-[70px] font-medium md:font-semibold text-white text-4xl sm:text-6xl  ">
          Our
          <span ref={heading} className={`cursor-pointer ml-5 hoverEffect `}>
            Journey
          </span>
        </h2>
        <h3 className="text-lg py-4 font-clashDisplay italic text-white leading-[0px]  w-full text-center font-light pt-2">
          How it all started
        </h3>
        <div className="bg-hsPink w-32 h-32 sm:w-52 sm:h-52 bg-blend-luminosity blur-[100px] absolute -top-16 sm:top-0 left-3/4" />
      </div>

      <section
        ref={ref}
        className="mx-auto relative  z-10 px-7 grid  grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-9 gap-y-12 lg:gap-y-4 place-items-center   h-full pb-20 w-full"
      >
        <div className="absolute top-0 overflow-hidden left-0 md:-translate-x-1/2 md:left-1/2 rounded-full  sm:left-7 h-full w-4 bg-[#282828] ">
          <motion.div
            style={{ height: y }}
            className=" h-[13%] w-full rounded-full bg-[#DE5FFE]"
          ></motion.div>
        </div>

        {Timeline.map((e, index) => {
          return (
            <Fragment key={index}>
              {e.id % 2 != 0 ? <div className="hidden md:block"></div> : null}
              <TimelineBox
                right={e.id % 2 == 0 ? true : false}
                className={
                  e.id % 2 != 0
                    ? "ml-auto md:mr-auto md:ml-4"
                    : "ml-auto md:mr-4 md:ml-auto"
                }
                id={e.id}
                title={e.title}
                year={e.year}
                desc={e.description}
              />
              {e.id % 2 == 0 ? <div className="hidden md:block"></div> : null}
            </Fragment>
          );
        })}
      </section>
      <div className="bg-[#C81D5B] w-36 h-36 sm:w-52 sm:h-52 bg-blend-luminosity blur-[100px]  absolute  -bottom-12 sm:-bottom-6 left-0" />
    </main>
  );
}

export const Timeline = [
  {
    id: "1",
    title: "The First Milestone",
    year: "2017",
    description:
      "Hackoverflow 1.0 was Chandigarh University’s first-ever national hackathon, pioneered by our co-founders Ayonika Dey and Karan Bhargav. It was an official event of the university’s tech festival and was one of the mega-events.",
  },
  {
    id: "2",
    title: "The Turning Point",
    year: "2018",
    description:
      "Hackoverflow 2.0 was awarded the best event at the annual tech festival of CU – “Tech Invent”. It took the team almost 15 days to get an event promoted by Chandigarh University earlier, but now it is just 30 minutes.",
  },
  {
    id: "3",
    title: "The Rebirth",
    year: "2019",
    description:
      "The building blocks of the community were established with Amit Kumar Mishra, who proved his capabilities by organizing the AIT day, which is now an annual event for the Apex Institute of Technology. Karan Bhargav was appointed as the Director, Ayonika Dey as the President, and Harshiv as the Vice-President. The team began working on pan-India outreach and the Campus Ambassador program was brought to execution.",
  },
  {
    id: "4",
    title: "The Show Stealer",
    year: "2020",
    description:
      "Hackoverflow 3.0 received more than 3,500 registrations. 50 teams from all over India participated in the event. The event began with more than 50 dedicated volunteers and 250 participants. During the valedictory ceremony, the Hon’ble Chancellor of Chandigarh University officially launched the Hackoverflow Technical Society.",
  },
  {
    id: "5",
    title: "The Streak",
    year: "2020 - 2021",
    description:
      "Despite the pandemic, society has organized a plethora of events. We kicked off the streak with the much-anticipated Membership Program, followed by Hack 1-on-1. The new recruitments pumped up the society and organized Genesis 1.0. Later on, the Hackoverflow Society organized the Freshers’ Carnival – a fun event for newcomers to get to know each other.",
  },
  {
    id: "6",
    title: "The Present",
    year: "2021",
    description:
      "The journey of Hackoverflow Society has been a roller-coaster ride, pioneering a fresh business-tech concept - “Hack The Fest”. It is the team’s hard work that ultimately positioned Hackoverflow Society to execute such wonderful events. We believe “the journey is more important than the destination”, and our community continues to grow stronger than ever.",
  },
];
