import React from "react";
export const AppButton = ({ buttonType, buttonText, isDisabled }) => {
  return (
    <button disabled={isDisabled} type={buttonType} id="next-btn">
      {buttonText}
    </button>
  );
};
