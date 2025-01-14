import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerItem } from "../components/AnswerItem";
import { useState } from "react";
import { AppButton } from "../components/AppButton";

const StepTwo = () => {
  
  const variants = [
    {
      id: "variant-1",
      labelText: "Frontend",
    },
    {
      id: "variant-2",
      labelText: "Python",
    },
    {
      id: "variant-3",
      labelText: "UX/UI",
    },
    {
      id: "variant-4",
      labelText: "FullStack",
    },
  ];
  const [checkedAnswer, setCheckedAnswer] = useState("");
  const [buttonError, setButtonError] = useState(true)
  useEffect(() => {
    const userInfo = {...JSON.parse(localStorage.getItem("userInfo")),checkedAnswer}
    localStorage.setItem("userInfo",JSON.stringify(userInfo))
    if(!checkedAnswer){
      setButtonError(true)
    }else{
      setButtonError(false)
    }
  }, [checkedAnswer])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={1} />
          <div className="question"></div>

          <Header headerText={"Выберите курс."} textType={"h2"} />
          
          <ul className="variants">
            {variants.map((elem) => {
              return (
                <AnswerItem
                  key={elem.id}
                  answerText={elem.labelText}
                  answerVariants={elem.id}
                  onChange={() => {
                    setCheckedAnswer(elem.labelText);
                  }}
                  checked={checkedAnswer === elem.labelText}
                />
              );
            })}
          </ul>

         <Link to="/step-three">
          <AppButton
          buttonText="Далее"
          buttonType="button"
          isDisabled={buttonError}
          
          
          
          /></Link>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
