import React from "react";
import { Link ,useNavigate} from "react-router-dom";

export default function BasicsOfComputer() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> Basics Of Computer </h1>
      <ul>
       <button onClick={()=>{navigate("/request")}}> <li>Computer Fundamentals</li></button>
        <Link to="/histoireofComputer"><li>History of Computers</li></Link>
      </ul>
    </div>
  );
}
