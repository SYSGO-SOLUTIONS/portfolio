import { Box, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorModeValue } from "../../components/ui/color-mode";
import AnimatedText from "./components/animatedText";
import "../../design/fonts.scss";
import "../../design/main.scss";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Main = () => {
  const lineBottomBg = useColorModeValue("#fff", "#212121");
  const lineBottomTextColor = useColorModeValue("#000", "#fff");
  const subHeadingTextColor = useColorModeValue("#000", "#f1f1f1");

  return (
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
            transition={{ duration: 1 }}
          >
            SysGo Solutions
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
            bg="blue.500"
            zIndex={2}
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* Empowering Text */}
          <MotionText
            fontSize={{ base: "5xl", smDown: "5xl", md: "7xl" }}
            className="chakra-petch-regular"
            style={{ letterSpacing: "0.1rem" }}
            zIndex={3}
          >
            Empowering
          </MotionText>

          <Box
            flexGrow={1}
            height="5px"
            bg={"#7E7E7E"}
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
  );
};

export default Main;
