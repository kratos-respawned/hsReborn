import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { domAnimation, LazyMotion } from "framer-motion";
import { Montserrat } from "@next/font/google"
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
})
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="Page is loading please wait" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <LazyMotion features={domAnimation} strict>
        <main className={`${montserrat.variable} bg-hsBlack overflow-clip`}>
          <main className="max-w-screen-xl mx-auto ">
            <Navbar path={path} />
            <Component {...pageProps} />
            <Footer />
          </main>
        </main>
      </LazyMotion>
    </>
  );
}
