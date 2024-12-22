import React from "react";

export const Questions = ({
  questionNumber,
  questionText,
  inputType,
  inputName,
  inputPlaceholder,
  errorMessage,
  buttonDisabled,
 
}) => {
  return (
    <div className="question">
      <h2>{`${questionNumber}. ${questionText}`}</h2>
      <label className="input-wrapper">
        <input
          required
          type={inputType}
          name={inputName}
          placeholder={inputPlaceholder}
        />
        <span id="error-message">{errorMessage}</span>
      </label>
      <button
        type="button"
        disabled={buttonDisabled}
        id="next-btn"
        
      >
        Далее
      </button>
    </div>
  );
};
