import React from "react";
import {ProgressBar} from "../components/ProgressBar"
import { Questions } from "../components/Questions";

import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const navigate = useNavigate();
  
  const handleNextPage = () => {
    navigate("/step-two"); 
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
         <ProgressBar
         currentStep={0}
         />
         <Questions
        questionNumber={1}
        questionText="Занимательный вопрос"
        inputType="text"
        inputName="answer"
        inputPlaceholder="Ваш ответ"
        errorMessage="Введите номер в правильном формате, например"
        buttonDisabled={false} 
        onNextPage={handleNextPage}
        
      /> 
     
      
        </div>
      </div>
    </div>
  );
};

export default StepOne;
