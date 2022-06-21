import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../firebase/Firebase-config";
import { useState } from "react";
import usePng from '../../Images/usePng.png'
import "./Style.css";
import NavBar from "../1.Navbar/NavBar";


function User() {
  
  const [user, setUser] = useState({});
  var UserEmail = document.getElementById("userEmail");
  

  useEffect(() => {
    try {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          document.getElementById("Get").style.display = "none";
          document.getElementById('Logout').style.display='flex';
          document.getElementById("loginVannish").style.display='none'

          setUser(currentUser);
        } else {
          console.log("no user");
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  
  if (user.displayName === null) {
    console.log("form");
  }
  console.log(user?.photoURL);
  return (
    <div className="UseName">
      <div className="imageUser">
      <img src={usePng}  alt='No Image'/>
      </div>
      

     <name className='userName' >{user?.email}</name> 
    <name className='userName'>{user?.displayName}</name>  
    </div>
  );
}

export default User;
