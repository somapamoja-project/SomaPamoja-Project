import React, { useState, useRef, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,signOut
} from "firebase/auth";

import { auth } from "../../firebase/Firebase-config";


export default function SignUp() {
  const refEmail = useRef();
  const refPass = useRef();
  const [registerEmail, setregisterEmail] = useState("");
  const [password, setPassord] = useState("");
  const [user, setUser] = useState({});
  const logOut= async()=>{ await signOut(auth)}

  const Register = async () => {
     
   
    try {
      await createUserWithEmailAndPassword(auth,registerEmail,password
      );
    } catch (err) {
      console.log(err.message);
    }
  };
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  console.log(user)
  useEffect(() => {
    setregisterEmail(refEmail.current.value);
    setPassord(refPass.current.value);
    


  },[]);
  
  return (
    <form className="form1">
      {/*<!-- Email input -->*/}
      <h1>Register</h1>
      <div className="form-outline mb-4">
        <input
          type="email"
          ref={refEmail}
          id="form2Example1"
          className="form-control"
        />

        <label className="form-label" for="form2Example1">
          Email address
        </label>
      </div>

      {/*<!-- Password input -->*/}
      <div className="form-outline mb-4">
        <input
          ref={refPass}
          type="password"
          id="form2Example2"
          className="form-control"
        />
        <label className="form-label" for="form2Example2">
          Password
        </label>
      </div>

      {/*<!-- 2 column grid layout for inline styling -->*/}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/*<!-- Checkbox -->*/}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              checked
            />
            <label className="form-check-label" for="form2Example31">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>

        <div className="col">
          {/* <!-- Simple link -->*/}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* Submit button -->*/}
      <button
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={Register}
      >
        Register
      </button>
      <button
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={logOut}
      >
        signOut
      </button>

      {/**<!-- Register buttons -->*/}
      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
        <p>or sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>
      <p>{user?.email}</p>
    </form>
  );
}
