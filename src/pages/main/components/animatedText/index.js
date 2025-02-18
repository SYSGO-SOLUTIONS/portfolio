import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {FaPlus} from "react-icons/fa6"
import { Box } from "@chakra-ui/react";
import "../../../../design/main.scss"
export default function AnimatedText() {
  const texts = ["Businesses", "Individuals"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      as={motion.div}
      height="auto"
      width={{ base: "40vw", smDown: "90vw", md: "400px", lg: "480px" }}
      display="flex"
      fontSize="1.5rem"
      overflow="hidden"
      className="chakra-petch-regular"
    >
      <motion.div
        key={texts[index]}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {texts[index]}
      </motion.div>
    </Box>
  );
}
