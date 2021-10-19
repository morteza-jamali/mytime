import React from "react";
import { App } from "framework7-react";
import type { F7AppComponent } from "./F7App.types";

const config = {
  theme: "ios",
  autoDarkTheme: true,
  themeDark: true,
  name: "App name",
  id: "com.my-org.my-app",
  serviceWorker:
    process.env.NODE_ENV === "production"
      ? {
          path: "/service-worker.js",
        }
      : {},
};

export const F7App: F7AppComponent = (props) => {
  return <App {...config} {...props} />;
};
