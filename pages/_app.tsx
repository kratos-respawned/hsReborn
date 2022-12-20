import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/HomePage/navbar/Navbar";
import Footer from "../components/footer/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-hsBlack overflow-hidden">
      <main className="max-w-screen-xl mx-auto ">
        <Navbar />
        {/* <Nav /> */}
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </main>
  );
}
