import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "../components/loaders/Loader";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [loading, setLoading] = useState(true);
  return (
    // <>
    //   <Loader setLoading={setLoading} />
    // </>

    <>
      {" "}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="Page is loading please wait" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="preload"
          href="/fonts/generalSans/GeneralSans-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ClashDisplay/ClashDisplay-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {loading && <title>Hello World</title>}
      </Head>
      <AnimatePresence>
        {loading ? (
          <Loader setLoading={setLoading} />
        ) : (
          <SessionProvider session={session}>
            <main className="bg-hsBlack overflow-clip">
              <main className="max-w-screen-xl mx-auto ">
                <Navbar />
                <Component {...pageProps} />
                <Footer />
              </main>
            </main>
          </SessionProvider>
        )}
      </AnimatePresence>
    </>
  );
}
