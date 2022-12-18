import "../styles/dist.css";

import Navbar from "../components/HomePage/navbar/Navbar";
import Footer from "../components/footer/Footer";
export default function App({ Component, pageProps }) {
  return (
    <main className="bg-hsBlack overflow-hidden">
      <main className="max-w-screen-xl mx-auto ">
        <Navbar />
        <Component {...pageProps} />
      </main>
      <Footer />
    </main>
  );
}
