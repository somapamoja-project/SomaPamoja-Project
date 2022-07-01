import React from "react";
import './Style.css'
import image5 from '../../Images/image5.jpg'; // gives image path
import kibeho from '../../Images/kibeho.png'; // gives image path
import Teacher from '../../Images/Teacher.jpg'; // gives image path
import loty from '../../Images/loty.png'; // gives image path
import elie from '../../Images/elie.jpg'; // gives image path





function About() {
  return (
    <div className="container">
    
     <img src={image5} className="responsive" alt="Nature" width='600' height='500' />
     <h3 className='p'>
      <h2 className="header">
        ABOUT US<br/>
        Write Code and Save The World.
      </h2>
      We are a team of experts in technology, gaming and pedagogy who<br/> together solve the equation of learning to code.<br/>
     </h3>

     <h2>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
    <img src={kibeho} className="kibeho" alt="Nature" width='100%' height='300px' />
      <div class="drum">
        <h5>Dessai Kibeho</h5>
        <p class="title">CEO & Founder</p>
        <p>Experience in Firebase, UI and React js.</p>
        <p>dessai@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
      </div>
      </div>


  <div class="column">
    <div class="card">
    <img src={Teacher} className="shukri" alt="Nature" width='100%' height='300px' />
      <div class="drum">
        <h5>Fatma Shukri</h5>
        <p class="title">Operation officer</p>
        <p>experience in design and operations.</p>
        <p>shukri@gmail.com</p>
        <p><button class="button">Contact</button></p>
      
      </div>
      </div>

      
  <div class="column">
    <div class="card">
    <img src={elie} className="elie" alt="Nature" width='100%' height='200px' /> 
      <div class="drum">
        <h5>Elie Migisha Bavon</h5>
        <p class="title">Technology officer</p>
        <p>His a very experience in Program cordination.</p>
        <p>eliemigisha5@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
      </div>
      </div> 

     
  {/* <div class="column">
    <div class="card">
    <img src={Teacher} className="shukri" alt="Nature" width='100%' height='200px' />
      <div class="drum">
        <h5>Fatma Shukri</h5>
        <p class="title">Financial Officer</p>
        <p>His a very experience in finance.</p>
        <p>shukri@gmail.com</p>
        <p><button class="button">Contact</button></p>
      
      </div>
      </div>  */}
    
  
     <p className="para">
     <h2>OUR STORIES</h2><br/>
           Think for a while about your kids and imagine about there future where you need them to be and to become
           in the next 5,15 or 25 years, what future are you preparing them to become in their daily life.
           kids need a very good foundation in education, a scenario from where they can have a beneficial outcome for their families,
           friends and network.<br/><br/>

           Children are our future how we bring them up deserves a lot of responsibilities and creating
           best opportunities for our kids to fit-in in our community and in this current technological world.<br/><br/>
           In the kenya refugee camps not all parents are in position to help their kids in schoolwork but they would always strive
           and struggle and have strong desire for our children to get a superior education than we had.<br/><br/>


           Thats why we decided to develop educational apps help children learn and revise for there exams
           
           
           
             

              we offer interactive, challenging and interesting educational content full of fun game and animations to keep your child learning coding.
              the content focuses on competency-based curriculum aiming at building competence such as:<br/>
              <h4>
              1.Basics of computer<br/>
              2.Typing and Keyboarding<br/>
              3.Emailing<br/>
              4.Going online Safely<br/>

              </h4>
              
              Its never too early to start nurturing your kid's skills in numeracy
              especially when it comes with so much fun and ease.<br/> <br/> <br/> 
              <h2>OUR MISSION</h2><br/>
              
              We envision a global playful learning experience where the next generations of coders are born and raised.
We aim to create an engaging platform where programming knowledge is acquired alongside 21st century skills through collaboratively playing and solving puzzles, inventing, creating and sharing.
              
             </p>
             
             </div>
             </div>
             {/* </div>  */}
             {/* </div> */}
    </div>
  );
}

export default About;
