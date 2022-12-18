import "../styles/dist.css";
import Navbar from "../components/navbar/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <main className="bg-hsBlack">
      <main className="max-w-screen-xl mx-auto ">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </main>
  );
}
