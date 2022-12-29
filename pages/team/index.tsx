import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AllTeam from "../../components/Team/AllTeam/AllTeam";
import { TaumperList } from "../../components/Team/Taumper/List";
import Taumper from "../../components/Team/Taumper/Taumper";

function test() {
  return (
    <main>
      <HeroSection title="Our Team" />
      {TaumperList.map((item) => {
        return (
          <Taumper
            id={item.id}
            key={item.id}
            title={item.title}
            image1={item.image1}
            image2={item.image2}
            name1={item.name1}
            name2={item.name2}
            designation1={item.designation1}
            designation2={item.designation2}
          />
        );
      })}
      <AllTeam />
    </main>
  );
}

export default test;
