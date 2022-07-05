import "./Style.css";
import React from "react";
import { Header, Explanation,VideoDescription,Courses, Courses1,  imageSlide,Information, Application, GamingSpace } from "./HomeComponents";
import { Link } from "react-router-dom";
import {OfferPrograms} from '../5.Dashbord/User'
import ListeOfCourses from '../2.2 Soma/Courses/ListeOfCourses'

export default function Home() {
  return (
    <div>
      <Header />
      <Explanation />
      <VideoDescription/>
      <div className="application">
      <Application/>
      </div>
     
      <div className="Ourprogram" id="OurProgram1">
      
      <OfferPrograms linkto1='/request' linkto2='/request'  />
      
      </div>
      <div className="CourseExplanaition">
      <ListeOfCourses/>
      
      <Courses/>
      
      </div>
     
      <Courses1/>
      
      <Information/><br/>
      <GamingSpace/>
    </div>
  );
}
