import React from "react";
import ImageCard from "../ImageCard";

function AllTeam() {
  return (
    <div className="px-7">
      <section className="border-t py-24 relative ">
        {/* <>
        <figure
          aria-hidden
          className="absolute bg-hsBlue w-52 h-52 
        left-0 -translate-x-1/2 bottom-1/2 -translate-y-1/2
        blur-[100px]"
  />*/}
        {/* <figure
        aria-hidden
        className="absolute bg-hsPink w-44 h-44 rounded-full 
        right-0 translate-x-1/2 bottom-1/4 translate-y-1/2
              blur-3xl"
      /> */}
        {/* </> */}

        <h2 className="font-clashDisplay  font-medium text-6xl text-center text-hsWhite mb-16">
          All Teams
        </h2>
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
          <ImageCard
            designation="Team Members > "
            image="/Team/akm.png"
            name="Branding Team"
          />
          <ImageCard
            designation="Team Members > "
            image="/Team/akm.png"
            name="Branding Team"
          />
          <ImageCard
            designation="Team Members > "
            image="/Team/akm.png"
            name="Branding Team"
          />
          <ImageCard
            designation="Team Members > "
            image="/Team/akm.png"
            name="Branding Team"
          />
          <ImageCard
            designation="Team Members > "
            image="/Team/akm.png"
            name="Branding Team"
          />
          <ImageCard
            designation="Team Members > "
            image="/Team/akm.png"
            name="Branding Team"
          />
        </div>
      </section>
    </div>
  );
}

export default AllTeam;
