import React from "react";
import { Link } from "react-router-dom";
export const AppButton = ({
  buttonType,
  buttonText,
  isDisabled,
  buttonClick
}) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType}
      onClick={buttonClick}
      id="next-btn"
    >
      {buttonText}
    </button>
  );
};
