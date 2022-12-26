import { motion } from "framer-motion";
import HsLoaderImage from "./Hs";
export type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function Loader({ setLoading }: Props) {
  return (
    <motion.div
      layoutId="loader"
      className="fixed top-0 left-0 w-full h-full bg-hsBlack flex items-center justify-center p-5"
    >
      <HsLoaderImage setLoading={setLoading} />
    </motion.div>
  );
}

export default Loader;
