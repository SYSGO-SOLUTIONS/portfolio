import { Icon } from "@chakra-ui/react";
import {
  FaBuilding,
  FaHouse,
  FaLaptopCode,
  FaCommentDots,
} from "react-icons/fa6";
const routes = [
  {
    name: "Home",
    path: "/",
    icon: <Icon as={FaHouse} />,
  },
  {
    name: "About",
    path: "/about",
    icon: <Icon as={FaBuilding} />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <Icon as={FaLaptopCode} />,
  },
  //   {
  //     name: "Contact",
  //     path: "/contact",
  //   },
  {
    name: "Testimonies",
    path: "/testimonies",
    icon: <Icon as={FaCommentDots} />,
  },
];

export default routes;
