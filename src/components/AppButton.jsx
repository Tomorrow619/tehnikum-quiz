import React from "react";
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
