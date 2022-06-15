import React from "react";
import Logo2 from "../../Images/logo4.png";
import Logo1 from "../../Images/OfficalLogo1.png";
import ExplainLogo from "../../Images/eplainOwl.gif";
import owllearningimg from '../../Images/owlLearning.png'
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <img src={Logo2} className="logo4" alt="loading..." />
      <img src={Logo1} className="officialLogo" alt="loading..." />
    </div>
  );
}

export function Explanation() {
  return (
    <div className="container1">
      <div>
        <h1 className="">
          Get your students
          <br /> coding in no time!
        </h1>
        <p>
          we are start up organization, we create this platform to improve
          education among the refugees and help kids study where they are by
          introducing them into tech world.
        </p>
      </div>
      <div>
        <img src={ExplainLogo}  alt="loading..." />
      </div>
    </div>
  );
}

export  function VideoDescription() {
  const LinkVideo="https://www.youtube.com/embed/GpXlVJcOmtI?controls=0&theme=dark&color=black"
  return (
    <div className='VideoDescription'> 
    <iframe width="960" height="515" src={LinkVideo} title="YouTube video player" frameborder="0" ></iframe>
    </div>)
}

