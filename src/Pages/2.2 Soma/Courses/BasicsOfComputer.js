import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BasicsOfComputer() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> Basics Of Computer </h1>
      <ul>
        
        <Link to="/fundamentalofComputer"><li>Computer Fundamentals</li></Link>
        <Link to="/historyofComputer"><li>History and Generations of Computer </li></Link>
        <Link to="/PartyOfComputer"><li>Party of Computer </li></Link>
        <Link to="/ComputerVirusesAndSecurty"><li>Viruses And Security of Computer</li></Link>
        <Link to="/Difference-Between-Mac-Windows"><li>  The Difference between Windows And Macs </li></Link>
        <Link to="/Classification-Computers-Size"><li> Classification Of Computer According To Size  </li></Link>
        <Link to="/Basic-Computer-Maintenance"><li> Basic Computer Maintenance </li></Link>
        <Link to="/ComputerVirusesAndSecurty"><li> Working With Desktop</li></Link>
        <Link to="/ComputerVirusesAndSecurty"><li>Working with Windows</li></Link>
        <Link to="/ComputerVirusesAndSecurty"><li> Introduction To The Internet</li></Link>
        <Link to="/ComputerVirusesAndSecurty"><li> Disadvantages Of Using Computer </li></Link>
        <Link to="/ComputerVirusesAndSecurty"><li>General keyboard shortcuts</li></Link>

        
      </ul>
    </div>
  );
}
