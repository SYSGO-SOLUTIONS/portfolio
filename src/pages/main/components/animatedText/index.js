import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Businesses", "Individuals", "Startups"];

const AnimatedText = ({ fontSize, color }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <motion.span
      key={displayText}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      textStyle={fontSize}
    >
      <Text
        opacity={0.7}
        className="chakra-petch-regular"
        textStyle={fontSize}
        fontWeight={500}
        letterSpacing={"0.1rem"}
      >
        {displayText}
      </Text>
    </motion.span>
  );
};

export default AnimatedText;
