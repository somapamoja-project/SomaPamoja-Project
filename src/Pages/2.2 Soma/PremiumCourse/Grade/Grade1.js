import React from "react";
import class1 from "../../../../Images/class1.png";
import "./Style.css";
import dessaikibeho from "../../../../Images/DessaiKibeho.png";
import { Link } from "react-router-dom";
import {ThemeCourses} from "../ThemeOfCourses/ThemeCourse";
export default function Grade1() {
  return (
    <div className="container">
      <h1 className="HeaderGrade">
        {""}
        <img src={class1} alt="loading..." />
      </h1>
      <div>
        <div className="TeacheGrade1">
          <img src={dessaikibeho} alt="loading..." />
          <p>
            Get in touch with{"   Teacher"}
            <h1>
              <span>Dessai Kibeho</span>
            </h1>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              Dessaikibeho@gmail.com
            </a>
            <span>
              <numero>,+254757596782</numero>
            </span>{" "}
          </p>
          <p>
            {" "}
            Have an online Session every :
            <h5>
              Monday: at 9h00am on this{" "}
              <a href="https://meet.google.com/jcq-muhr-psi">Link</a>
            </h5>
            <h5>
              Tuesday: at 9h00am on this{" "}
              <a href="https://meet.google.com/jcq-muhr-psi">Link</a>
            </h5>
          </p>
        </div>

        <div className="ThemeCourse">
          <h3>Theme of the week:</h3>
          <ThemeCourses
            header="Introdution to Blockly"
            course1="Puzzle"
            course2="Maze"
            link1='/Link1'
            link2='/Link2'
            link3=''
          />
        </div>
      </div>
    </div>
  );
}
