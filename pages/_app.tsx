import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/HomePage/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Montserrat } from "@next/font/google";
import localFont from "@next/font/local";
const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const clashDisplay = localFont({
  src: "../fonts/ClashDisplay/ClashDisplay-Medium.woff2",
  preload: true,
  weight: "500",
});
const generalSans = localFont({
  src: "../fonts/generalSans/GeneralSans-Light.woff2",
  preload: true,
  weight: "200",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-hsBlack overflow-hidden">
      <style jsx global>{`
        html {
          -webkit-text-size-adjust: auto;
          text-size-adjust: auto;
          scroll-behavior: smooth;
        }
        .font-montserrat {
          font-family: ${mont.style.fontFamily};
        }
        .font-clashDisplay {
          font-family: ${clashDisplay.style.fontFamily};
        }
        .font-generalSans {
          font-family: ${generalSans.style.fontFamily};
        }
      `}</style>
      <main className="max-w-screen-xl mx-auto ">
        <Navbar />
        {/* <Nav /> */}
        <Component {...pageProps} />
      </main>
      <Footer />
    </main>
  );
}
