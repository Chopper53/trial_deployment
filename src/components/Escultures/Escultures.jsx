/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Escultures = ({ number, className }) => {
  return (
    <div className={`escultures ${number} ${className}`}>
      {["eight", "eleven", "twelve"].includes(number) && (
        <img
          className="wepik-photo-mode"
          alt="Wepik photo mode"
          src={
            number === "eleven"
              ? "/img/pdfma6-pdfamouspainting095001c-image-convertido-1-1.png"
              : number === "twelve"
              ? "/img/pdfma6-pdfamouspainting095001c-image-convertido-1.png"
              : "/img/wepik-photo-mode-2022929-153241-1.png"
          }
        />
      )}
    </div>
  );
};

Escultures.propTypes = {
  number: PropTypes.oneOf([
    "seven",
    "two",
    "ten",
    "twelve",
    "three",
    "nine",
    "four",
    "eleven",
    "one",
    "five",
    "eight",
    "six",
  ]),
};
