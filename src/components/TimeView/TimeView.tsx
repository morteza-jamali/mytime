import React from "react";
import Atropos from "atropos/react";
import { Bare } from "@morajlab/ui-dev.react.component.basic.bare";
import { Styles } from "./TimeView.styles";
import type { TimeViewComponent } from "./TimeView.types";

import "atropos/css";

export const TimeView: TimeViewComponent = ({ ...rest }) => {
  const { root, time, atropos, layer } = Styles();

  return (
    <Bare className={root}>
      <Atropos className={atropos}>
        <div
          data-atropos-offset="-5"
          style={{
            background: "red",
            width: "100%",
            height: "100%",
            opacity: "0.3",
          }}
          className={layer}
        ></div>
        <div
          data-atropos-offset="0"
          style={{
            background: "yellowgreen",
            width: "100%",
            height: "100%",
            opacity: "0.3",
          }}
          className={layer}
        ></div>
        <div
          data-atropos-offset="5"
          style={{
            background: "blue",
            width: "100%",
            height: "100%",
            opacity: "0.3",
          }}
          className={layer}
        ></div>
        <div className={time} {...rest}>
          {["03", "42", "23", "PM"].map((value, key) => (
            <div key={key}>{value}</div>
          ))}
        </div>
      </Atropos>
    </Bare>
  );
};

export default TimeView;
