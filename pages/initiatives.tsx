import Head from "next/head";
import HeroSection from "../components/HeroSection/HeroSection";
import Slider from "../components/Initiatives/Slider/Slider";

function initiatives() {
  return (
    <main>
      <Head>
        <title>Hackoverflow / Initiatives</title>
        <meta
          name="description"
          content="Membership Townhall ,The LaDebug Club ,  BGC :: Bharatiya Gaming Co. , 
        Life of Guru "
        />
      </Head>
      <HeroSection title="Our Initiatives" />
      <Slider />
    </main>
  );
}

export default initiatives;
