import Head from "next/head";
import AboutUs from "../components/Home/aboutUs/AboutUs";
import Discord from "../components/Home/discord/Discord";
import HeroSection from "../components/Home/heroSection/HeroSection";
import Initiatives from "../components/Home/initiatives/Initiatives";
import Journey from "../components/Home/journey/Journey";
import Members from "../components/Home/members/Members";
import Partners from "../components/Home/partners/Partners";
import Disck from "../components/Home/discord/Disck";
function Home() {
  return (
    <>
      <Head>
        <title>Hackoverflow Society</title>
        <meta
          name="description"
          content="Become a part of a supportive and inclusive community of students. Our society offers resources, networking opportunities, and a safe space for discussion and collaboration to help students succeed in their academic pursuits. Whether you're looking to make new friends, get involved on campus, or simply want to learn more about your field of study, our society has something for everyone. Come be a part of our community and discover all that we have to offer!"
        />
      </Head>
      <HeroSection />
      <Members />
      <AboutUs />
      <Journey />
      <Initiatives />
      <Partners />
      <Discord />
      <Disck />
    </>
  );
}

export default Home;
