import React, { useState, useRef, useEffect } from "react";
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";

import { auth } from "../../firebase/Firebase-config";
import './style.css'


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
    <form>
      {/*<!-- Email input -->*/}
      <h1>Register</h1>
      <div >
        <input
          type="email"
          ref={refEmail}
          id="form2Example1"
        
        />

        <label  for="form2Example1">
          Email address
        </label>
      </div>

      {/*<!-- Password input -->*/}
      <div >
        <input
          ref={refPass}
          type="password"
          id="form2Example2"
        
        />
        <label  for="form2Example2">
          Password
        </label>
      </div>

      {/*<!-- 2 column grid layout for inline styling -->*/}
      <div >
        <div >
          {/*<!-- Checkbox -->*/}
          <div >
            <input
            
              type="checkbox"
              value=""
              id="form2Example31"
              checked
            />
            <label  for="form2Example31">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>
      </div>

      {/* Submit button -->*/}
      <button type="button"onClick={Register}>Register</button>
      <button type="button"onClick={logOut}>signOut</button>

      {/**<!-- Register buttons -->*/}
      
      <p>{user?.email}</p>
    </form>
  );
}
