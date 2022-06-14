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
      </ul>
    </div>
  );
}
