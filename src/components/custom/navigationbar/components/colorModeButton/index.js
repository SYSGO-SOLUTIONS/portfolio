import React from "react";
import {  Icon, Box } from "@chakra-ui/react";
import "../../../../../design/fonts.scss";
import { useColorMode } from "../../../../ui/color-mode";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa6";

const MotionBox = motion(Box);
const ColorModebutton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <React.Fragment>
        <MotionBox
          display="flex"
          alignItems="center"
          px={4}
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={toggleColorMode}
        >
          <Icon as={colorMode === "light" ? FaMoon : FaSun} />
        </MotionBox>
      </React.Fragment>
    </>
  );
};

export default ColorModebutton;
