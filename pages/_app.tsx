import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../components/loaders/Loader";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  return (
    <AnimatePresence>
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="robots" content="index, follow" />
        {loading && <title>Hello World</title>}
      </Head>
      {loading ? (
        <motion.div>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <main className="bg-hsBlack overflow-hidden">
            <main className="max-w-screen-xl mx-auto ">
              <Navbar />

              <Component {...pageProps} />
              <Footer />
            </main>
          </main>
        </>
      )}
    </AnimatePresence>
  );
}
