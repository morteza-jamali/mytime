import { createElement } from "react";
import { render } from "react-dom";
import { App } from "./pages/app";

// Initialize framework7 app
import "./lib";

render(createElement(App), document.getElementById("app"));
