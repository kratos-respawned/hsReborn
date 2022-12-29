// import { useTime, useTransform, MotionValue, motion } from "framer-motion";
type Props = {
  title: string;
};
function HeroSection({ title }: Props) {
  // const t: MotionValue = useTime();
  // const y = useTransform(t, (value) => Math.cos(value / 200) * 10);
  // const scale = useTransform(
  //   t,
  //   (value) => Math.abs(Math.sin(value / 1450)) * 0.2 + 0.8
  // );
  // const levitate = useTransform(
  //   t,
  //   (value) => Math.abs(Math.sin(value / 1500)) * 0.2
  // );
  return (
    <div className="-mt-4 md:mt-0 md:mb-4  grid place-items-center relative h-[80vh] max-h-[750px] w-11/12 mx-auto z-10">
      <figure
        aria-hidden
        className="bg-hsBlue  w-60 h-64 md:w-96 md:h-80  blur-2xl md:blur-3xl absolute top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2  -z-10"
      >
        <figure
          // style={{ scale }}
          aria-hidden
          className="bg-hsPink blur-2xl md:blur-3xl w-20 md:w-32 h-full aspect-square rounded-full"
        />
      </figure>

      <h1 className="font-clashDisplay text-center font-medium text-6xl sm:text-8xl md:text-9xl  text-white">
        {title.split(" ")[0]}
        <br />
        {title.split(" ")[1]}
      </h1>
    </div>
  );
}

export default HeroSection;
