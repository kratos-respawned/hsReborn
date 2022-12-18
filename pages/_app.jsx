import Navbar from "../components/navbar/Navbar";
import "../styles/dist.css";

export default function App({ Component, pageProps }) {
  return (
    <main className=" bg-hsBlack ">
      <main className="max-w-7xl bg-hsBlack mx-auto px-3">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </main>
  );
}
