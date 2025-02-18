import { Flex } from "@chakra-ui/react";
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
            initial={{ rotate: -90, opacity: 0.7 }}
            whileHover={{
              y: -5,
              scale: 1.1,
              opacity: 1,
            }}
            animate={{
              rotate: -90,
              opacity: isActive ? 1 : 0.7, // Set full opacity for active link
              y: 0,
              scale: 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              display: "inline-block",
              textDecoration: "none",
              fontWeight: "400",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: isActive ? "#FF7E21" : "inherit",
            }}
          >
            {item.name}
          </MotionLink>
        );
      })}
    </Flex>
  );
};

export default SideNavLinks;
