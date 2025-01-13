import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { AnswerItem } from "../components/AnswerItem";
import { Header } from "../components/Header";
import { useState } from "react";
import {AppButton} from "../components/AppButton";
import { useEffect } from "react";
const StepFour = () => {
  const navigate = useNavigate();
  const [checkVariants, setCheckVariants] = useState(null);

  const variants = [1, 2, 3, 4, 5];
  const course = JSON.parse(localStorage.getItem("user-info"));

  useEffect(() => {
    const userInfo = {
      ...JSON.parse(localStorage.getItem("user-info")),
      checkVariants,
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [checkVariants]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            
           <Header
              textType="h2"
              headerText={`Как хорошо вы знаете ${course.checkedAnswer}`}
            />

            <ul className="level-variants">
              {variants.map((elem, index) => 
                <AnswerItem
                  answerText={elem}
                  answerVariants={index}
                  key={index}
                  onChange={()=>setCheckVariants(elem)

                  }
                /> )}
             
            </ul>
            <AppButton buttonClick={() => navigate("/thanks")} isDisabled={!checkVariants}
            buttonText="Далее" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
