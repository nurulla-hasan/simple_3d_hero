import React, { useEffect } from "react";
import "./index.css";
import mainImage from "./assets/happy-asian-woman-isolated-png.webp";
import shadow1 from "./assets/shadow1.png";
import shadow2 from "./assets/shadow2.png";

const App = () => {
  useEffect(() => {
    const revealAnimation = setTimeout(() => {
      const mainImage = document.getElementById("main-image");
      const leftShadow = document.querySelector(".shadow-left");
      const rightShadow = document.querySelector(".shadow-right");

      // Reveal the main image
      mainImage.style.filter = "brightness(1)";

      // Move shadows smoothly to their respective positions
      setTimeout(() => {
        leftShadow.style.opacity = "1";
        leftShadow.style.transform = "translateX(-40%)";
        rightShadow.style.opacity = "1";
        rightShadow.style.transform = "translateX(40%)";
      }, 1000);
    }, 500);

    return () => clearTimeout(revealAnimation);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-[400px]">
        <img
          src={mainImage}
          alt="Main Image"
          id="main-image"
          className="relative z-30 filter brightness-0 transition-all duration-2000 w-full"
        />
        <img
          src={shadow1}
          alt="Left Shadow"
          className="shadow shadow-left absolute top-0 left-0 z-20 opacity-0 transition-all duration-1500"
        />
        <img
          src={shadow2}
          alt="Right Shadow"
          className="shadow shadow-right absolute top-0 left-0 z-20 opacity-0 transition-all duration-1500"
        />
      </div>
    </div>
  );
};

export default App;
