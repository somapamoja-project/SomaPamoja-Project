import React from "react";
import { useNavigate } from "react-router-dom";

function Mpesa({ TillNumber }) {
  const navigation = useNavigate();
  function VerifyMpesa() {
    const codeMpesa = document.getElementById("codeMpesa");
    if (Number(codeMpesa.value) === 87654321) {
      function Redirect() {
        navigation("/ListOfCourses");
      }
      Redirect();
    } else {
      var failCode = document.getElementById("FailCode");
      failCode.innerText = "Write the exact code,Please";
     

    }
  }

  return (
    <div className="container">
      <h1>Pay Via Mpesa</h1>
      <div>
        Till Number is:<h1>{TillNumber}</h1>
        <p>Amout to pay  Ksh <h1>1 166,22</h1> </p>
        <p>After Payment you will receive a code. Write it here,please:</p>
      </div>
      <input type="password" id="codeMpesa" />
      <button onClick={VerifyMpesa} class="btn btn-success" id='codeVerify'> Verify the code</button>
      <h3 id="FailCode"></h3>
      <a href="https://www.youtube.com/watch?v=KDGnsv6mXyk&ab_channel=SafaricomPLC" target='_blank'> How to pay with Till Number</a>
      
    </div>
  );
}

export default Mpesa;
