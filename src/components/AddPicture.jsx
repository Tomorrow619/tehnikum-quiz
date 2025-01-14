import React from "react";

export const AddPicture = ({
  inputType,
  inputName,
  inputId,
  labelPic,
  labelPicAlt,
  labelText,
  inputChange,
  onChange,
  inputValue,
}) => {
  return (
    <li className="variant-wrapper">
      <input
        required type={inputType}
        name={inputName}
        id={inputId}
        value={inputValue}
        onChange={onChange}
      />
      <label htmlFor={inputId} onClick={(e) => inputChange(e.target)}>
        <img src={labelPic} alt={labelPicAlt} />
        <p>{labelText}</p>
      </label>
    </li>
  );
};
