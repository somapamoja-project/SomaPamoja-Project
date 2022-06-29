import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../firebase/Firebase-config";
import { useState } from "react";
import usePng from "../../Images/usePng.png";
import "./Style.css";
import NavBar from "../1.Navbar/NavBar";
import { Link } from "react-router-dom";
import sponsorImg from "../../Images/spocourses1.JPG";
import payableImg from "../../Images/payblecourses1.JPG";
import freeCourseImg from "../../Images/freecourses1.JPG";

export function User() {
  const[data,setData]=useState()



  useEffect(() => {
    try {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setData(currentUser)
        } else {

          console.log("no user");
        }
      });
    } catch (err) {
      console.log(err.code);
    }
  }, []);


  
 
  return (
    <div className="UseName" id='imageIcon'>
   
      
      
      <OfferPrograms linkto1="/Payment" linkto2="/Welcome-To-Sponsor-Platform" />
      
    </div>
  );
}
export function OfferPrograms({ linkto1, linkto2 }) {
  return (
    <div className=" container">
      <h2 id="programs">Our Programs </h2>
      <div className="OfferPrograms">
        <div>
          <Link to="/FreeCourses" className="img">
            <img src={freeCourseImg} alt="loadingg..." />
          </Link>
        </div>
        <div>
          <Link to={linkto1} className="img">
            {" "}
            <img src={payableImg} alt="loadingg..." />
          </Link>
        </div>
        <div>
          <Link to={linkto2} className="img">
            <img src={sponsorImg} alt="loadingg..." />
          </Link>
        </div>
      </div>
    </div>
  );
}
