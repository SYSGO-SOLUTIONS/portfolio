import React from "react";
import { IconButton, Icon } from "@chakra-ui/react";
import "../../../../../design/fonts.scss";
import { useColorMode } from "../../../../ui/color-mode";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa6";
const MotionIcon = motion(Icon);
const ColorModebutton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle color mode"
      variant={"ghost"}
      rounded={"full"}
      colorScheme={"teal"}
      size={"sm"}
      onClick={toggleColorMode}
      as={motion.button}
      whileTap={{ scale: 0.9 }} // Slight shrink effect on tap
    >
      <MotionIcon
        key={colorMode} // Ensures re-render on mode change
        as={colorMode === "light" ? FaMoon : FaSun}
        initial={{ rotate: 180, opacity: 0 }} // Initial state
        animate={{ rotate: 0, opacity: 1 }} // Animation effect
        transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
      />
    </IconButton>
  );
};

export default ColorModebutton;
