import React from "react";
import { ProgressBar } from "../components/ProgressBar";

import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";
import { AppLabel } from "../components/AppLabel";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";
const StepOne = () => {
  const [answer, setAnswer] = useState("");

  const [answerError, setAnswerError] = useState(false);
  const [buttonError, setButtonError] = useState(true);

  const navigate = useNavigate();

  const hendleClick = () => {
    if (!answer) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
      navigate("/step-two");
      const userInfo = {
        ...JSON.parse(localStorage.getItem("userInfo")),
        answer,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  };

  useEffect(() => {
    if (!answer) {
      setButtonError(true);
    } else {
      setButtonError(false);
    }
  });

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar
            progressBarText="Скидка за прохождение опроса:"
            progressBarPercent="15%"
            currentStep={0}
          />

          <div className="question">
            <Header headerText="Откуда вы о нас узнали?" textType="h2" />

            <AppLabel
              labelType="text"
              labelName="answer"
              labelPlaceholder="Ваш ответ"
              labelError="Введите ответ в правильном формате например"
              inputValue={answer}
              inputChange={setAnswer}
              hasError={answerError}
            />

            <AppButton
              buttonText="Далее"
              buttonType="button"
              isDisabled={buttonError}
              buttonClick={hendleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
