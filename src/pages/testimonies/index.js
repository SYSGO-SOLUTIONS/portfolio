import { motion, AnimatePresence } from "framer-motion";

const Testimonies = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="main-content"
        initial={{ opacity: 0, x: "100%" }} // Start off-screen (right)
        animate={{
          opacity: 1,
          x: "0%",
          transition: { duration: 0.7, ease: "easeInOut" }, // Entrance duration
        }}
        exit={{
          opacity: 0,
          x: "-100%",
          transition: { duration: 0.7, ease: "easeInOut" }, // Exit duration
        }}
        style={{ width: "100%", height: "100%" }}
      >
        Testimonies
      </motion.div>
    </AnimatePresence>
  );
};

export default Testimonies;
