import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ValuesContextProvider from "./contexts/ValuesContext";
import ThemeContextProvider from "./contexts/ThemeContext";

ReactDOM.render(
  <ThemeContextProvider>
    <ValuesContextProvider>
      <App />
    </ValuesContextProvider>
  </ThemeContextProvider>,
  document.getElementById("root")
);
