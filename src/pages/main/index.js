import { Box, Text, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useColorModeValue,
  useColorMode,
} from "../../components/ui/color-mode";
import AnimatedText from "./components/animatedText";
import "../../design/fonts.scss";
import "../../design/main.scss";
import Banner from "../../components/custom/banner";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionSVG = motion.svg;

const Main = () => {
  const colorMode = useColorMode();
  const subHeadingTextColor = useColorModeValue("#000", "#f1f1f1");
  const svgVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="main-content"
        initial={{ opacity: 0, x: "100%" }} // Start off-screen (right)
        animate={{
          opacity: 1,
          x: "0%",
          transition: { duration: 0.7, ease: "easeInOut" }, // Entrance duration
        }}
        exit={{
          opacity: 0,
          x: "-100%",
          transition: { duration: 5, ease: "easeInOut" }, // Exit duration
        }}
        style={{ width: "100%", height: "100%" }}
      >
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
              <Box
                position={"absolute"}
                top={"35vh"}
                left={{ smDown: "5vw", md: "25vw", lg: "35vw" }}
                opacity={colorMode.colorMode === "dark" ? 0.5 : 0.2}
              >
                <MotionSVG
                  width="197"
                  height="262"
                  viewBox="0 0 197 262"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial="hidden"
                  animate="visible"
                  variants={svgVariants}
                >
                  <motion.path
                    d="M104.034 259.086C84.966 259.086 67.8653 255.908 52.732 249.552C37.5987 242.893 25.6433 233.813 16.866 222.312C8.08867 210.508 3.246 197.039 2.338 181.906H45.014C46.2247 194.315 51.9753 204.455 62.266 212.324C72.8593 220.193 86.6307 224.128 103.58 224.128C119.319 224.128 131.728 220.647 140.808 213.686C149.888 206.725 154.428 197.947 154.428 187.354C154.428 176.458 149.585 168.437 139.9 163.292C130.215 157.844 115.233 152.547 94.954 147.402C76.4913 142.559 61.358 137.717 49.554 132.874C38.0527 127.729 28.0647 120.313 19.59 110.628C11.418 100.64 7.332 87.6253 7.332 71.584C7.332 58.872 11.1153 47.2193 18.682 36.626C26.2487 26.0327 36.9933 17.7093 50.916 11.656C64.8387 5.29999 80.7287 2.12198 98.586 2.12198C126.129 2.12198 148.375 9.08332 165.324 23.006C182.273 36.9287 191.353 55.9967 192.564 80.21H151.25C150.342 67.1953 145.045 56.7533 135.36 48.884C125.977 41.0147 113.265 37.08 97.224 37.08C82.3933 37.08 70.5893 40.258 61.812 46.614C53.0347 52.97 48.646 61.2933 48.646 71.584C48.646 79.756 51.2187 86.566 56.364 92.014C61.812 97.1593 68.4707 101.397 76.34 104.726C84.512 107.753 95.7107 111.233 109.936 115.168C127.793 120.011 142.321 124.853 153.52 129.696C164.719 134.236 174.253 141.197 182.122 150.58C190.294 159.963 194.531 172.221 194.834 187.354C194.834 200.974 191.051 213.232 183.484 224.128C175.917 235.024 165.173 243.65 151.25 250.006C137.63 256.059 121.891 259.086 104.034 259.086Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    variants={svgVariants}
                  />
                </MotionSVG>
              </Box>
              <MotionText
                fontSize={{ base: "3xl", smDown: "3xl", md: "3xl" }}
                className="chakra-petch-regular itlog"
                style={{ letterSpacing: "0.1rem" }}
                color={subHeadingTextColor}
                opacity={0.7}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
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
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Main;
