import { Box, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorModeValue } from "../../components/ui/color-mode";
import AnimatedText from "./components/animatedText";
import "../../design/fonts.scss";
import "../../design/main.scss";
import Banner from "../../components/custom/banner";
const MotionBox = motion(Box);
const MotionText = motion(Text);

const Main = () => {
  const subHeadingTextColor = useColorModeValue("#000", "#f1f1f1");

  return (
    <>
      <Box h={"80vh"} w={"100%"}>
        <Flex
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          p={"20"}
          direction={"column"}
        >
          {/* Company Name */}
          <Box
            height={"auto"}
            width={{ base: "40vw", smDown: "90vw", md: "400px", lg: "480px" }}
            display={"flex"}
            alignItems={"center"}
            mb={0}
          >
            <MotionText
              fontSize={{ base: "3xl", smDown: "3xl", md: "3xl" }}
              className="chakra-petch-regular itlog"
              style={{ letterSpacing: "0.1rem" }}
              color={subHeadingTextColor}
              opacity={0.7}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .4 }}
            >
              SysGo{" "}
              <Text as={"span"} color={"#FF7E21"}>
                Solutions
              </Text>
            </MotionText>
          </Box>

          {/* Empowering + Swipe Reveal */}
          <Box
            height={"auto"}
            width={{ base: "40vw", smDown: "90vw", md: "400px", lg: "480px" }}
            display={"flex"}
            alignItems={"center"}
            position="relative"
            overflow="hidden"
          >
            {/* Swipe Reveal Box */}
            <MotionBox
  position="absolute"
  top={0}
  left={0}
  width="100%"
  height="100%"
  bg="#FF7E21"
  zIndex={2}
  initial={{ x: 0 }}
  animate={{ x: "100%" }}
  transition={{ duration: 1, ease: "easeOut" }}
  clipPath="polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)"
/>


            {/* Empowering Text */}
            <MotionText
              fontSize={{ base: "5xl", smDown: "5xl", md: "7xl" }}
              className="chakra-petch-regular"
              style={{ letterSpacing: "0.1rem" }}
              zIndex={1}
            >
              Empowering
            </MotionText>

            <Box
              flexGrow={1}
              height="5px"
              bg={"#FF7E21"}
              ml={2}
              borderRightRadius={"lg"}
              borderLeftRadius={"sm"}
            />
          </Box>

          {/* Animated Text */}
          <Box
            height={"auto"}
            width={{ base: "40vw", smDown: "90vw", md: "400px", lg: "480px" }}
            display={"flex"}
            alignItems={"center"}
          >
            <AnimatedText fontSize="4xl" color={subHeadingTextColor} />
          </Box>
        </Flex>
      </Box>
      <Banner />
    </>
  );
};

export default Main;
