import React from "react";

export const AppLabel = ({
  labelText,
  labelType,
  labelName,
  labelPlaceHolder,
  labelError,
}) => {
  return (
    <label className="input-wrapper" htmlFor={labelName}>
      {labelText}
      <input
        required
        type={labelType}
        name={labelName}
        id={labelName}
        placeholder={labelPlaceHolder}
      />
      <span id="error-message">{labelError}</span>
    </label>
  );
};
