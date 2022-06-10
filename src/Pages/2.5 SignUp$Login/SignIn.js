import React from "react";
import "./style.css";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/Firebase-config";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const [user,setUser]=useState({})
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassord(e.target.value);
  };

  const Login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <form className="form1">
      <h1>Log In</h1>
      {/*<!-- Email input -->*/}
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
          className="form-control"
          onChange={handleChangeEmail}
        />
        <label className="form-label" for="form2Example1">
          Email address
        </label>
      </div>

      {/*<!-- Password input -->*/}
      <div className="form-outline mb-4">
        <input
          type="password"
          id="form2Example2"
          className="form-control"
          onChange={handleChangePassword}
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
        onClick={Login}
      >
        Sign in
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
