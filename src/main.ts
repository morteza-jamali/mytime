import { createElement } from "react";
import { render } from "react-dom";
import { App } from "./components";

import "./styles.css";

render(createElement(App), document.getElementById("app"));
