import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const SideNavLinks = () => {
  return (
    <Flex
      display="flex"
      height="100%"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {["Home", "About", "Projects", "Contact"].map((item, index) => (
        <MotionLink
          key={index}
          to={`/${item.toLowerCase()}`} // Ensures correct routing
          className="roboto"
          initial={{ rotate: -90, opacity: 0.7}}
          whileHover={{
            y: -5, // Moves slightly upward
            scale: 1.1, // Slight scale effect
            opacity: 1, // Fully visible
          }}
          animate={{ rotate: -90, opacity: 0.7, y: 0, scale: 1 }} // Resets after hover ends
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            display: "inline-block",
            textDecoration: "none", // Optional: Removes default underline
            color: "inherit", // Keeps text color consistent
            fontWeight: "400",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          {item}
        </MotionLink>
      ))}
    </Flex>
  );
};

export default SideNavLinks;
