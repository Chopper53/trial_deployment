/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { VuesaxBoldMoon20 } from "../../icons/VuesaxBoldMoon20";
import { VuesaxBoldSun3 } from "../../icons/VuesaxBoldSun3";
import "./style.css";

export const SwitchMode = ({
  mode,
  style,
  icon,
  innerIcon,
  label,
  ousideIcons,
  override = <VuesaxBoldMoon20 className="vuesax-bold-moon-20" color="#051724" />,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    mode: mode || "light",
    style: style || "default",
    icon: icon || "off",
    innerIcon: innerIcon || "off",
    label: label || "off",
    ousideIcons: ousideIcons || "off",
  });

  return (
    <div
      className={`switch-mode inner-icon-${state.innerIcon} style-0-${state.style} ouside-icons-${state.ousideIcons} label-${state.label} mode-${state.mode} icon-${state.icon}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.label === "off" && state.innerIcon === "off" && state.ousideIcons === "off" && (
        <div className="ellipse">
          {state.mode === "light" && state.icon === "on" && (
            <VuesaxBoldSun3 className="instance-node" color={state.style === "disabled" ? "#9F9F9F" : "#231E00"} />
          )}

          {state.icon === "on" && state.mode === "dark" && (
            <VuesaxBoldMoon20 className="instance-node" color={state.style === "disabled" ? "#9F9F9F" : "white"} />
          )}
        </div>
      )}

      {(state.ousideIcons === "on" || (state.innerIcon === "on" && state.mode === "dark")) && (
        <VuesaxBoldSun3
          className={`${state.innerIcon === "off" ? "vuesax-bold-moon" : "vuesax-bold-moon-20"}`}
          color={
            state.innerIcon === "on" && ["border", "default", "hover"].includes(state.style)
              ? "#FFF194"
              : state.style === "disabled" && state.innerIcon === "on"
              ? "#292929"
              : state.mode === "light" && ["border", "default", "hover"].includes(state.style)
              ? "#FFE74C"
              : state.style === "disabled" && state.mode === "light"
              ? "#9F9F9F"
              : state.innerIcon === "off" && state.style === "disabled" && state.mode === "dark"
              ? "#E6E6E6"
              : "#FFF8C9"
          }
        />
      )}

      {state.innerIcon === "on" && <div className="circle" />}

      {state.label === "on" && <div className="text-wrapper-2">Light</div>}

      {(state.label === "on" || state.ousideIcons === "on") && (
        <div className="ellipse-wrapper">
          <div className="ellipse-2" />
        </div>
      )}

      {state.label === "on" && <div className="text-wrapper-3">Dark</div>}

      {state.mode === "light" && state.innerIcon === "on" && <>{override}</>}

      {state.ousideIcons === "on" && (
        <VuesaxBoldMoon20
          className="vuesax-bold-moon"
          color={
            state.mode === "dark" && ["border", "default", "hover"].includes(state.style)
              ? "#AEDCFF"
              : state.style === "disabled" && state.mode === "light"
              ? "#E6E6E6"
              : state.style === "disabled" && state.mode === "dark"
              ? "#9F9F9F"
              : "#EBF6FF"
          }
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  if (
    state.icon === "off" &&
    state.innerIcon === "on" &&
    state.label === "off" &&
    state.mode === "light" &&
    state.ousideIcons === "off" &&
    state.style === "default"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "off",
          innerIcon: "on",
          label: "off",
          mode: "light",
          ousideIcons: "off",
          style: "hover",
        };
    }
  }

  if (
    state.icon === "off" &&
    state.innerIcon === "on" &&
    state.label === "off" &&
    state.mode === "light" &&
    state.ousideIcons === "off" &&
    state.style === "hover"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "off",
          innerIcon: "on",
          label: "off",
          mode: "light",
          ousideIcons: "off",
          style: "default",
        };
    }
  }

  if (
    state.icon === "off" &&
    state.innerIcon === "on" &&
    state.label === "off" &&
    state.mode === "dark" &&
    state.ousideIcons === "off" &&
    state.style === "default"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "off",
          innerIcon: "on",
          label: "off",
          mode: "dark",
          ousideIcons: "off",
          style: "hover",
        };
    }
  }

  if (
    state.icon === "off" &&
    state.innerIcon === "on" &&
    state.label === "off" &&
    state.mode === "dark" &&
    state.ousideIcons === "off" &&
    state.style === "hover"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "off",
          innerIcon: "on",
          label: "off",
          mode: "dark",
          ousideIcons: "off",
          style: "default",
        };
    }
  }

  if (
    state.icon === "off" &&
    state.innerIcon === "on" &&
    state.label === "off" &&
    state.mode === "light" &&
    state.ousideIcons === "off" &&
    state.style === "border"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "off",
          innerIcon: "on",
          label: "off",
          mode: "dark",
          ousideIcons: "off",
          style: "border",
        };
    }
  }

  if (
    state.icon === "off" &&
    state.innerIcon === "on" &&
    state.label === "off" &&
    state.mode === "dark" &&
    state.ousideIcons === "off" &&
    state.style === "border"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "off",
          innerIcon: "on",
          label: "off",
          mode: "light",
          ousideIcons: "off",
          style: "border",
        };
    }
  }

  return state;
}

SwitchMode.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]),
  style: PropTypes.oneOf(["disabled", "hover", "border", "default"]),
  icon: PropTypes.oneOf(["off", "on"]),
  innerIcon: PropTypes.oneOf(["off", "on"]),
  label: PropTypes.oneOf(["off", "on"]),
  ousideIcons: PropTypes.oneOf(["off", "on"]),
};
