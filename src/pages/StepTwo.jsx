import React from "react";
import { QuestionVariants } from "../components/QuestionVariants";
import {useState} from "react";
const StepTwo = () => {
  const [selectedVariant, setSelectedVariant] = useState(null);

  const handleVariantChange = (value) => {
    setSelectedVariant(value);
  };

  const handleNextClick = () => {
    console.log("Выбранный вариант:", selectedVariant);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>

          <QuestionVariants
            questionNumber={1}
            questionText="Занимательный вопрос"
            variants={[
              { value: "1", label: "Вариант 1" },
              { value: "2", label: "Вариант 2" },
              { value: "3", label: "Вариант 3" },
              { value: "4", label: "Вариант 4" },
            ]}
            selectedVariant={selectedVariant}
            onVariantChange={handleVariantChange}
            buttonDisabled={!selectedVariant}
            onNextClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
