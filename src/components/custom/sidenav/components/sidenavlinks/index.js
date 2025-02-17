import { Flex } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
import { transform } from "framer-motion";
import { style } from "framer-motion/client";
import { Link } from "react-router-dom";
const SideNavLinks = () => {
  const commonProps = {
    style: {
      transform: "rotate(-90deg)",
      display: "inline-block",
    },
    ClassName: "poppins",
  };
  return (
    <Flex
      display={"flex"}
      height={"100%"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      // background={"red"}
    >
      <Link {...commonProps}>Home</Link>
      <Link {...commonProps}>About</Link>
      <Link {...commonProps}>Projects</Link>
      <Link {...commonProps}>Contact</Link>
    </Flex>
  );
};
export default SideNavLinks;
