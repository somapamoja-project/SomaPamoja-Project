import React from "react";
import "./Style.css";
import Logo from "../../Images/OfficalLogo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo1 from "../../Images/Lap.png"

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <ul className="listNav">
      <li className="listNav1">
        <Link to='/'><img src={Logo} alt="loading..." /></Link>
      </li>
    
        <Link to='/' className="listNavlogo1" ><img src={logo1} alt="loading..." /></Link>
     
      <div className="listNav2">
      <li className="listNav3"><Link to='/SomaPamoja-Project' id="navName1">Home </Link></li>
      <li className="listNav3"><Link to='/welcome'id="navName2">Soma</Link></li>
      <li className="listNav3"><Link to='/'id="navName3">About</Link></li>
      <li className="listNav3"><Link to='/'id="navName4">Contact</Link></li>
      </div>
      </ul>
    </div>
  );
}
