import React, { useState } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import "../../../../../design/fonts.scss";
import { useColorModeValue } from "../../../../ui/color-mode";
const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const hamburgerBackground = useColorModeValue("#000000", "#ffffff");
  return (
    <IconButton
      aria-label="hamburger button"
      variant={"ghost"}
      rounded={"full"}
      colorScheme={"teal"}
      size={"xs"}
      _hover={{ backgroundColor: "transparent" }}
      onClick={toggleMenu}
    >
      <Flex direction={"column-reverse"}>
        <Box
          width="22px"
          height="3px"
          borderRadius={"100px"}
          backgroundColor={hamburgerBackground}
          margin="2px 0"
          transform={isOpen ? "rotate(-45deg)" : "rotate(0)"}
          translate={isOpen ? "0px -4px" : "0 0"}
          transition={"all 0.3s ease-in-out"}
        />
        <Box
          width="17px"
          height="3px"
          borderRadius={"100px"}
          backgroundColor={hamburgerBackground}
          display={isOpen ? "none" : "block"}
          margin="3px 5px"
          transition={"all 0.5s ease-in-out"}
        ></Box>
        <Box
          width="22px"
          height="3px"
          borderRadius={"100px"}
          backgroundColor={hamburgerBackground}
          margin="3px 0"
          transform={isOpen ? "rotate(45deg)" : "rotate(0)"}
          translate={isOpen ? "0px 3px" : "0 0"}
          transition={"all 0.3s ease-in-out"}
        ></Box>
      </Flex>
    </IconButton>
  );
};

export default HamburgerButton;
