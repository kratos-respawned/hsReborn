import Head from "next/head";
import ECarousel from "../components/Events/ECarousel/ECarousel";
import HeroSection from "../components/HeroSection/HeroSection";

function events() {
  return (
    <main>
      <Head>
        <title>Hackoverflow / Events</title>
        <meta
          name="description"
          content="Stay up to date with all the exciting events happening on campus! Our events page has all the information you need to know about what's happening, including dates, times, locations, and descriptions. From guest lectures to social gatherings, there's always something going on. Don't miss out - check out our events page and mark your calendar today!"
        />
      </Head>
      <HeroSection title="Our Events" />
      <ECarousel />
    </main>
  );
}

export default events;
