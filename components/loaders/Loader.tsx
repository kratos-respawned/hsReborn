import { motion } from "framer-motion";
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
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.5,
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
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.div variants={items}>hiiii</motion.div>
      <motion.div variants={items}>hiiii</motion.div>
      <motion.div variants={items}>hiiii</motion.div>
    </motion.div>
  );
}

export default Loader;
