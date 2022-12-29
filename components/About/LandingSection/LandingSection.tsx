function LandingSection() {
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
      <h1 className="max-w-6xl  font-clashDisplay font-light text-center  text-3xl sm:text-5xl lg:text-6xl  text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, vel
        euismod ornare vel vitae convallis placerat.
      </h1>
    </div>
  );
}

export default LandingSection;
