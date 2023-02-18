import Head from "next/head";
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
// import AllTeam from "../../components/Events/AllTeam/AllTeam";
import { TaumperList } from "../../components/Team/Taumper/List";
import Taumper from "../../components/Team/Taumper/Taumper";

function test() {
  return (
    <main>
      <Head>
        <title>Hackoverflow / Team</title>
        <meta
          name="description"
          content="Folks that make it happen :: Learn about the exciting projects and competitions our college society teams are working on. We have teams for students interested in coding, design, and more. Join us and build valuable skills while making lasting friendships. Explore our teams and find your place to shine on campus"
        />
      </Head>
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
      {/* <AllTeam /> */}
    </main>
  );
}

export default test;
