import NavigationBar from "../../components/custom/navigationbar";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorModeValue } from "../../components/ui/color-mode";
import SideNavigation from "../../components/custom/sidenav";
import "../../design/main.scss";

const MotionBox = motion(Box);

const MainLayout = (Component) => {
  const DefFunction = ({ ...props }) => {
    const bodyBackground = useColorModeValue("#fafafa", "#000000");

    return (
      <MotionBox
        animate={{ backgroundColor: bodyBackground }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        height={"100vh"}
        width={"100vw"}
        maxW={"100vw"}
        maxH={"100vh"}
        overflow={"hidden"}
        p={10}
      >
        <NavigationBar />
        <Box>
          <Flex>
            <SideNavigation />
            <Component {...props} />
          </Flex>
        </Box>
      </MotionBox>
    );
  };

  return DefFunction;
};

export default MainLayout;
