import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/HomePage/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import Loader from "../components/loaders/Loader";
export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <main className="bg-hsBlack overflow-hidden">
        <main className="max-w-screen-xl mx-auto ">
          <Navbar />
          <Component {...pageProps} />
        </main>
      </main>
      <Footer />
    </>
  );
}
