import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { AppLabel } from "../components/AppLable";
import {AppButton} from "../components/AppButton";


const Welcome = () => {
  //Регулярные выражения
  const RegexPhone = /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
  const RegexName = /^[a-zA-Zа-яА-ЯёЁ\s]+$/

  // Записывает значение инпутов
const [name, setName]= useState("");
const [phone, setPhone]= useState("");
// Передает состояние  в наш пропс hasError 
const [nameError,setNameError] = useState(false);
const[phoneError,setPhoneError]= useState(false);
const [buttonError,setButtonError]= useState(true);
console.log("as");
const handleClick = () =>{
  
if (!RegexName.test(name)){

  setNameError(true);

}else if (!RegexPhone.test(phone)){

  setPhoneError(true);
}else {
  setNameError(false);
  setPhoneError(false);
}


};





useEffect(() => {
if(!name || !phone){
  setButtonError(true)
}else {
  setButtonError(false)
}
},[name, phone]);
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
              inputValue={name}
              inputChange={setName}
              hasError={nameError}
            />
            <AppLabel
              labelText="Ваш номер"
              labelPlaceHolder="+998 9- --- -- -- "
              labelType="tel"
              labelName="phone"
              labelError="Введите номер в правильном формате"
              inputValue={phone}
              inputChange={setPhone}
              hasError={phoneError}
            />

            <AppButton
            buttonClick={handleClick}
              buttonText="Далее"
              buttonType="button"
              isDisabled={buttonError} 
            />

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
