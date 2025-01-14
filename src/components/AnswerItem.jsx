import React from "react";

export const AnswerItem = ({ answerText, answerVariants, onChange }) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="course"
        id={answerVariants}
        onChange={onChange}
      />
      <label htmlFor={answerVariants}>{answerText}</label>
    </li>
  );
};
