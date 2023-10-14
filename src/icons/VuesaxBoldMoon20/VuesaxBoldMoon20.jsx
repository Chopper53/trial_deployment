/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const VuesaxBoldMoon20 = ({ color = "#051724", className }) => {
  return (
    <svg
      className={`vuesax-bold-moon-20 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M17.9417 13.275C17.8083 13.05 17.4333 12.7 16.5 12.8667C15.9833 12.9583 15.4583 13 14.9333 12.975C12.9917 12.8917 11.2333 12 10.0083 10.625C8.925 9.41666 8.25833 7.84166 8.25 6.14166C8.25 5.19166 8.43333 4.275 8.80833 3.40833C9.175 2.56666 8.91667 2.125 8.73333 1.94166C8.54167 1.75 8.09167 1.48333 7.20833 1.85C3.8 3.28333 1.69167 6.7 1.94167 10.3583C2.19167 13.8 4.60833 16.7417 7.80833 17.85C8.575 18.1167 9.38333 18.275 10.2167 18.3083C10.35 18.3167 10.4833 18.325 10.6167 18.325C13.4083 18.325 16.025 17.0083 17.675 14.7667C18.2333 13.9917 18.0833 13.5 17.9417 13.275Z"
        fill={color}
      />
      <g className="g" opacity="0" />
    </svg>
  );
};

VuesaxBoldMoon20.propTypes = {
  color: PropTypes.string,
};
