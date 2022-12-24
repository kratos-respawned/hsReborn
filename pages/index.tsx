import Head from "next/head";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AboutUs from "../components/HomePage/aboutUs/AboutUs";
import Discord from "../components/HomePage/discord/Discord";
import HeroSection from "../components/HomePage/heroSection/HeroSection";
import Initiatives from "../components/HomePage/initiatives/Initiatives";
import Journey from "../components/HomePage/journey/Journey";
import Members from "../components/HomePage/members/Members";
import Partners from "../components/HomePage/partners/Partners";
import Loader from "../components/loaders/Loader";
function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home</title>
      </Head>
      <HeroSection />
      <Members />
      <AboutUs />
      <Journey />
      <Partners />
      <Initiatives />
      <Discord />
    </>
  );
}

export default Home;
