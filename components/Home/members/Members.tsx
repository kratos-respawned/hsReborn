function Members() {
  return (
    <section className="">
      <hr className="w-[90%] mx-auto" />
      <section className="font-clashDisplay grid grid-rows-3 gap-2 sm:gap-0 sm:grid-cols-3 sm:grid-rows-1 justify-center items-center my-36 w-[90%] mx-auto relative    ">
        <div className=" bg_slider px-5 hover:text-hsBlack   text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-center flex-1 py-12 border  sm:border-l-0 border-[#eb01f3]  h-full text-white">
          5000 +
          <br />
          <span className="text-2xl">Community Members</span>
        </div>
        <div className=" bg_slider px-5 hover:text-hsBlack text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-center flex-1 py-12 border  sm:border-l-0 sm:border-r-0 border-[#eb01f3] h-full text-white">
          50 +
          <br />
          <span className="text-2xl">Events Organised</span>
        </div>
        <div className=" bg_slider px-5 hover:text-hsBlack text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-center flex-1 py-12  border  sm:border-r-0 border-[#eb01f3] h-full text-white">
          5000 +
          <br />
          <span className="text-2xl">Active Members</span>
        </div>
      </section>
    </section>
  );
}

export default Members;
