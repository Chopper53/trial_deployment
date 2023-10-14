/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { VuesaxBoldCloseCircle } from "../../icons/VuesaxBoldCloseCircle";
import "./style.css";

export const Tags = ({ icon, style, border, className, text = "Label" }) => {
  return (
    <div className={`tags ${border} ${icon} ${style} ${className}`}>
      {icon === "on" && (
        <VuesaxBoldCloseCircle
          className="vuesax-bold-close"
          color={
            style === "primary"
              ? "#784DC7"
              : style === "danger"
              ? "#6E1B20"
              : style === "info"
              ? "#15476D"
              : style === "success"
              ? "#158212"
              : style === "warning"
              ? "#A7972E"
              : "#737373"
          }
        />
      )}

      <div className="label">{text}</div>
    </div>
  );
};

Tags.propTypes = {
  icon: PropTypes.oneOf(["off", "on"]),
  style: PropTypes.oneOf(["warning", "danger", "info", "success", "primary", "disabled"]),
  border: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
};
