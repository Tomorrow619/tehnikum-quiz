import React from "react";
import {ProgressBar} from "../components/ProgressBar"
import { Questions } from "../components/Questions";
const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
         <ProgressBar
         
         />
         <Questions
        questionNumber={1}
        questionText="Занимательный вопрос"
        inputType="text"
        inputName="answer"
        inputPlaceholder="Ваш ответ"
        errorMessage="Введите номер в правильном формате, например"
        buttonDisabled={false}
        
      />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
