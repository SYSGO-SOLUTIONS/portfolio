import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../ui/color-mode";
import "../../../design/fonts.scss";

const Banner = () => {
  const lineBottomBg = useColorModeValue("#fff", "#212121");
  const lineBottomTextColor = useColorModeValue("#000", "#fff");

  return (
    <Box
      h={"90px"}
      minW={"150vw"} // Responsive min-width
      bg={lineBottomBg}
      position={"absolute"}
      bottom={"10vh"} // Responsive positioning
      transform={"rotate(-45deg)"} // Responsive rotation
      left={0} // Responsive left offset
      boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.3)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      className="chakra-petch-regular"
      z-index={10}
    >
      <Box
        w={"90vw"}
        height={"100%"}
        // bg={"red"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text color={lineBottomTextColor}>Innovate</Text>
        <Box
          width="8px"
          height="8px"
          borderRadius="50%"
          backgroundColor="#FF7E21"
        />
        <Text color={lineBottomTextColor}>Design </Text>
        <Box
          width="8px"
          height="8px"
          borderRadius="50%"
          backgroundColor="#FF7E21"
        />
        <Text color={lineBottomTextColor}>Develop</Text>
        <Box
          width="8px"
          height="8px"
          borderRadius="50%"
          backgroundColor="#FF7E21"
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        />
        <Text
          color={lineBottomTextColor}
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        >
          Optimize{" "}
        </Text>
        <Box
          width="8px"
          height="8px"
          borderRadius="50%"
          backgroundColor="#FF7E21"
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        />
        <Text
          color={lineBottomTextColor}
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        >
          Launch
        </Text>
        <Box
          width="8px"
          height="8px"
          borderRadius="50%"
          backgroundColor="#FF7E21"
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        />
        <Text
          color={lineBottomTextColor}
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        >
          Scale
        </Text>
      </Box>
    </Box>
  );
};

export default Banner;
