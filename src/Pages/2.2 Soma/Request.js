import React from "react";
import { useState } from "react";
import logoQ from "../../Images/owliequestion.png";
import "./style.css";

export default function Request() {
  const [age, setAge] = useState();
  const Redirect = () => {
    const age = document.getElementById("age");
    if(age.value<=0){
        setAge('You can not have this age')

    }
   else if(age.value<=5 ){
        setAge('You are so Young')

    }
    else if(age.value>5 && age.value<18){
        setAge('Go To our Free Course')


    }
    else if(age.value>=18){
        setAge('Create an account')
    }
    else(setAge(''))
  };
  return (
    <div className='containerR'>
      <img src={logoQ} alt="loading..." />
      <h3>What is your Age?</h3>
      <input type="number" classname='form-control' id="age" placeholder="   age" />
      <button  onClick={Redirect} className='btn btn-primary' >Send</button>
      <h2>{age}</h2>
    </div>
  );
}
