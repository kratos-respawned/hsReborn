import Head from "next/head";

import AboutCu from "../components/About/About/AboutCu";
import AboutHs from "../components/About/About/AboutHs";
import LandingSection from "../components/About/LandingSection/LandingSection";

function about() {
  return (
    <div className="px-5 sm:px-10">
      <Head>
        <title>Hackoverflow / About Us</title>
        <meta
          name="description"
          content="Hackoverflow Society (HS) is one of the fastest-growing North Indian student societies. Recognized NAAC A+ accredited Chandigarh University, it organizes university-level, national, and international hackathons, webinars, and workshops."
        />
      </Head>
      <LandingSection />
      <AboutHs />
      <AboutCu />
    </div>
  );
}

export default about;
