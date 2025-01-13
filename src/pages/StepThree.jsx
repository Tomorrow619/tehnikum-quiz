import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import {EmojiQuestion} from "../components/EmojiQuestion";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";


const StepThree = () => {
  const [selectedVariant, setSelectedVariant] = useState(null);

  const handleVariantChange = (value) => {
    setSelectedVariant(value);
  };
const navigate = useNavigate();
  const handleNextClick = () => {
    navigate ("/step-four");
  };

  return (
    <div>
      <ProgressBar  currentStep={2}/> 
      <EmojiQuestion
        questionNumber={3}
        questionText="Занимательный вопрос"
        variants={[
          { value: "1", imgSrc: "./img/laugh.png", imgAlt: "laugh", label: "Ваш ответ 1" },
          { value: "2", imgSrc: "./img/hearts.png", imgAlt: "hearts", label: "Ваш ответ 2" },
          { value: "3", imgSrc: "./img/smirk.png", imgAlt: "smirk", label: "Ваш ответ 3" },
          { value: "4", imgSrc: "./img/fright.png", imgAlt: "fright", label: "Ваш ответ 4" },
        ]}
        selectedVariant={selectedVariant}
        onVariantChange={handleVariantChange}
        buttonDisabled={!selectedVariant}
        onNextClick={handleNextClick}
      />
      
    </div>
  );
};

export default StepThree;