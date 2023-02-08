function AboutUs() {
  return (
    <section className="grid  lg:grid-cols-2 gap-x-10 sm:mt-40 my-10 py-52 md:py-40 items-center px-5 z-10">
      <div className="relative h-full ">
        <figure
          aria-hidden
          className="bg-hsBlue w-24 h-24 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] blur-3xl  rounded-full absolute -top-10 left-0 -z-0 opacity-80 sm:opacity-100"
        >
          <figure
            aria-hidden
            className="bg-hsPink w-24 h-24 sm:w-36 sm:h-36 lg:w-[192px] lg:h-[192px] blur-3xl rounded-full absolute left-1/2 opacity-80 sm:opacity-100"
          />
        </figure>
      </div>
      <div className="space-y-5 lg:max-w-[483px] z-10 flex flex-col">
        <h2 className="font-clashDisplay text-hsWhite text-center text-5xl lg:text-left sm:text-7xl">
          About Us
        </h2>
        <p className="font-Montserrat text-base sm:text-lg text-hsWhite text-justify ">
          Hackoverflow Society (HS) is one of the fastest-growing North Indian
          student societies. Recognized NAAC A+ accredited Chandigarh
          University, it organizes university-level, national, and international
          hackathons, webinars, and workshops.
        </p>
        <button className="rounded-full p-2 px-3 bg-hsBlue text-hsWhite hover:bg-hsPink transition-colors duration-200 hover:text-hsBlack font-Montserrat text-sm md:text-base w-fit mx-auto lg:mx-0 ">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
