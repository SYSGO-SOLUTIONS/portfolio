import { Box, Icon, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaEnvelope } from "react-icons/fa6";

const rotateText = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Floatingbutton = () => {
  return (
    <Box
      position="relative"
      width="80px"
      height="80px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="full"
      background="white"
      boxShadow="lg"
      zIndex={999}
    >
      {/* Rotating Text */}
      <Text
        position="absolute"
        fontSize="12px"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="1px"
        animation={`${rotateText} 6s linear infinite`}
        transformOrigin="center"
      >
        W A T C H &nbsp; O U R &nbsp; V I D E O
      </Text>

      {/* Center Icon */}
      <Box
        width="40px"
        height="40px"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        background="orange.400"
        boxShadow="md"
      >
        <Icon as={FaEnvelope} color="white" boxSize={5} />
      </Box>
    </Box>
  );
};

export default Floatingbutton;
