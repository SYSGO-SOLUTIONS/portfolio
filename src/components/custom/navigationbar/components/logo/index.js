import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Logo(props) {
  return (
    <MotionBox
    display={{base:"none", smDown:"flex",md:"none",lg:"none"}}
      {...props}
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
      animate={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
    >
      <Text className="chakra-petch-regular" textStyle={"5xl"} flex={1}>
        Sys<Text as={"span"} color="#FF7E21">Go</Text>
      </Text>
    </MotionBox>
  );
}
