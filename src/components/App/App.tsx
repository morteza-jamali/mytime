import React from "react";
import { Base } from "..";
import { Styles } from "./App.styles";
import type { AppComponent } from "./App.types";

export const App: AppComponent = () => {
  const { root } = Styles();

  return (
    <Base {...root}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet earum
        nobis tenetur tempore, minus non ratione natus. Perspiciatis pariatur
        totam dolorem deserunt, fugit cupiditate, quia inventore ipsa doloribus
        quidem sed!
      </p>
    </Base>
  );
};

export default App;
