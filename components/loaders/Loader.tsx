import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillAppstore } from "react-icons/ai";
import hs from "../HomePage/heroSection/hs.svg";
import HsLoaderImage from "./Hs";
type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const items = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
function Loader({ setLoading }: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      layoutId="loader"
      onAnimationComplete={() => setLoading(false)}
      className="fixed top-0 left-0 w-full h-full bg-hsBlack flex items-center justify-center"
    >
      <motion.div
        variants={items}
        className="flex flex-col items-center gap-y-2"
      >
        <div className="scale-90">
          <HsLoaderImage />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Loader;
