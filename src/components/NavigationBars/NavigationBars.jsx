/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { VuesaxBoldCategory2 } from "../../icons/VuesaxBoldCategory2";
import { VuesaxBoldMenu } from "../../icons/VuesaxBoldMenu";
import { VuesaxBoldMoon20 } from "../../icons/VuesaxBoldMoon20";
import { VuesaxLinearMenu } from "../../icons/VuesaxLinearMenu";
import { Buttons } from "../Buttons";
import { Logo } from "../Logo";
import { Options } from "../Options";
import { SwitchMode } from "../SwitchMode";
import "./style.css";

export const NavigationBars = ({
  size,
  mode,
  color,
  distribution,
  className,
  logoGroup = "/img/group-1-26.png",
  optionsText = "Text",
  switchModeIcon = <VuesaxBoldMoon20 className="vuesax-bold-moon-11" color="#051724" />,
  buttonsText = "Button",
}) => {
  return (
    <div className={`navigation-bars ${size} color-${color} ${className}`}>
      {((color === "green-light" && distribution === "icon" && size === "round") ||
        (color === "purple-dark" && distribution === "icon" && size === "round") ||
        (color === "purple-light" && distribution === "icon" && size === "round") ||
        (color === "purple" && distribution === "icon" && size === "round") ||
        (color === "white" && distribution === "icon" && size === "round") ||
        distribution === "center" ||
        (distribution === "icon" && size === "complete") ||
        (distribution === "icon" && size === "rounded") ||
        distribution === "right") && (
        <Logo
          group={
            color === "purple-light" && ["icon", "right"].includes(distribution)
              ? "/img/group-1-62.png"
              : (color === "green-light" && distribution === "icon") ||
                (color === "green-light" && distribution === "right") ||
                (color === "outline" && distribution === "icon") ||
                (color === "outline" && distribution === "right") ||
                (color === "white" && distribution === "icon") ||
                (color === "white" && distribution === "right")
              ? "/img/group-1-10.png"
              : distribution === "center"
              ? logoGroup
              : "/img/group-1-26.png"
          }
          property1="white"
          tianClassName={`${color === "purple-light" && "class-7"} ${
            ["green-light", "outline", "white"].includes(color) && "class-8"
          }`}
        />
      )}

      {distribution === "center" && (
        <Options
          className="instance-node-2"
          divClassName={`${color === "purple-light" ? "class-7" : "class-8"}`}
          divClassName1={`${color === "purple-light" ? "class-7" : "class-8"}`}
          divClassName2={`${color === "purple-light" ? "class-7" : "class-8"}`}
          divClassNameOverride={`${color === "purple-light" ? "class-7" : "class-8"}`}
          text={optionsText}
        />
      )}

      {distribution === "right" && (
        <div className="frame">
          <Options
            className="instance-node-2"
            divClassName={`${color === "purple-light" ? "class-7" : "class-8"}`}
            divClassName1={`${color === "purple-light" ? "class-7" : "class-8"}`}
            divClassName2={`${color === "purple-light" ? "class-7" : "class-8"}`}
            divClassNameOverride={`${color === "purple-light" ? "class-7" : "class-8"}`}
            text="Text"
          />
          <Buttons
            className="instance-node-2"
            content="text"
            size="medium"
            stateProp={size === "rounded" && ["purple-dark", "purple"].includes(color) ? "disabled" : "default"}
            style={["green-light", "white"].includes(color) ? "dark" : "light"}
            text="Button"
            type={
              color === "outline" ||
              (color === "purple-dark" && size === "complete") ||
              (color === "purple-dark" && size === "round") ||
              (color === "purple-light" && size === "complete") ||
              (color === "purple" && size === "complete") ||
              (color === "purple" && size === "round")
                ? "secondary"
                : size === "rounded" || (color === "black" && size === "round")
                ? "rounded"
                : "primary"
            }
          />
        </div>
      )}

      {distribution === "icon" && size === "complete" && (
        <VuesaxLinearMenu
          className="instance-node-3"
          color={
            color === "purple-light"
              ? "#0F0324"
              : ["green-light", "outline", "white"].includes(color)
              ? "#292929"
              : "white"
          }
        />
      )}

      {((color === "black" && distribution === "center" && size === "complete") ||
        (color === "white" && distribution === "center" && size === "complete") ||
        distribution === "left") && (
        <div className={`frame-2 distribution-${distribution}`}>
          {distribution === "center" && (
            <>
              <SwitchMode
                icon="off"
                innerIcon="on"
                label="off"
                mode={color === "black" ? "light" : "dark"}
                ousideIcons="off"
                override={switchModeIcon}
                style="default"
              />
              <Buttons
                className="instance-node-2"
                content="text"
                size="medium"
                stateProp="default"
                style={color === "black" ? "light" : "dark"}
                text={buttonsText}
                type="primary"
              />
            </>
          )}

          {distribution === "left" && (
            <>
              <Logo
                group={
                  color === "purple-light"
                    ? "/img/group-1-62.png"
                    : ["green-light", "outline", "white"].includes(color)
                    ? "/img/group-1-10.png"
                    : "/img/group-1-26.png"
                }
                property1="white"
                tianClassName={`${color === "purple-light" && "class-7"} ${
                  ["green-light", "outline", "white"].includes(color) && "class-8"
                }`}
              />
              <Options
                className="instance-node-2"
                divClassName={`${color === "purple-light" && "class-7"} ${
                  ["green-light", "outline", "white"].includes(color) && "class-8"
                }`}
                divClassName1={`${color === "purple-light" && "class-7"} ${
                  ["green-light", "outline", "white"].includes(color) && "class-8"
                }`}
                divClassName2={`${color === "purple-light" && "class-7"} ${
                  ["green-light", "outline", "white"].includes(color) && "class-8"
                }`}
                divClassNameOverride={`${color === "purple-light" && "class-7"} ${
                  ["green-light", "outline", "white"].includes(color) && "class-8"
                }`}
                text="Text"
              />
            </>
          )}
        </div>
      )}

      {((color === "black" && distribution === "center" && size === "round") ||
        (color === "black" && distribution === "center" && size === "rounded") ||
        (color === "green-light" && distribution === "center") ||
        (color === "outline" && distribution === "center") ||
        (color === "purple-dark" && distribution === "center") ||
        (color === "purple-light" && distribution === "center") ||
        (color === "purple" && distribution === "center") ||
        (color === "white" && distribution === "center" && size === "round") ||
        (color === "white" && distribution === "center" && size === "rounded") ||
        distribution === "left") && (
        <Buttons
          className="instance-node-2"
          content="text"
          size="medium"
          stateProp={size === "rounded" && ["purple-dark", "purple"].includes(color) ? "disabled" : "default"}
          style={["green-light", "white"].includes(color) ? "dark" : "light"}
          text="Button"
          type={
            color === "outline" ||
            (color === "purple-dark" && size === "complete") ||
            (color === "purple-dark" && size === "round") ||
            (color === "purple-light" && size === "complete") ||
            (color === "purple" && size === "complete") ||
            (color === "purple" && size === "round")
              ? "secondary"
              : size === "rounded" || (color === "black" && size === "round")
              ? "rounded"
              : "primary"
          }
        />
      )}

      {distribution === "icon" && size === "rounded" && (
        <VuesaxBoldMenu
          className="instance-node-3"
          color={color === "purple-light" ? "#0F0324" : ["green-light", "white"].includes(color) ? "#292929" : "white"}
        />
      )}

      {color === "black" && size === "round" && distribution === "icon" && <Logo group={logoGroup} property1="white" />}

      {size === "round" && distribution === "icon" && (
        <VuesaxBoldCategory2
          className="instance-node-3"
          color={
            ["black", "purple-dark", "purple"].includes(color)
              ? "white"
              : color === "purple-light"
              ? "#0F0324"
              : ["green-light", "white"].includes(color)
              ? "#292929"
              : undefined
          }
        />
      )}

      {color === "black" && size === "round" && distribution === "icon" && (
        <VuesaxBoldCategory2 className="instance-node-3" color="white" />
      )}
    </div>
  );
};

NavigationBars.propTypes = {
  size: PropTypes.oneOf(["round", "rounded", "complete"]),
  mode: PropTypes.oneOf(["both"]),
  color: PropTypes.oneOf(["purple-dark", "white", "green-light", "black", "outline", "purple-light", "purple"]),
  distribution: PropTypes.oneOf(["right", "icon", "center", "left"]),
  logoGroup: PropTypes.string,
  optionsText: PropTypes.string,
  buttonsText: PropTypes.string,
};
