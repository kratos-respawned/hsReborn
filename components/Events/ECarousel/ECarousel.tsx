import Slider from "./Slider"
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EventCards from "./EventCards";
function ECarousel() {
  const [upcoming, setUpcoming] = useState(true);
  return (
    <main className="w-11/12 mx-auto">
      <div className="flex justify-between text-2xl md:text-5xl  font-clashDisplay text-white py-7 border-b">
        <button
          onClick={() => { setUpcoming(true) }}
          className={`${upcoming ? " font-medium " : "font-extralight "} text-left tracking-wider`}>
          Upcoming <br /> Events
        </button>
        <button
          onClick={() => { setUpcoming(false) }}
          className={`${upcoming ? "font-extralight  " : "font-medium  "} text-right tracking-wider `}>
          Marquee <br /> Events
        </button>
      </div>
      <AnimatePresence>
        {
          upcoming ? (
            <Slider />
          ) : (
            <EventCards />)
        }
      </AnimatePresence>

    </main>
  );
}
export default ECarousel;

