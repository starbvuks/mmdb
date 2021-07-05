// import packages
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import styles
import "./index.css";

// require dotenv
require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
