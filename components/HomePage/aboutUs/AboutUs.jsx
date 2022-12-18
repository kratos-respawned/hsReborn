function AboutUs() {
  return (
    <section className="grid  lg:grid-cols-2 gap-x-10 sm:mt-40 py-44 md:py-40 items-center px-5 z-10">
      <div className="relative h-full ">
        <div className="bg-hsBlue w-80 h-80 lg:w-[480px] lg:h-[480px] blur-3xl rounded-full absolute -top-10 left-0 -z-0 opacity-80 sm:opacity-100">
          <div className="bg-hsPink w-36 h-36 lg:w-[192px] lg:h-[192px] blur-xl rounded-full absolute left-1/2 opacity-80 sm:opacity-100" />
        </div>
      </div>
      <div className="space-y-5 md:max-w-[483px] z-10 flex flex-col">
        <h2 className="font-clashDisplay text-hsWhite text-center text-5xl md:text-left sm:text-7xl">
          About Us
        </h2>
        <p className="navlink text-base sm:text-lg text-hsWhite text-justify ">
          Hackoverflow Society (HS) is one of the fastest-growing North Indian
          student societies. Recognized NAAC A+ accredited Chandigarh
          University, it organizes university-level, national, and international
          hackathons, webinars, and workshops.
        </p>
        <button
          className="rounded-full p-2 px-3 bg-hsBlue text-hsWhite navlink text-sm w-fit mx-auto md:mx-0 "
          alt="Learn More"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
