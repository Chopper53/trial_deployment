/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const VuesaxBoldCloseCircle = ({ color = "#A7972E", className }) => {
  return (
    <svg
      className={`vuesax-bold-close-circle ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5ZM11.52 10.725C11.7375 10.9425 11.7375 11.3025 11.52 11.52C11.4075 11.6325 11.265 11.685 11.1225 11.685C10.98 11.685 10.8375 11.6325 10.725 11.52L9 9.795L7.275 11.52C7.1625 11.6325 7.02 11.685 6.8775 11.685C6.735 11.685 6.5925 11.6325 6.48 11.52C6.2625 11.3025 6.2625 10.9425 6.48 10.725L8.205 9L6.48 7.275C6.2625 7.0575 6.2625 6.6975 6.48 6.48C6.6975 6.2625 7.0575 6.2625 7.275 6.48L9 8.205L10.725 6.48C10.9425 6.2625 11.3025 6.2625 11.52 6.48C11.7375 6.6975 11.7375 7.0575 11.52 7.275L9.795 9L11.52 10.725Z"
        fill={color}
      />
      <g className="g" opacity="0" />
    </svg>
  );
};

VuesaxBoldCloseCircle.propTypes = {
  color: PropTypes.string,
};
