import React from "react";
import ImageCard from "../../Team/ImageCard";

function AllTeam() {
  return (
    <div className="px-7">
      <section className="border-t py-24 relative ">
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
