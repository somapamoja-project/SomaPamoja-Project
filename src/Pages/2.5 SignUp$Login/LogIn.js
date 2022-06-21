import React from "react";

import {
    signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebase/Firebase-config";
import "./style.css";
import SignUp from "../../Images/SignUp.png";
import { useState } from "react";

export default function SigningIn() {
  const [userDetails, setuserDetails] = useState({});
  const navigation = useNavigate();

  async function Submit() {
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var UserEmail = document.getElementById("userEmail");
    

    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (data) => {
          if (data) {
            navigation("/User");
          } else {
            var noData = document.getElementById("userEmail");
            noData.innerText = "You do not have an account  ";
            document.getElementById('CreateA').style.display='flex'
          }
          return data;
        }
      );
    } catch (err) {
      var noData = document.getElementById("userEmail");
      noData.innerText = "Error try again";
      console.log(err.message);
    }
  }

  async function SignINwithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      const Router = () => {
        navigation("/User");
      };
      Router();
    } catch (err) {
      var noData = document.getElementById("userEmail");
      noData.innerText = "Error try again";
      console.log(err.message);
    }
  }

  return (
    <div className="container">
      <h1>LogIN</h1>

      <div className="container4">
        <input id="Email" type="text" placeholder="Email" />
      </div>

      <div className="container4">
        <input id="Password" type="password" placeholder="Password" />
      </div>
      <button class="btn btn-primary" id="submitEmail" onClick={Submit}>
        Submit
      </button>
      <button onClick={SignINwithGoogle} id="btnSignUp">
        <img src={SignUp} />
      </button>
      <h1 id="userEmail"></h1>
      <Link to='/SigningUp' className="btn btn-primary" id="createA">Create an Account </Link>
    </div>
  );
}
