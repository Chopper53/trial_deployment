import React from "react";
import { LandingDarkWeb } from "../../components/LandingDarkWeb";
import { VuesaxBoldMoon } from "../../icons/VuesaxBoldMoon";
import { VuesaxLinearArrowDown } from "../../icons/VuesaxLinearArrowDown";
import "./style.css";

export const LandingDarkWebScreen = () => {
  return (
    <LandingDarkWeb
      heroButtonsIcon={<VuesaxLinearArrowDown className="icon-instance-node-3" />}
      heroNavigationBarsSwitchModeIcon={<VuesaxBoldMoon className="icon-instance-node-3" />}
    />
  );
};
