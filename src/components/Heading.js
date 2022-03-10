import React, { useContext, useEffect, useState } from "react";
import { dark, light } from "../utils/themeStyles";
import { themeContext } from "../contexts/ThemeContext";

const Heading = ({ children }) => {
  const [themeStyle, setThemeStyle] = useState(dark);
  const { theme } = useContext(themeContext);
  useEffect(() => {
    if (theme === "dark") return setThemeStyle(dark);
    setThemeStyle(light);
  }, [theme]);
  return (
    <h1
      className={`text-2xl md:text-4xl py-6 duration-300 ease-in text-transparent font-extrabold bg-clip-text ${themeStyle.text}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
