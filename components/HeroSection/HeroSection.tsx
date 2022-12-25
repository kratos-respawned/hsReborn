type Props = {
  title: string;
};
function HeroSection({ title }: Props) {
  return (
    <div className="-mt-4 md:mt-0  grid place-items-center relative h-[80vh] max-h-[750px] w-11/12 mx-auto z-10">
      <figure
        aria-hidden
        className="bg-hsBlue  w-96 h-80  blur-3xl absolute top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2  -z-10"
      >
        <figure
          aria-hidden
          className="bg-hsPink blur-3xl w-32 h-full aspect-square rounded-full"
        />
      </figure>

      <h1 className="font-clashDisplay text-center font-medium text-8xl md:text-9xl  text-white">
        {title.split(" ")[0]}
        <br />
        {title.split(" ")[1]}
      </h1>
    </div>
  );
}

export default HeroSection;
