import React from "react";
import "./Style.css";
import Logo from "../../Images/OfficalLogo.png";
import Logo1 from "../../Images/lap1.png";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase-config";
import User from "../5.Dashbord/User";



export default function NavBar({HomeName,logeOut,LinkHomeorDashboard}) {

  

  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <ul className="listNav">
        <li className="listNav1">
          <Link to="/SomaPamoja-Project" className="listNav11">
            <img src={Logo} alt="loading..." />
          </Link>
          <Link to="/SomaPamoja-Project" className="listNav12">
            <img src={Logo1} alt="loading..." />
          </Link>
        </li>

        <div className="listNav2">
          <li className="listNav3">
            <Link to={LinkHomeorDashboard} id="navName1">
              {HomeName}
            </Link>
          </li>
          <li className="listNav3">
            <Link to="/welcome" id="navName2">
              Soma
            </Link>
          </li>
         
          <li className="listNav3">
            <Link to="/about" id="navName3">
              About
            </Link>
          </li>
          <li className="listNav3">
            <Link to="/Contact" id="navName4">
              Contact
            </Link>
          </li>
          <li className="listNav3">
            <Link to="/Gaming-Space" id="navName2">
              Gaming
            </Link>
          </li>
          
          <li className="listNav3" id="loginVannish" >
            <Link to="/SigningIn" id="navName4">
             Login 
            </Link>
          </li>
          <li className="listNav3" id="Logout" >
            <Link to="/" id="navName4">
             <button onClick={logeOut}>Logout</button>  
            </Link>
          </li>
          
          <li className="listNav3">
            <Link to="/request" id="navName4" >
             <button className="btn btn-primary" id="Get"> Get Started</button>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
