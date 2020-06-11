import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/style.css";
import "./assets/css/demo.css";

import "./assets/css/gridNavigation.css";
import "./assets/css/nivo-slider.css";
import "./assets/css/supersized.css";
import "./assets/css/simple_menu.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
