import "./Style.css";
import React from "react";
import { Header, Explanation,VideoDescription,Courses, Courses1,  imageSlide,Information } from "./HomeComponents";
import { Link } from "react-router-dom";
import {OfferPrograms} from '../5.Dashbord/User'

export default function Home() {
  return (
    <div>
      <Header />
      <Explanation />
      <VideoDescription/>
      <div className="Ourprogram">
      <OfferPrograms linkto1='/request' linkto2='/request'  />
      </div>
      <div className="CourseExplanaition">
      <Courses/>
      </div>
      <Courses1/>
      <Information/>
    </div>
  );
}
