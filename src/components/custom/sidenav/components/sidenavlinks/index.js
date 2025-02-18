import { Box, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import routes from "../../../../../routes";

const MotionLink = motion(Link);

const SideNavLinks = () => {
  const location = useLocation(); // Get current route

  return (
    <Flex
      display="flex"
      height="100%"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {routes.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <MotionLink
            key={index}
            to={item.path}
            className="chakra-petch-regular"
            initial={{ opacity: 0.7 }}
            whileHover={{
              scale: 1.2, // Slight zoom on hover
              rotate: 5, // Slight rotation on hover (same as NavigationBar)
              opacity: 1,
            }}
            animate={{
              opacity: isActive ? 1 : 0.7, // Highlight active link
              scale: 1,
              rotate: 0, // Reset rotation when not hovered
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              display: "inline-block",
              textDecoration: "none",
              fontWeight: "400",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: isActive ? "#FF7E21" : "inherit",
            }}
          >
            {item.icon}
          </MotionLink>
        );
      })}

      <Box></Box>
    </Flex>
  );
};

export default SideNavLinks;
