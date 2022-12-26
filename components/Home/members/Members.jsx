import React from "react";

export default function Members() {
  return (
    <>
      <main className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-center my-36 px-20 md:px-32 relative  w-full  ">
        <div className="font-clashDisplay bg_slider  text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-center flex-1 py-12 border  sm:border-l-0 border-[#eb01f3]  h-full text-white">
          34
          <br />
          <span className="text-2xl">ABC</span>
        </div>
        <div className="font-clashDisplay bg_slider text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-center flex-1 py-12 border  sm:border-l-0 sm:border-r-0 border-[#eb01f3] h-full text-white">
          250
          <br />
          <span className="text-2xl">Members</span>
        </div>
        <div className="font-clashDisplay bg_slider text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-center flex-1 py-12  border  sm:border-r-0 border-[#eb01f3] h-full text-white">
          50
          <br />
          <span className="text-2xl">XYZ</span>
        </div>
      </main>
    </>
  );
}
