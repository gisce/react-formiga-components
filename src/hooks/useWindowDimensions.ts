import { ThemeConfig } from "@/theme";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    modalWidth: windowDimensions.width * ThemeConfig.modalWidthConstant,
    modalHeight: windowDimensions.height,
    width: windowDimensions.width,
    height: windowDimensions.height,
  };
}
