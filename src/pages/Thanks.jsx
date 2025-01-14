import React from "react";
import Header from "../components/Header";
import AddText from "../components/AddText";
import { AppButton } from "../components/AppButton";


const Thanks = () => {
  const data = JSON.parse(localStorage.getItem("userInfo")) || {}; 
  const keyInfo = [
    "Имя",
    "Номер телефона",
    "Откуда узнали",
    "Выбранный курс",
    "Эмоджи",
    "Как хорошо вы знаете предмет"
  ];

  const keys = Object.keys(data); 

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />

          <Header headerText="Спасибо за прохождение опроса!" textType="h1" />

          
          {keys.map((key, index) => (
            <AddText
              key={index}
              addText={`${keyInfo[index] || key}: ${data[key] || "не указано"}`}
            />
          ))}
        
          <AddText addText="Получи свою скидку по ссылке ниже" />

          <AppButton
            buttonText="Получить ссылку"
            buttonType="button"
            buttonId="link"
          />
        </div>
      </div>
    </div>
  );
};

export default Thanks;