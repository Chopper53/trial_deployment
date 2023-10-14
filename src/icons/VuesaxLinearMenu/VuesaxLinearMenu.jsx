/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const VuesaxLinearMenu = ({ color = "#292929", className }) => {
  return (
    <svg
      className={`vuesax-linear-menu ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M5 11.6667H35" stroke={color} strokeLinecap="round" strokeWidth="2.5" />
      <path className="path" d="M5 20H35" stroke={color} strokeLinecap="round" strokeWidth="2.5" />
      <path className="path" d="M5 28.3333H35" stroke={color} strokeLinecap="round" strokeWidth="2.5" />
      <g className="g" opacity="0" />
    </svg>
  );
};

VuesaxLinearMenu.propTypes = {
  color: PropTypes.string,
};
