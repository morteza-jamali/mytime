import { mountDomRenderer } from "react-cosmos/dom";
import { decorators, fixtures, rendererConfig } from "./cosmos.userdeps";

// Initialize framework7 app
import "../lib";

mountDomRenderer({ rendererConfig, decorators, fixtures });

// @ts-ignore: Unreachable code error
if (import.meta.hot) import.meta.hot!.accept();
