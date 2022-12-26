import AboutCu from "../components/About/About/AboutCu";
import AboutHs from "../components/About/About/AboutHs";
import LandingSection from "../components/About/LandingSection/LandingSection";

function about() {
  return (
    <div className="px-5 sm:px-10">
      <LandingSection />
      <AboutHs />
      <AboutCu />
    </div>
  );
}

export default about;
