import React from "react";
import imageD from"../../../Images/owlteacher.png"
import { Link, useNavigate } from "react-router-dom";
import '../style.css'

export default function BasicsOfComputer() {
  const navigate = useNavigate();
  return (
    <div className="containerC">
      <h1> Basics Of Computer </h1>
     
      <ol>
      <img src={imageD} alt='loading...' />
      <div className='allCourses'>
        
        <Link to="/fundamentalofComputer" className='ListCourses'><li>Computer Fundamentals</li></Link>
        <Link to="/historyofComputer" className='ListCourses'><li>History and Generations of Computer </li></Link>
        <Link to="/PartyOfComputer" className='ListCourses'><li>Party of Computer </li></Link>
        <Link to="/ComputerVirusesAndSecurty" className='ListCourses'><li>Viruses And Security of Computer</li></Link>
        <Link to="/Difference-Between-Mac-Windows" className='ListCourses'><li>  The Difference between Windows And Macs </li></Link>
        <Link to="/Classification-Computers-Size" className='ListCourses'><li> Classification Of Computer According To Size  </li></Link>
        <Link to="/Basic-Computer-Maintenance" className='ListCourses'><li> Basic Computer Maintenance </li></Link>
        <Link to="/Working-With-DeskTop" className='ListCourses'><li> Working With Desktop</li></Link>
        <Link to="/Working-with-Windows" className='ListCourses'><li>Working with Windows</li></Link>
        <Link to="/Introduction-Internet" className='ListCourses'><li> Introduction To The Internet</li></Link>
        <Link to="/Disadvantages-Of-Using-Computer" className='ListCourses'><li> Disadvantages Of Using Computer </li></Link>
        <Link to="/Generalkeyboardshortcuts" className='ListCourses'><li>General keyboard shortcuts</li></Link>
        

        </div>
      </ol>

    </div>
  );
}
