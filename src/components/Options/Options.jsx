/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Options = ({
  className,
  text = "Text",
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
}) => {
  return (
    <div className={`options ${className}`}>
      <div className={`div ${divClassName}`}>{text}</div>
      <div className={`div ${divClassNameOverride}`}>{text}</div>
      <div className={`div ${divClassName1}`}>{text}</div>
      <div className={`div ${divClassName2}`}>{text}</div>
    </div>
  );
};

Options.propTypes = {
  text: PropTypes.string,
};
