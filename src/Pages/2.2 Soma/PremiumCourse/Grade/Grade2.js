import React from "react";
import class1 from "../../../../Images/class2.png";
import "./Style.css";
import shukri from "../../../../Images/shukri.png";
import { Link } from "react-router-dom";
import {ThemeCourses} from "../ThemeOfCourses/ThemeCourse";
export default function Grade2() {
  return (
    <div className="container">
      <h1 className="HeaderGrade">
        {""}
        <img src={class1} alt="loading..." />
      </h1>
      <div>
        <div className="TeacheGrade1">
          <img src={shukri} alt="loading..." />
          <p>
            Get in touch with{"   Teacher"}
            <h1>
              <span>Shukri Ibrahim</span>
            </h1>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            mohamedfatmaibrahim@gmail.com
            </a>
            <span>
              <numero>,+254746165494</numero>
            </span>{" "}
          </p>
          <p>
            {" "}
            Have an online Session every :
            <h5>
              Wednesday: at 9h00am on this{" "}
              <a href="https://meet.google.com/jcq-muhr-psi">Link</a>
            </h5>
            <h5>
              Thursday: at 9h00am on this{" "}
              <a href="https://meet.google.com/jcq-muhr-psi">Link</a>
            </h5>
          </p>
        </div>

        <div className="ThemeCourse">
          <h3>Theme of the week:</h3>
          <ThemeCourses
            header="Intermediate level in  Blockly"
            course1="Bird"
            course2="Turtle"
            link1='/Link3'
            link2='/Link4'
            link3=''
          />
        </div>
      </div>
    </div>
  );
}
