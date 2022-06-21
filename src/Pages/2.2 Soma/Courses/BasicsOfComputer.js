import React from "react";
import imageD from"../../../Images/owlteacher.png"
import { Link, useNavigate } from "react-router-dom";
import '../style.css'

export default function BasicsOfComputer() {
  const LinkVideo="https://www.youtube.com/embed/pLnN3ooJcqw"
  const LinkVideo1="https://www.youtube.com/embed/G19ldX05Gb4?theme=dark&color=black"
  const LinkVideo2="https://www.youtube.com/embed/3VNm3HGTuHY"
  const LinkVideo3="https://www.youtube.com/embed/Ip-u5NZJiwY?theme=dark&color=black"
  const LinkVideo4="https://www.youtube.com/embed/UC1MmZA5I38?theme=dark&color=black"
  const LinkVideo5="https://www.youtube.com/embed/vvrdgwDnMQA?theme=dark&color=black"
  const LinkVideo6="https://www.youtube.com/embed/9aFVjvCJcbk?theme=dark&color=black"
  const LinkVideo7="https://www.youtube.com/embed/x-fM8kBKBW0"
  const LinkVideo8="https://www.youtube.com/embed/8d9FY3LpR4E"
  const LinkVideo9="https://www.youtube.com/embed/UXsomnDkntI?theme=dark&color=black"
  const LinkVideo10="https://www.youtube.com/embed/puuW-8X0NTE?theme=dark&color=black"
  const LinkVideo11="https://www.youtube.com/embed/y7m7zJgtwcI?theme=dark&color=black"
  const navigate = useNavigate();
  return (
    <div className="containerC">
      <h1> Basics Of Computer </h1>
     
      <ol>
      <img src={imageD} alt='loading...' />
      <div className='allCourses'>
        <Link to="/fundamentalofComputer" className='ListCourses'><li>Computer Fundamentals</li><iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Link>
   
        <Link to="/historyofComputer" className='ListCourses'><li>History and Generations of Computer </li> <iframe width="760" height="415" src={LinkVideo1} title="YouTube video player" frameborder="0" ></iframe></Link>
        
        <Link to="/PartiesOfComputer" className='ListCourses'><li>Parties of Computer </li><iframe width="760" height="415" src={LinkVideo2} title="YouTube video player" frameborder="0" ></iframe></Link>
        <Link to="/ComputerVirusesAndSecurty" className='ListCourses'><li>Viruses And Security of Computer</li> <iframe width="760" height="415" src={LinkVideo3} title="YouTube video player" frameborder="0" ></iframe></Link>
        <Link to="/Difference-Between-Mac-Windows" className='ListCourses'><li>  The Difference between Windows And Macs </li> <iframe width="760" height="415" src={LinkVideo4} title="YouTube video player" frameborder="0" ></iframe></Link>
        <Link to="/Classification-Computers-Size" className='ListCourses'><li> Classification Of Computer According To Size  </li> <iframe width="760" height="415" src={LinkVideo5} title="YouTube video player" frameborder="0" ></iframe></Link>
        <Link to="/Basic-Computer-Maintenance" className='ListCourses'><li> Basic Computer Maintenance </li><iframe width="760" height="415" src={LinkVideo6} title="YouTube video player" frameborder="0" ></iframe></Link>
        <Link to="/Working-With-DeskTop" className='ListCourses'><li> Working With Desktop</li> <iframe width="760" height="415" src={LinkVideo7} title="YouTube video player" frameborder="0" ></iframe></Link>
        <Link to="/Working-with-Windows" className='ListCourses'><li>Working with Windows</li><iframe width="760" height="415" src={LinkVideo8} title="YouTube video player" frameborder="0" ></iframe></Link>
        <Link to="/Introduction-Internet" className='ListCourses'><li> Introduction To The Internet</li> <iframe width="760" height="415" src={LinkVideo9} title="YouTube video player" frameborder="0" ></iframe></Link>
        <Link to="/Disadvantages-Of-Using-Computer" className='ListCourses'><li>Adanvantage and disadvantages Of Using Computer </li><iframe width="760" height="415" src={LinkVideo10} title="YouTube video player" frameborder="0" ></iframe></Link>
        <Link to="/Generalkeyboardshortcuts" className='ListCourses'><li>General keyboard shortcuts</li> <iframe width="760" height="415" src={LinkVideo11} title="YouTube video player" frameborder="0" ></iframe></Link>
        

        </div>
      </ol>

    </div>
  );
}
