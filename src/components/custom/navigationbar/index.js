import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import "../../../design/fonts.scss";
import social from "../../../data/social";
import Logo from "./components/logo";
import HamburgerButton from "./components/burgerButton";
import ColorModebutton from "./components/colorModeButton";
import { VscNoNewline } from "react-icons/vsc";
const NavigationBar = () => {
  return (
    <Box>
      <Flex direction={"row"} justify={"space-between"} mb={4}>
        <Flex
          className="poppins"
          alignItems={"center"}
          flex={1}
          display={{ smDown:"none", sm: "none", md:"none", lg: "flex" }}
        >
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
          {/* Color mode button */}
          <ColorModebutton />
          {/* Menu sm button */}
          <HamburgerButton />
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
