import React from "react";
import './Style.css'
import image5 from '../../Images/image5.jpg'; // gives image path
import somacomp1 from '../../Images/somacomp1.jpg'; // gives image path


function About() {
  return (
    <>
     <p>
           Think for a while about your kids and imagine about there future where you need them to be and to become<br/>
           in the next 5,15 or 25 years, what future are you preparing them to become in their daily life.
           kids need a very good foundation in education, a scenario from where they can have a beneficial outcome for their families,
           friends and network.<br/>

           Children are our future how we bring them up deserves a lot of responsibilities and creating
           best opportunities for our kids to fit-in in our community and in this current technological world.<br/>
           in the kenya refugee camps not all parents are in position to help their kids in schoolwork but they would always strive
           and struggle and have strong desire for our children to get a superior education than we had.<br/>


           Thats why we decided to develop educational apps help children learn and revise for there exams
           </p>
           
           <img src={image5} className="image5" alt="loading..." />
             <p>
              we offer interactive, challenging and interesting educational content full of fun game and animations to keep your child learning coding.
              the content focuses on competency-based curriculum aiming at building competence such as:
              
              1.Basics of computer
              2.Typing and Keyboarding
              3.Emailing
              4.Going online Safely

              Its never too early to start nurturing your kid's skills in numeracy<br/>
              especially when it comes with so much fun and ease. 
             </p>
             <img src={somacomp1} className="somacomp1" alt="loading..." />
        
    
    </>
  );
}

export default About;
