import React, { useState } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import "../../../../../design/fonts.scss";
import { useColorModeValue } from "../../../../ui/color-mode";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import route from "../../../../../routes";
import { Link } from "react-router-dom";
import "../../../../../design/fonts.scss";
import social from "../../../../../data/social";
const MotionBox = motion(Box);
const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const hamburgerBackground = useColorModeValue("#000000", "#ffffff");
  const overlayBg = useColorModeValue("#f1f1f1", "#000000");
  const textColor = useColorModeValue("#000000", "#ffffff");
  const lineBg1 = useColorModeValue("#ffffff", "#212121");
  const lineBg2 = useColorModeValue("#212121", "#ffffff");
  const line2TextColor = useColorModeValue("#ffffff", "#212121");
  return (
    <Box position="relative">
      {/* Hamburger Button */}
      <IconButton
        display={{ sm: "flex", md: "none" }}
        aria-label="hamburger button"
        variant={"ghost"}
        rounded={"full"}
        colorScheme={"teal"}
        size={"xs"}
        _hover={{ backgroundColor: "transparent" }}
        onClick={toggleMenu}
        zIndex="1000" // Set the zIndex higher than the overlay
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
            translate={isOpen ? "0px 4px" : "0 0"}
            transition={"all 0.3s ease-in-out"}
          ></Box>
        </Flex>
      </IconButton>

      {/* Full-screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }} // Start with the overlay invisible
            animate={{ opacity: 1 }} // Animate to visible
            exit={{ opacity: 0 }} // Animate back to invisible when closed
            transition={{ duration: 0.5 }} // Duration of the fade-in/out animation
          >
            <Box
              position="fixed"
              top="0"
              left="0"
              width="100vw"
              height="100vh"
              backgroundColor= {overlayBg}
              zIndex="999"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {/* line 1 - Animate width expansion */}
              <motion.div
                initial={{ width: "0%" }} // Start with no width
                animate={{ width: isOpen ? "150vw" : "0%" }} // Expand on open, retract on close
                exit={{ width: "0%" }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  top: "70px",
                  left: "-75px",
                  backgroundColor: lineBg1,
                  height: "120px",
                  transform: "rotate(25deg)",
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Flex
                  height={"100%"}
                  width={"80vw"}
                  max-width={"400px"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
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
              </motion.div>

              {/* nav links */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
                textAlign={"center"}
              >
                {route.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="chakra-petch-regular"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "0.8em",
                      fontWeight: "800",
                    }}
                    textTransform={"uppercase"}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        padding: "5px 10px",
                        borderRadius: "20px",
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Text
                        fontSize={"2xl"}
                        color={textColor}
                      >
                        {item.name}
                      </Text>
                    </motion.div>
                  </Link>
                ))}
              </Box>

              {/* line 2 - Animate width expansion */}
              <motion.div
                initial={{ width: "0%" }} // Start with no width
                animate={{ width: isOpen ? "150vw" : "0%" }} // Expand on open, retract on close
                exit={{ width: "0%" }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  bottom: "55px",
                  right: "-70px",
                  backgroundColor: lineBg2,
                  height: "120px",
                  transform: "rotate(25deg)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Flex
                  height={"100%"}
                  width={"80vw"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                >
                  <Text color={line2TextColor}>Innovate</Text>
                  <Box
                    width="8px"
                    height="8px"
                    borderRadius="50%"
                    backgroundColor="#FF7E21"
                  />
                  <Text color={line2TextColor}>Integrate</Text>
                  <Box
                    width="8px"
                    height="8px"
                    borderRadius="50%"
                    backgroundColor="#FF7E21"
                  />
                  <Text color={line2TextColor}>Elevate</Text>
                </Flex>
              </motion.div>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default HamburgerButton;
