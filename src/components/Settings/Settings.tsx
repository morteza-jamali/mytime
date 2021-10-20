import React from "react";
import {
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
} from "framework7-react";
import { Styles } from "./Settings.styles";
import type { SettingsComponent } from "./Settings.types";

export const Settings: SettingsComponent = ({ ...rest }) => {
  const { root } = Styles();

  return (
    <div className={root} {...rest}>
      <LoginScreenTitle>Framework7</LoginScreenTitle>
      <List form>
        <ListInput label="Username" type="text" placeholder="Your username" />
        <ListInput
          label="Password"
          type="password"
          placeholder="Your password"
        />
      </List>
      <List>
        <ListButton>Sign In</ListButton>
      </List>
    </div>
  );
};

export default Settings;
