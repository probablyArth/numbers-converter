import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ValuesContextProvider from "./contexts/ValuesContext";

ReactDOM.render(
  <ValuesContextProvider>
    <App />
  </ValuesContextProvider>,
  document.getElementById("root")
);
