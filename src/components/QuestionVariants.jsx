import React from "react";
export const QuestionVariants = ({
    questionNumber,
    questionText,
    variants,
    selectedVariant,
    onVariantChange,
    buttonDisabled,
    onNextClick = () => {},
  }) => {
    return (
      <div className="question">
        <h2>{`${questionNumber}. ${questionText}`}</h2>
        <ul className="variants">
          {variants.map((variant, index) => (
            <li className="variant-wrapper" key={index}>
              <input
                required
                type="radio"
                name={`variant-${questionNumber}`}
                id={`variant-${index + 1}`}
                value={variant.value}
                checked={selectedVariant === variant.value}
                onChange={() => onVariantChange(variant.value)}
              />
              <label htmlFor={`variant-${index + 1}`}>{variant.label}</label>
            </li>
          ))}
        </ul>
        <button
          type="button"
          disabled={buttonDisabled}
          id="next-btn"
          onClick={onNextClick}
        >
          Далее
        </button>
      </div>
    );
  }