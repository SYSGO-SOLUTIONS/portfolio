import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "../../../../ui/color-mode";

import { Text } from "@chakra-ui/react";
const BrandLogo = () => {
  const brandTextColor = useColorModeValue("#fff", "#000");
  const brandBackgroundColor = useColorModeValue("#000000", "#ffffff");
  const brandSloganTextColor = useColorModeValue("#000000", "#ffffff");
  return (
    <Box mb={5}>
      <div
        className="circular-container"
        style={{
          position: "relative",
          width: "100px",
          height: "100px",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="circular-text"
          style={{ width: "100px", height: "100px", fill: "none" }}
        >
          <path
            id="circlePath"
            d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
            style={{
              strokeWidth: "0.5",
            }}
          />
          <text
            style={{
              fontSize: "10px",
              fill: brandSloganTextColor,
              fontFamily: "poppins",
              letterSpacing: "1px",
            }}
          >
            <textPath href="#circlePath" startOffset="25%">
              SysGo
            </textPath>
            <textPath href="#circlePath" startOffset="73%">
              Solution
            </textPath>
          </text>
        </svg>

        {/* Circular background for "S" */}
        <div
          className="center-logo"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40px", // Adjust size as needed
            height: "40px",
            backgroundColor: brandBackgroundColor, // Change to your desired color
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: brandTextColor,
          }}
        >
          <Text className="chakra-petch-regular" color={brandTextColor}>
            S
          </Text>
        </div>
      </div>
    </Box>
  );
};

export default BrandLogo;
