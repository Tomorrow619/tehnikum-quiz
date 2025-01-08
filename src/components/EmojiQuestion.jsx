import React from "react";


export const EmojiQuestion = ({
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
        <ul className="emoji-variants">
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
              <label htmlFor={`variant-${index + 1}`}>
                <img src={variant.imgSrc} alt={variant.imgAlt} />
                <p>{variant.label}</p>
              </label>
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
  };