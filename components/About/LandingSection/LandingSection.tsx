import { m as motion, useScroll, useTransform } from "framer-motion";

function LandingSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  return (
    <div className="-mt-4 md:mt-0  grid place-items-center relative h-[80vh] max-h-[750px] w-11/12 mx-auto z-10">
      <figure
        aria-hidden
        className="bg-hsBlue  w-60 h-64 md:w-96 md:h-80  blur-2xl md:blur-3xl absolute top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2  -z-10"
      >
        <figure
          aria-hidden
          className="bg-hsPink blur-2xl md:blur-3xl w-20 md:w-32 h-full aspect-square rounded-full"
        />
      </figure>
      <motion.h1
        style={{
          translateY: y,
        }}
        className="max-w-6xl  font-clashDisplay font-light text-center  text-3xl sm:text-5xl lg:text-6xl  text-white"
      >
        Discover a community of passionate peers and unlock your potential with Hackoverflow Society.
      </motion.h1>
    </div>
  );
}

export default LandingSection;
