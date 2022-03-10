import React, { useContext } from "react";
import { themeContext } from "../../contexts/ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <div
      className="absolute right-8 top-4 shadow-md rounded-md px-4 py-2 cursor-pointer bg-white giga:text-2xl"
      onClick={() => {
        if (theme === "dark") return setTheme("light");
        setTheme("dark");
      }}
    >
      Toggle Theme
    </div>
  );
};

export default Toggle;
