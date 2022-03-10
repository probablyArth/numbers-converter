import Socials from "./Socials";
import React, { useContext, useEffect, useState } from "react";
import { dark, light } from "../../utils/themeStyles";
import { themeContext } from "../../contexts/ThemeContext";

const Footer = () => {
  const [themeStyle, setThemeStyle] = useState(dark);
  const { theme } = useContext(themeContext);
  useEffect(() => {
    if (theme === "dark") return setThemeStyle(dark);
    setThemeStyle(light);
  }, [theme]);

  return (
    <div
      className={`my-4 py-4 px-4 rounded-md text-white text-center ${themeStyle.grad}`}
    >
      Made with 💖 by probablyArth
      <Socials />
    </div>
  );
};

export default Footer;
