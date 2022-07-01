import React from "react";
import Logo2 from "../../Images/logo4.png";
import Logo1 from "../../Images/OfficalLogo1.png";
import ExplainLogo from "../../Images/eplainOwl.gif";
import owllearningimg from "../../Images/owlLearning.png";
import image from "../../Images/code game.jpg";
import image1 from "../../Images/cartoon.webp";
import image2 from "../../Images/Logo1.png";
import image3 from "../../Images/cartoon2.webp";
import { Wave } from "react-animated-text";
import SimpleImageSlider from "react-simple-image-slider";
import dashboard from "../../Images/dashboard11.PNG";
import { useNavigate } from "react-router-dom";
import image4 from "../../Images/Teacher.PNG";
import "./Style.css";
import { Link } from "react-router-dom";
import Application1 from "../../Images/Application1.jpg";
import coming5252 from "../../Images/coming5252.gif";
import UssdImg from "../../Images/Ussd.jpg";
import ExpoQR from '../../Images/ExpoQR.jpg'

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
          <br /> learning in no time!
        </h1>
        <p>
          we are start up organization, we create this platform to improve
          education among the refugees and help kids study where they are by
          introducing them into tech world.
        </p>
      </div>
      <div>
        <img src={ExplainLogo} className="ExplainLogo" alt="loading..." />
      </div>
    </div>
  );
}

export function VideoDescription() {
  const LinkVideo =
    "https://www.youtube.com/embed/GpXlVJcOmtI?controls=0&theme=dark&color=black";
  return (
    <div className="VideoDescription">
      <iframe
        width="960"
        height="515"
        src={LinkVideo}
        title="YouTube video player"
        frameborder="0"
      ></iframe>
    </div>
  );
}
export function Courses() {
  const images = [
    {
      url: "https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/288612840_108805771866325_183099304846223457_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGYm-3Lv21Qq2puFzAWh1EqCxHaN5YUf5wLEdo3lhR_nH3QYObxZvbLdm0l2Ytf1yDSjHFExBxVfNaCGcQWY4z8&_nc_ohc=s88dBtTO5FgAX90rE1t&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fmba5-1.fna&oh=00_AT9sdpANCohktoSpeR5g5-sdXmZYCgUt_j7cTpidEfYSew&oe=62C482D8",
    },
    {
      url: "https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/277797382_1907653869436579_5619949131787129103_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4WcGkJehPqUAX8eNXvC&tn=MjkGuGI4tVybOnrw&_nc_ht=scontent.fmba5-1.fna&oh=00_AT_7Tt8-Lk1GHKZMe-8Jn-DeIWbqWfqZsL6BlBXgTX7oHw&oe=62B4BD89",
    },
    {
      url: "https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/288021717_108813345198901_4070986216158250717_n.png?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeGyND_MPGIvAoIf5vgDxRDD-CKGhuQ691j4IoaG5Dr3WD00VDKecX6pGqvbclHLLnLxG0nto-Z5ij98GaWiDGw3&_nc_ohc=mzbsVRxWCmIAX9GePz2&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fmba5-1.fna&oh=00_AT_f5vfzFkzbYzvFEuED0uL87fOtfQ8SS0jpp2PSnfj1TQ&oe=62C3D23A",
    },
    {
      url: "https://somapamoja2.azurewebsites.net/static/media/payblecourses1.5726e53f8cdd4aa7ff9a.JPG",
    },
  ];
  return (
    <>
      <div className="courses">
        <div>
          <h1></h1>
          <div className="course13">
            <div className="imageSlider">
              <SimpleImageSlider
                className="imagee"
                width={500}
                height={250}
                images={images}
                showBullets={true}
                showNavs={true}
              />
            </div>
            <div className="content">
              <h3> code foundation</h3>
              <p>
                somapamoja offers educational resources for students of
                different grades and experience levels,
                <br />
                Through somapamoja, kids will develop the necessary skills for
                the future while having fun!
              </p>
            </div>

            <Link to="/request" className="btn btn-warning" id="btnSignup">
              <button type="button">Sign Up now </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="animateText">
        <Wave
          className="header3"
          text="Teach kids for basics of Computer and Coding"
          effect="fadeOut"
          effectChange={0.8}
        />
      </div>
    </>
  );
}
export function Courses1() {
  return (
    <div className="courses1">
      <h1 className="header10">
        KIDS WILL ENJOY TO LEARN COMPUTER BASICS AND CODING WITH SOMA PAMOJA{" "}
      </h1>{" "}
      <br />
      <div className="courses11">
        <div className="content1">
          <img src={image3} className="course12" alt="loading..." />
          <p>
            With somapamoja's teacher kit and support team,
            <br /> anyone can teach the basics of computer and coding
          </p>
        </div>
        <div className="content1">
          <img src={image2} className="course12" alt="loading..." />
          <p>
            somapamoja's courses teach text-based coding <br /> so students
            learn to program like a real developer
          </p>
        </div>
        <div className="content1">
          <img src={image1} className="course12" alt="loading..." />
          <p>
            Kids in somapamoja will enjoy learning coding since
            <br /> they will be thought in a simple and understandable manner
          </p>
        </div>
      </div>
    </div>
  );
}
export function Information() {
  return (
    <div className="information">
      <div className="content2">
        <h1>All you need to know about Soma Pamoja</h1>

        <p>
          Equipped with student solutions, automatic grading and curriculum
          management,
          <br />
          Somapamoja’s Classroom Dashboard allows you to effortlessly manage
          your students.{" "}
        </p>
      </div>

      <div className="content2">
        <img src={dashboard} alt="loading..." />
      </div>
    </div>
  );
}
export function Application() {
  const navigation3 = useNavigate();
  return (
    <div className="container" id="application">
      <h2>Our Mobile App </h2>
      <img src={Application1} alt="loading..." />

      <button 
        onClick={() => {
          return navigation3("/Under-Development");
        }}
      >
        For More
      </button>
      <Ussd/>
    </div>
  );
}
export function Ussd() {
  const navigation3 = useNavigate();
  return (
    <div className="container" id="Ussd">
      <h2>Offline Program</h2>
      <img src={UssdImg} alt="loading..." />
      <button
        onClick={() => {
          return navigation3("/Under-Development2");
        }}
      >
        For More
      </button>
    </div>
  );
}
export function More({ExpoPage}) {
  const navigate4=useNavigate()
  return (
    
    <div className="container" id="imgdevelopment">
       
      <img src={coming5252} alt="loading.." />
 <button className="btn btn-dark" id="Expo" style={{position:'absolute',marginLeft:'25%'}} onClick={()=>{return navigate4('/Expo')}}>{ExpoPage}</button>
    
    
    </div>
  );
}
export function Expo(){
  return(
    <div className="Container">
      <div className="Expo">
      <a href="https://play.google.com/store/search?q=expo&c=apps" style={{marginLeft:'35%',fontSize:'30px'}} target="_blank">Download Expo on PlayStore here</a>
      <img src={ExpoQR} alt='loading...'/>
     
      </div>
    </div>
  )
}
