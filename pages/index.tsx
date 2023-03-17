import Head from "next/head";
import AboutUs from "../components/Home/aboutUs/AboutUs";
import Discord from "../components/Home/discord/Discord";
import HeroSection from "../components/Home/heroSection/HeroSection";
import Journey from "../components/Home/journey/Journey";
import Members from "../components/Home/members/Members";
import Partners from "../components/Home/partners/Partners";
import Init from "../components/Home/initiatives/Init";
import { AnimatePresence } from "framer-motion";
import Loader from "../components/loaders/Loader";
import { useLoader } from "../store/store";

function Home() {
  const loading = useLoader((state) => state.loading);
  console.log("%cKRATOS", "color: red; font-family:monospace; font-size: 16px");
  return (
    <>
      <Head>
        <title>Hackoverflow Society</title>
        <meta
          name="description"
          content="Become a part of a supportive and inclusive community of students. Our society offers resources, networking opportunities, and a safe space for discussion and collaboration to help students succeed in their academic pursuits. Whether you're looking to make new friends, get involved on campus, or simply want to learn more about your field of study, our society has something for everyone. Come be a part of our community and discover all that we have to offer!"
        />
      </Head>
      <AnimatePresence>
        {loading && <Loader />}
        <main
          className={`${loading
            ? " invisible scale-0 h-0 overflow-hidden "
            : " scale-100 visible "
            }`}
        >
          <HeroSection />
          <Members />
          <AboutUs />
          <Journey />
          <Init />
          <Partners />
          <Discord />
        </main>
      </AnimatePresence>
    </>
  );
}

export default Home;
