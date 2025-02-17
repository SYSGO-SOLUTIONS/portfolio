import NavigationBar from "../../components/custom/navigationbar";
import Footer from "../../components/custom/footer";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorModeValue } from "../../components/ui/color-mode";

const MotionBox = motion(Box);
const MainLayout = (Component) => {
  const DefFunction = ({ ...props }) => {
    const bodyBackground = useColorModeValue("#fafafa", "#000000");
    return (
      <MotionBox
        animate={{ backgroundColor: bodyBackground }} // Animate background color
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
        height={"100vh"}
        width={"100vw"}
        maxW={"100vw"}
        maxH={"100vh"}
        p={10}
      >
        <NavigationBar />
        <Component {...props} />
        <Footer />
      </MotionBox>
    );
  };
  return DefFunction;
};

export default MainLayout;
