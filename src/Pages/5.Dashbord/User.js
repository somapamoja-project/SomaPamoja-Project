import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../firebase/Firebase-config";
import { useState } from "react";
import usePng from '../../Images/usePng.png'
import "./Style.css";
import NavBar from "../1.Navbar/NavBar";
import { Link } from "react-router-dom";


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
      console.log(err.code);
      
    }
  }, []);
  
  if (user.displayName === null) {
    console.log("form");
  }
  console.log(user?.photoURL);
  return (
    <div className="UseName">
      <div className="imageUser">
      <img src='https://www.w3schools.com/images/w3schools_green.jpg'  alt='No Image'/>
      </div>
      

      

     <name className='userName' >{user?.email}</name> 
    <name className='userName'>{user?.displayName}</name> 

    <div className="container">
      <div>
      <Link to='/basicsOfComputer'>

        <img src="" alt="Loading..."/>
        Standard Course
        </Link>

      </div>
      <div>
        <Link to='/Payment'>
      <img src="" alt="Loading..."/>
      Premium Course

      </Link>

      </div>

      </div> 
    </div>
  );
}

export default User;
