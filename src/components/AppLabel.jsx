import React from "react";

export const AppLabel = ({
  labelText,
  labelType,
  labelName,
  labelPlaceHolder,
  labelError,
  inputValue,
  inputChange,
  hasError,
}) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"}`} htmlFor={labelName}>
      {labelText}
      <input
        required
        type={labelType}
        name={labelName}
        id={labelName}
        placeholder={labelPlaceHolder}
        value={inputValue}
        onChange={(e)=>inputChange(e.target.value)}
      />
      {hasError && <span id="error-message">{labelError}</span>}
    </label>
  );
};
