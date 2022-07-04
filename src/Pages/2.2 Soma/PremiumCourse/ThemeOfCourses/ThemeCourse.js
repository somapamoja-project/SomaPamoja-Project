import React from "react";
import { Link } from "react-router-dom";
import '../style.css'

export  function ThemeCourses({header,course1,course2,course3,link1,link2,link3,WeekNumber}) {
  return (
    <div>
      <h3>{WeekNumber}</h3>
      <h1 style={{color:'grey'}}><q>{header}</q></h1>
      <ul>
        <h4>Begin Without a teacher, Click below: </h4>
        <h4><Link to={link1}><li>{course1}</li></Link></h4>
        <h4><Link to={link2}><li>{course2}</li></Link></h4>
        <h4><Link to={link3}><li>{course3}</li></Link></h4>
      </ul>

    </div>
  );
}
export function Link1({header,youtubelink,Blockly1,APIBlockly}){
 const LinkVideo= youtubelink
  return(
    <div>
    <div  className='containerFC'>
      <h1>{header}</h1>
      <div className='QCF6'> 
    <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" ></iframe>
    <button  class="btn btn-success"  id="btn-success">Start a Quiz</button>
    

    </div>


    </div>
   
    <div className='Typing'>
        <a class="btn btn-primary" id='pratice' href={APIBlockly} target="iframe_a">Start Your Practice in {Blockly1}</a>
        <iframe href="https://www.doorwayonline.org.uk/activities/text-type3/text-type.html" name="iframe_a" height="600px" width="100%" title="Iframe Example"/>
    </div>
    </div>
  )

}
