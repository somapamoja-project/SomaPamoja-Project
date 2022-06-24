import React from "react";
import { useNavigate } from "react-router-dom";
import '../Style.css'

function PayPal({ GmailPaypal }) {
  const navigation = useNavigate();
  function VerifyPaypal() {
    const codePaypal = document.getElementById("codepaypal");
    if (Number(codePaypal.value) === 87654321) {
      function Redirect() {
        navigation("/ListOfCourses");
      }
     Redirect();
    } else {
      var failCode1 = document.getElementById("FailCode");
      failCode1.innerText = "Write the exact code,Please";
     

    }
  }

  return (
    <div className="container">
      <h1>Pay Via PayPal</h1>
      <div>
       Paypal's Gmail is :<h1>{GmailPaypal}</h1>
        <div>Amout to pay  $ <span><h1>9.9</h1></span> </div>
        <p>After Payment you will receive a code. Write it here,please:</p>
      </div>
      <input type="password" id="codepaypal" />
      <button onClick={VerifyPaypal} class="btn btn-success" id='codeVerify1'> Verify the code</button>
      <h3 id="FailCode"></h3>
      <a href="https://www.youtube.com/watch?v=KDGnsv6mXyk&ab_channel=SafaricomPLC" target='_blank'> How to pay with Till Number</a>
      
    </div>
  );
}

export default PayPal;
