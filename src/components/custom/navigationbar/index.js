import React from "react";
import { Box, Flex, Text, IconButton, Icon } from "@chakra-ui/react";
import "../../../design/fonts.scss";
import { FaSun, FaMoon } from "react-icons/fa6";
import social from "../../../data/social";
import { useColorMode } from "../../ui/color-mode";
import { motion } from "framer-motion";
import Logo from "./components/logo";
const MotionIcon = motion(Icon);
const NavigationBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box>
      <Flex direction={"row"} justify={"space-between"} mb={4}>
        <Flex className="poppins" alignItems={"center"} flex={1}>
          {social.map((item, index) => (
            <>
              <Box key={index} display="flex" alignItems="center" px={4}>
                <a href={item.link}>{item.icon}</a>
              </Box>
              {index !== social.length - 1 && ( // Render separator only if it's not the last item
                <Box
                  width="8px"
                  height="8px"
                  borderRadius="50%"
                  backgroundColor="#FF7E21"
                />
              )}
            </>
          ))}
        </Flex>
        <Flex>
          <Logo />
        </Flex>
        <Flex alignItems={"center"} flex={1} justify={"flex-end"}>
          <IconButton
            aria-label="Toggle color mode"
            variant={"ghost"}
            rounded={"full"}
            colorScheme={"teal"}
            size={"xs"}
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
