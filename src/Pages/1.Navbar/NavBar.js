import React from "react";
import "./Style.css";
import Logo from "../../Images/OfficalLogo.png";
import Logo1 from "../../Images/lap1.png";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <ul className="listNav">
      <li className="listNav1">
        <Link to='/SomaPamoja-Project' className="listNav11" ><img src={Logo} alt="loading..." /></Link>
        <Link to='/SomaPamoja-Project' className="listNav12" ><img src={ Logo1} alt="loading..." /></Link>
      </li>
     
     
      <div className="listNav2">
      <li className="listNav3"><Link to='/SomaPamoja-Project' id="navName1">Home </Link></li>
      <li className="listNav3"><Link to='/welcome'id="navName2">Soma</Link></li>
      <li className="listNav3"><Link to='/about'id="navName3">About</Link></li>
      <li className="listNav3"><Link to='/Contact'id="navName4">Contact</Link></li>
      </div>
      </ul>
    </div>
  );
}
