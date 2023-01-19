import { motion } from "framer-motion";
import HsLoaderImage from "./Hs";

function Loader() {
  return (
    <motion.div
      aria-hidden
      layoutId="loader"
      className="fixed top-0 left-0 w-full h-full bg-hsBlack flex items-center justify-center p-5"
    >
      <HsLoaderImage />
    </motion.div>
  );
}

export default Loader;
