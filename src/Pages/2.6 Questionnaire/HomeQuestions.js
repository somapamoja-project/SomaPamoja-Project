import React from "react";
import TestImage from "../../Images/TestImage.jpg";
import{useNavigate} from "react-router-dom" ;
import "./style.css"
import owlattack from '../../Images/owl-attack.gif'



export default function HomeQuestions({header,Click,GoTo}) {
    const navigate=useNavigate()

function unDisplay(){
const noDisplay=document.getElementById('Display10sec')
noDisplay.style.display='none'
}
setTimeout(unDisplay,1500)

  return (

    <div className="container">
      <div className="container xl">
        <h1 className="QHheader">{header}</h1>
        <img id="Display10sec" src={owlattack} alt='Loading...'/> 
        <img  id="Diplay5sec" src={ TestImage} alt='Loading...' />
      </div>
      <button className="btn btn-success" onClick={()=>{navigate(`${GoTo}`)}}> {Click}</button>
    </div>
  );
}




