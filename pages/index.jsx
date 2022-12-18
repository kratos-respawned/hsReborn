import Head from "next/head";
import AboutUs from "../components/HomePage/aboutUs/AboutUs";
import HeroSection from "../components/HomePage/heroSection/HeroSection";
import Initiatives from "../components/HomePage/initiatives/Initiatives";
import Journey from "../components/HomePage/journey/Journey";
import Members from "../components/HomePage/members/Members";
import Partners from "../components/HomePage/partners/Partners";

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
      <Partners />
      <Initiatives />
    </>
  );
}

export default Home;
