import React from "react";
import Logo2 from "../../Images/logo4.png";
import Logo1 from "../../Images/OfficalLogo1.png";
import ExplainLogo from "../../Images/eplainOwl.gif";
import owllearningimg from '../../Images/owlLearning.png'
import image from '../../Images/code game.jpg';
import image1 from '../../Images/cartoon.webp';
import image2 from '../../Images/Logo1.png';
import image3 from '../../Images/cartoon2.webp';
import { Wave, } from "react-animated-text";
import SimpleImageSlider from "react-simple-image-slider";
import dashboard from '../../Images/dashboard11.PNG'
import { useNavigate } from "react-router-dom";
import image4 from '../../Images/Teacher.PNG' 
import'./Style.css'
import { Link } from "react-router-dom";


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
        <img src={ExplainLogo} className="ExplainLogo"  alt="loading..." />
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
export function Courses(){
  const images = [
    { url: "https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/288612840_108805771866325_183099304846223457_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=egN4K-K3NU4AX__V-qi&tn=mA5XeuC9OQa1IcEB&_nc_ht=scontent.fmba5-1.fna&oh=00_AT8V_enuMD781behf63nzbPoYiJ3RuI3uWg68wvvfqx9JQ&oe=62B0BC58" },
    { url:"https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/277797382_1907653869436579_5619949131787129103_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4WcGkJehPqUAX8eNXvC&tn=MjkGuGI4tVybOnrw&_nc_ht=scontent.fmba5-1.fna&oh=00_AT_7Tt8-Lk1GHKZMe-8Jn-DeIWbqWfqZsL6BlBXgTX7oHw&oe=62B4BD89" },
      { url: "https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/277800337_1907653989436567_770745322142359077_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6lKQhn4MG7AAX-4V8up&_nc_ht=scontent.fmba5-1.fna&oh=00_AT9pzDG6yejNqOr5QVWCXx00PrITJ9tM1YT4w-OlkB58Og&oe=62B50732"},
  { url: "https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/277812097_1907653926103240_8513118274476311862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=H9ylHMAh76sAX9egaRk&_nc_ht=scontent.fmba5-1.fna&oh=00_AT8XvvhuJHZyHOxbZZpcqgTby0h7FRuNuCzA4PHcTMEKoQ&oe=62B06E1E" },
    
  ];  
  return(
    <>
 <div className="courses">
   
 
 
  <div>
  <h1></h1>
  <div className="course13">
    <div className="imageSlider">
  <SimpleImageSlider className='imagee'
      width={500}
      height={250}
      images={images}
      showBullets={true}
      showNavs={true}
    />
    </div>
    <div className="content">
      <h3> code foundation</h3>
      <p>somapamoja offers educational resources for students of different grades and experience levels,<br/>
      Through somapamoja, kids will develop the necessary skills for the future while having fun!
      </p>
      </div>
      
      <Link to='/request'className="btn btn-warning" id="btnSignup"><button type="button" >Sign Up now </button></Link>
     


   
    </div>
  </div>
 
  
 </div>
 <div className='animateText'>
    <Wave className='header3' text="Teach kids for basics of Computer and Coding" effect="fadeOut" effectChange={0.8} />
</div>
 </>

  )
}
export function Courses1(){
  return(
    <div className="courses1">
      
        <h1 className="header10">KIDS WILL ENJOY TO LEARN COMPUTER BASICS AND CODING WITH SOMA PAMOJA </h1> <br/>
      
      
      <div className="courses11">
        <div className="content1">
      <img src={image3} className="course12"  alt="loading..." /> 
      <p>With somapamoja's teacher kit and support team,<br/> anyone can teach the basics of computer and coding</p>
      </div>
      <div className="content1" >
      <img src={image2} className="course12" alt="loading..." />
      <p>somapamoja's courses teach text-based coding <br/> so students learn to program like a real developer</p>
      
      </div>
      <div className="content1" >
      <img src={image1}className="course12"  alt="loading..." />
      <p>Kids in somapamoja will enjoy learning coding since<br/> they will be thought in a simple and understandable manner</p>
      </div>
      
      </div>
    </div>
  )
}
export function Information(){
  return(
    <div className="information">
       <div className="content2">
        
        <h1>All you need to know about Soma Pamoja</h1>
       
        <p>Equipped with student solutions, automatic grading and curriculum management,<br/>Somapamoja’s Classroom Dashboard allows you to effortlessly manage your students. </p>
        </div>
        
      <div className="content2">
     
      <img src={dashboard}  alt="loading..." />
      </div>
    </div>
  )
}




