import { motion } from "framer-motion";
import HsLoaderImage from "./Hs";
type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function Loader({ setLoading }: Props) {
  return (
    <motion.div
      layoutId="loader"
      onAnimationComplete={() => setLoading(false)}
      className="fixed top-0 left-0 w-full h-full bg-hsBlack flex items-center justify-center"
    >
      <HsLoaderImage />
    </motion.div>
  );
}

export default Loader;
