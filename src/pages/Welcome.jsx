import React from "react";
import Header from "../components/Header";
import { AppLabel } from "../components/AppLable";
import {AppButton} from "../components/AppButton";
const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
            headerText="Добро пожаловать  в квиз от лучшего учебного центра"
            textType="h6"
          />

          <form className="welcome__form">
            <AppLabel
              labelText="Ваше имя"
              labelPlaceHolder="Введите ваше имя"
              labelType="text"
              labelName="username"
              labelError="Введите имя в правильном формате например"
            />
            <AppLabel
              labelText="Ваш номер"
              labelPlaceHolder="+998 9- --- -- -- "
              labelType="tel"
              labelName="phone"
              labelError="Введите номер в правильном формате"
            />

            <AppButton
              buttonText="Далее"
              buttonType="button"
              isDisabled={false} 
            />

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
