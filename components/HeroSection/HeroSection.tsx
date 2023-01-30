import { m as motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
type Props = {
  title: string;
};
function HeroSection({ title }: Props) {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, `${pathname === "/team" ? -1500 : -400}`]
  );
  return (
    <div className="-mt-4 md:mt-0 md:mb-4  grid place-items-center relative h-[80vh] max-h-[750px] w-11/12 mx-auto z-10">
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
        style={{ translateY: y }}
        className="font-clashDisplay text-center font-medium text-6xl sm:text-8xl md:text-9xl  text-white"
      >
        {title.split(" ")[0]}
        <br />
        {title.split(" ")[1]}
      </motion.h1>
    </div>
  );
}

export default HeroSection;
