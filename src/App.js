import Heading from "./components/Heading";
import Form from "./components/form";
import Footer from "./components/footer";
import Toggle from "./components/Toggle";
import { useContext, useEffect, useState } from "react";
import { dark, light } from "./utils/themeStyles";
import { themeContext } from "./contexts/ThemeContext";

function App() {
  const [themeStyle, setThemeStyle] = useState(dark);
  const { theme } = useContext(themeContext);
  useEffect(() => {
    if (theme === "dark") return setThemeStyle(dark);
    setThemeStyle(light);
  }, [theme]);

  return (
    <div
      className={`flex flex-col justify-center items-center px-3 min-h-screen ${themeStyle.bg}`}
    >
      <Heading>Numbers Converter</Heading>
      <Form />
      <Footer />
      <Toggle />
    </div>
  );
}

export default App;
