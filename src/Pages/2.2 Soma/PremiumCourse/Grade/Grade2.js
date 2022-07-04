import React, { useState } from "react";
import class1 from "../../../../Images/class2.png";
import "./Style.css";
import shukri from "../../../../Images/shukri.png";
import { Link } from "react-router-dom";
import {ThemeCourses} from "../ThemeOfCourses/ThemeCourse";
export default function Grade2() {
  const [WeekTopic, SetWeekTopic] = useState({
    WeekNumber: "Week 1",
    Topic: "Introdution to Blockly",
    course1: "Puzzle",
    course2: "Maze",
  });

  function TopicTwoProgramme() {
    SetWeekTopic({
      WeekNumber: "Week 2",
      Topic: "Define coding",
      course1: "Introduction",
      course2: "Tools for Coding ",
    });
  }
  function TopicThreeProgramme(){
    SetWeekTopic({
      WeekNumber: "Week 3",
      Topic: "Talk about coding language",
      course1: "Python",
      course2: "Ruby",
    });
  }
  function TopicFourProgramme(){
    SetWeekTopic({
      WeekNumber: "Week 4",
      Topic: "Interest kids to code",
      course1: "Why Coding is important",
      course2: "Coders are in high demand",
    });
  }
  function TopicFiveProgramme(){
    SetWeekTopic({
      WeekNumber: "Week 5",
      Topic: "Ease kids into coding",
      course1: "How to have fun in coding",
      course2: "Simple way to code",
    });
  }



  return (
    <div className="container" id="Gradeprogram">
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
            header="Intermediate level in Blockly"
            course1="Bird"
            course2="Turtle"
            link1='/Link3'
            link2='/Link4'
            link3=''
          />
        </div>
      </div>

      <div className="TopicGrade1">
        <h1>Topics to be covered in Grade 2</h1>
        <p>Grade 2 is 5 Weeks of Coding , One topic per Week</p>
        <ol>
          <button
            onClick={() => {
              return SetWeekTopic({
                WeekNumber: "Week 1",
                Topic: "Introdution to Blockly",
                course1: "Puzzle",
                course2: "Maze",
              });
            }}
            id="weekButton"
          >
            <li>Week 1.Intermediate in Blockly</li>
          </button>
          <br />
          <button onClick={TopicTwoProgramme} id="weekButton">
            <li> Week 2.Define coding</li>
          </button>
          <br />
          <button onClick={TopicThreeProgramme} id="weekButton">
            <li>Week 3.Talk about coding languages</li>
          </button>{" "}
          <br />
          <button onClick={TopicFourProgramme} id="weekButton">
            <li>Week 4.Interest kids in learning coding</li>
          </button>
          <br />
          <button onClick={TopicFiveProgramme} id="weekButton">
            {" "}
            <li>Week 5.Ease kids into coding</li>
          </button>
          <br />
        </ol>
      </div>
    </div>
  );
}
