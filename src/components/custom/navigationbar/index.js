import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "../../../design/fonts.scss";
import social from "../../../data/social";
import Logo from "./components/logo";
import HamburgerButton from "./components/burgerButton";
import ColorModebutton from "./components/colorModeButton";

const MotionBox = motion(Box);

const NavigationBar = () => {
  return (
    <Box>
      <Flex direction={"row"} justify={"space-between"} mb={4}>
        <Flex
          className="poppins"
          alignItems={"center"}
          flex={1}
          display={{ smDown: "none", sm: "none", md: "none", lg: "flex" }}
        >
          {social.map((item, index) => (
            <React.Fragment key={index}>
              <MotionBox
                display="flex"
                alignItems="center"
                px={4}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href={item.link}>{item.icon}</a>
              </MotionBox>
              {index !== social.length - 1 && (
                <Box
                  width="8px"
                  height="8px"
                  borderRadius="50%"
                  backgroundColor="#FF7E21"
                />
              )}
            </React.Fragment>
          ))}
        </Flex>
        <Flex>
          <Logo />
        </Flex>
        <Flex alignItems={"center"} flex={1} justify={"flex-end"}>
          <ColorModebutton />
          <HamburgerButton />
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
