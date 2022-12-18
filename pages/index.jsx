"use client";
import Head from "next/head";
import AboutUs from "../components/aboutUs/AboutUs";
import HeroSection from "../components/heroSection/HeroSection";
import Journey from "../components/journey/Journey";
import Members from "../components/members/Members";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HeroSection />
      <Members />
      <AboutUs />
      <Journey />
    </>
  );
}

export default Home;
