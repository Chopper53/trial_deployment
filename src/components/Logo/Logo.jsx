/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({ property1, className, groupClassName, group = "/img/group-1-5.png", tianClassName }) => {
  return (
    <div className={`logo ${property1} ${className}`}>
      <img
        className={`group ${groupClassName}`}
        alt="Group"
        src={property1 === "positive" ? "/img/group-1-6.png" : property1 === "white" ? group : "/img/group-1-7.png"}
      />
      {["green", "negative", "purple"].includes(property1) && (
        <img className={`tian ${tianClassName}`} alt="Tian" src="/img/tian.png" />
      )}

      {["positive", "white"].includes(property1) && <div className={`text-wrapper ${tianClassName}`}>tian</div>}
    </div>
  );
};

Logo.propTypes = {
  property1: PropTypes.oneOf(["white", "negative", "positive", "green", "purple"]),
  group: PropTypes.string,
};
