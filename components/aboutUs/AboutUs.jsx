function AboutUs() {
  return (
    <section className="grid grid-cols-2 gap-x-10 mt-40 py-40 items-center ">
      <div className="relative h-full ">
        <div className="bg-hsBlue w-[480px] h-[480px] blur-3xl rounded-full absolute -top-10 left-0 ">
          <div className="bg-hsPink w-[192px] h-[192px] blur-xl rounded-full absolute left-1/2 " />
        </div>
      </div>
      <div className="space-y-5 max-w-[483px] ">
        <h2 className="font-clashDisplay text-hsWhite text-7xl">About Us</h2>
        <p className="navlink text-lg text-hsWhite text-justify">
          Hackoverflow Society (HS) is one of the fastest-growing North Indian
          student societies. Recognized NAAC A+ accredited Chandigarh
          University, it organizes university-level, national, and international
          hackathons, webinars, and workshops.
        </p>
        <button
          className="rounded-full p-2 px-3 bg-hsBlue text-hsWhite navlink text-sm"
          alt="Learn More"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
