import React from "react";
import class1 from "../../../../Images/class4.png";
import "./Style.css";
import Loting from "../../../../Images/Loting.png";
import { Link } from "react-router-dom";
import {ThemeCourses} from "../ThemeOfCourses/ThemeCourse";
export default function Grade4() {
  return (
    <div className="container">
      <h1 className="HeaderGrade">
        {""}
        <img src={class1} alt="loading..." />
      </h1>
      <div>
        <div className="TeacheGrade1">
          <img src={Loting} alt="loading..." />
          <p>
            Get in touch with{"   Teacher"}
            <h1>
              <span>Loting Nythio Lokiru</span>
            </h1>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            lotylobalu12@gmail.com
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
            header="Master in  Blockly"
            course1="Pond Tutor"
            course2="Pond"
            link1='/Link7'
            link2='/Link8'
            link3=''
          />
        </div>
      </div>
    </div>
  );
}
