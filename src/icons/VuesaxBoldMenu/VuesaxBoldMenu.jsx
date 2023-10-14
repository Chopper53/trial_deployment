/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const VuesaxBoldMenu = ({ color = "#292929", className }) => {
  return (
    <svg
      className={`vuesax-bold-menu ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" opacity="0" />
      <path
        className="path"
        d="M29.2333 14.6833C31.9579 14.6833 34.1666 12.4746 34.1666 9.75001C34.1666 7.02541 31.9579 4.81668 29.2333 4.81668C26.5087 4.81668 24.2999 7.02541 24.2999 9.75001C24.2999 12.4746 26.5087 14.6833 29.2333 14.6833Z"
        fill={color}
      />
      <path
        className="path"
        d="M10.7667 14.6833C13.4913 14.6833 15.7 12.4746 15.7 9.75001C15.7 7.02541 13.4913 4.81668 10.7667 4.81668C8.0421 4.81668 5.83337 7.02541 5.83337 9.75001C5.83337 12.4746 8.0421 14.6833 10.7667 14.6833Z"
        fill={color}
      />
      <path
        className="path"
        d="M29.2333 35.1833C31.9579 35.1833 34.1666 32.9746 34.1666 30.25C34.1666 27.5254 31.9579 25.3167 29.2333 25.3167C26.5087 25.3167 24.2999 27.5254 24.2999 30.25C24.2999 32.9746 26.5087 35.1833 29.2333 35.1833Z"
        fill={color}
      />
      <path
        className="path"
        d="M10.7667 35.1833C13.4913 35.1833 15.7 32.9746 15.7 30.25C15.7 27.5254 13.4913 25.3167 10.7667 25.3167C8.0421 25.3167 5.83337 27.5254 5.83337 30.25C5.83337 32.9746 8.0421 35.1833 10.7667 35.1833Z"
        fill={color}
      />
    </svg>
  );
};

VuesaxBoldMenu.propTypes = {
  color: PropTypes.string,
};
