import { useEffect, useState } from "react";

export const useChangeColor = () => {
  const [textColor, setTextColor] = useState("#AC7F66");
  const [bgColor, setBgColor] = useState("#293630");

  const textColors = ["#AC7F66", "#293630", "#DCC5B7", "#AC7F66", "#DCC5B7"];
  const bgColors = [
    "#293630",
    "#DCC5B7",
    "#AC7F66",
    "#402020",
    "rgba(0,0,0,0)",
  ];
  let currentTextColorIndex = 0;
  let currentBgColorIndex = 0;

  const changeBgColor = () => {
    currentBgColorIndex += 1;
    currentTextColorIndex += 1;

    setTextColor(textColors[currentTextColorIndex]);
    setBgColor(bgColors[currentBgColorIndex]);
  };

  useEffect(() => {
    const id = setInterval(changeBgColor, 500);

    setTimeout(() => {
      clearInterval(id);
    }, 2400);
  }, []);

  return {
    textColor,
    bgColor,
  };
};
