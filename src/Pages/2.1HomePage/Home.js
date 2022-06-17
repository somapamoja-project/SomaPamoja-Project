import "./Style.css";
import React from "react";
import { Header, Explanation,VideoDescription,Courses, Courses1,  imageSlide,Information } from "./HomeComponents";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header />
      <Explanation />
      <VideoDescription/>
      <Courses/>
      <Courses1/>
      <Information/>
    </div>
  );
}
