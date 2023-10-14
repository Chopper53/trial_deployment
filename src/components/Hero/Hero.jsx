/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SocialNetworksDark } from "../../icons/SocialNetworksDark";
import { SocialNetworksLight } from "../../icons/SocialNetworksLight";
import { VuesaxBoldMoon20 } from "../../icons/VuesaxBoldMoon20";
import { VuesaxLinearArrowDown3 } from "../../icons/VuesaxLinearArrowDown3";
import { Buttons } from "../Buttons";
import { Escultures } from "../Escultures";
import { NavigationBars } from "../NavigationBars";
import "./style.css";

export const Hero = ({
  mode,
  className,
  navigationBarsSwitchModeIcon = <VuesaxBoldMoon20 className="icon-instance-node" color="#051724" />,
  buttonsIcon = <VuesaxLinearArrowDown3 className="icon-instance-node" color="white" />,
  esculturesNumber = "nine",
  esculturesNumberClassName,
}) => {
  return (
    <div className={`hero mode-6-${mode} ${className}`}>
      <NavigationBars
        buttonsText={mode === "dark" ? "Contact Me" : "Button"}
        className="navigation-bars-instance"
        color={mode === "dark" ? "black" : "white"}
        distribution="center"
        logoGroup={mode === "dark" ? "/img/group-1-86.png" : "/img/group-1.png"}
        mode="both"
        optionsText="About Me"
        size="complete"
        switchModeIcon={navigationBarsSwitchModeIcon}
      />
      <div className="frame-3">
        <div className="frame-4">
          <div className="title">
            <div className="frame-5">
              <div className="PRODUCT-DESIGNER">
                PRODUCT <br />
                DESIGNER
              </div>
              <div className="text-wrapper-4">CRISTIAN MUÑOZ</div>
            </div>
            <div className="frame-6">
              {mode === "light" && <SocialNetworksLight className="instance-node-4" />}

              {mode === "dark" && <SocialNetworksDark className="instance-node-4" />}

              <Buttons
                className="buttons-instance"
                content="text-icon"
                icon={buttonsIcon}
                size="large"
                stateProp="default"
                style="dark"
                text="Download Curriculum Vitae"
                type="square"
              />
            </div>
          </div>
          <img className="portal" alt="Portal" src={mode === "dark" ? "/img/portal-2.svg" : "/img/portal-3.svg"} />
        </div>
        <Escultures className={esculturesNumberClassName} number={esculturesNumber} />
      </div>
    </div>
  );
};

Hero.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]),
  esculturesNumber: PropTypes.string,
};
