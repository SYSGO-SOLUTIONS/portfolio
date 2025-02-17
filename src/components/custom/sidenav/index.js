import { Box } from "@chakra-ui/react";
import SideNavLinks from "./components/sidenavlinks";
import BrandLogo from "./components/brandlogo";
import "../../../design/main.scss";
const SideNavigation = () => {
  return (
    <Box
      display={{ smDown: "none", sm: "none", md: "flex" }}
      width="150px"
      height={"80dvh"}
      flexDirection={"column"}
      background={"transparent"}
      alignItems={"center"}
    >
      <BrandLogo />

      <SideNavLinks />
    </Box>
  );
};

export default SideNavigation;
