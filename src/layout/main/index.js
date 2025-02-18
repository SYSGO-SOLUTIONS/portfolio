import NavigationBar from "../../components/custom/navigationbar";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useColorModeValue } from "../../components/ui/color-mode";
import SideNavigation from "../../components/custom/sidenav";
import { useEffect, useState } from "react";
import "../../design/main.scss";

const MotionBox = motion(Box);

const MainLayout = (Component) => {
  const DefFunction = ({ ...props }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }, []);

    const bodyBackground = useColorModeValue("#fafafa", "#000000");

    return (
      <>
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }} // Exit animation
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                display: "flex",
                height: "100vh",
                width: "100vw",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <div className="loader">
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {!isLoading && (
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
        )}
      </>
    );
  };

  return DefFunction;
};

export default MainLayout;
