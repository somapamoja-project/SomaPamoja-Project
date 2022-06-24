import React from "react";
import class1 from "../../../../Images/class3.png";
import "./Style.css";
import Elie from "../../../../Images/ElieBavon.png";
import { Link } from "react-router-dom";
import {ThemeCourses} from "../ThemeOfCourses/ThemeCourse";
export default function Grade3() {
  return (
    <div className="container">
      <h1 className="HeaderGrade">
        {""}
        <img src={class1} alt="loading..." />
      </h1>
      <div>
        <div className="TeacheGrade1">
          <img src={Elie} alt="loading..." />
          <p>
            Get in touch with{"   Teacher"}
            <h1>
              <span>Elie Bavon</span>
            </h1>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            eliemigisha5@gmail.com
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
            header="Advanced in  Blockly"
            course1="Movie"
            course2="Music"
            link1='/Link5'
            link2='/Link6'
            link3=''
          />
        </div>
      </div>
    </div>
  );
}
