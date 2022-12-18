function Members() {
  return (
    <section className="">
      <section className="border-t border-t-white grid grid-cols-3 mx-5 mt-10  py-16 md:py-28 relative overflow-y-hidden z-10">
        <div className="grid place-items-center gap-y-2">
          <p className="text-hsPink font-clashDisplay text-3xl sm:text-5xl lg:text-7xl">
            5000 +
          </p>
          <p className="text-hsWhite font-clashDisplay  text-sm md:text-2xl lg:text-3xl text-center ">
            Community Members
          </p>
        </div>
        <div className="grid place-items-center gap-y-2">
          <p className="text-hsPink font-clashDisplay text-3xl sm:text-5xl lg:text-7xl">
            50 +
          </p>
          <p className="text-hsWhite font-clashDisplay  text-sm md:text-2xl lg:text-3xl text-center ">
            Events Organised
          </p>
        </div>
        <div className="grid place-items-center gap-y-2">
          <p className="text-hsPink font-clashDisplay text-3xl sm:text-5xl lg:text-7xl">
            5000 +
          </p>
          <p className="text-hsWhite font-clashDisplay  text-sm md:text-2xl lg:text-3xl text-center ">
            Active Members
          </p>
        </div>
        <div className="bg-hsBlue blur-3xl  w-3/4 h-96 absolute top-full -translate-y-7 left-1/2 -translate-x-1/2 -z-10 ">
          <div className="bg-hsPink blur-lg bg-blend-normal w-1/2 h-36 mx-auto translate-y-5" />
        </div>
      </section>
    </section>
  );
}

export default Members;
