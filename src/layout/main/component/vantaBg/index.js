import { useEffect, useRef } from "react";
import * as THREE from "three"; // Required for Vanta.js
import NET from "vanta/dist/vanta.net.min"; // Import VANTA.NET

const VantaBackground = () => {
  const vantaRef = useRef(null); // Reference for the container

  useEffect(() => {
    const effect = NET({
      el: vantaRef.current, // Attach Vanta.js to this element
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3f3fff,
      backgroundColor: 0x0,
      points: 19.0,
      maxDistance: 32.0,
      spacing: 20.0,
      THREE, // Pass THREE.js explicitly
    });

    return () => {
      if (effect) effect.destroy(); // Clean up on unmount
    };
  }, []);

  return <div ref={vantaRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default VantaBackground;
