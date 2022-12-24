import Head from "next/head";
import AboutUs from "../components/HomePage/aboutUs/AboutUs";
import Discord from "../components/HomePage/discord/Discord";
import HeroSection from "../components/HomePage/heroSection/HeroSection";
import Initiatives from "../components/HomePage/initiatives/Initiatives";
import Journey from "../components/HomePage/journey/Journey";
import Members from "../components/HomePage/members/Members";
import Partners from "../components/HomePage/partners/Partners";
function Home() {
  return (
    <>
      <Head>
        <title>Hackoverflow / Home</title>
        <meta
          name="description"
          content="Become a part of a supportive and inclusive community of students. Our society offers resources, networking opportunities, and a safe space for discussion and collaboration to help students succeed in their academic pursuits. Whether you're looking to make new friends, get involved on campus, or simply want to learn more about your field of study, our society has something for everyone. Come be a part of our community and discover all that we have to offer!"
        />
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
