import React from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebase/Firebase-config";
import "./style.css";
import SignUp from "../../Images/SignUp.png";
import { useState } from "react";


export default function SigningUp() {
  const [userDetails, setuserDetails] = useState({});
  const navigation = useNavigate();
  async function Submit() {
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var UserEmail = document.getElementById("userEmail");

    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (data) => {
          if (data) {
            navigation("/User");
          } else {
            var noData = document.getElementById("userEmail");
            noData.innerText = "Error try again";
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

  async function SignUpwithGoogle() {
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
  async function SignUpwithFacebook(){
    const provider=new FacebookAuthProvider()
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
      <h1>Sign Up</h1>

      <div className="container4">
        <input id="Email" type="text" placeholder="Email" />
      </div>

      <div className="container4">
        <input id="Password" type="password" placeholder="Password" />
      </div>
      <button class="btn btn-primary" id="submitEmail" onClick={Submit}>
        Submit
      </button>
      <button onClick={SignUpwithGoogle} id="btnSignUp">
        <img src={SignUp} />
      </button>
      <button onClick={SignUpwithFacebook} id="btnSignUp">
       facebook
      </button>
      <h1 id="userEmail"></h1>
      <Link to='/SigningIn'className="btn btn-primary" id="createA"> Already have an Account</Link>
    </div>
  );
}
