import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../2.1HomePage/Home";
import WelcomePage from "../2.2 Soma/WelcomePage";
import NavBar from "../1.Navbar/NavBar";
import Request from "../2.2 Soma/Request";
import ListeOfCourses from "../2.2 Soma/Courses/ListeOfCourses";
import ComputerFundamentals from "../2.2 Soma/Courses/Basics of computer/ComputerFundamentals";
import BasicsOfComputer from "../2.2 Soma/Courses/BasicsOfComputer";
import HistoryofComputer from "../2.2 Soma/Courses/Basics of computer/HistoryofComputer";
import About from "../2.3About/About";
import Contact from "../2.4Contact/Contact";
import PartyOfComputer from "../2.2 Soma/Courses/Basics of computer/PartyOfComputer";
import ComputerVirusesAndSecurty from "../2.2 Soma/Courses/Basics of computer/ComputerVirusesAndSecurty";
import DiffenceBWM from "../2.2 Soma/Courses/Basics of computer/DiffenceBWM";
import ClassificationSize from "../2.2 Soma/Courses/Basics of computer/ClassificationSize";
import BasicComputerMaintenance from "../2.2 Soma/Courses/Basics of computer/BasicComputerMaintenance";
import WorkingWithDeskTop from "../2.2 Soma/Courses/Basics of computer/WorkingWithDeskTop";
import WorkingWindows from "../2.2 Soma/Courses/Basics of computer/WorkingWindows";
import IntroductionInternet from "../2.2 Soma/Courses/Basics of computer/IntroductionInternet";
import DisadvantagesOfUsingComputer from "../2.2 Soma/Courses/Basics of computer/DisadvantagesOfUsingComputer";
import Generalkeyboardshortcuts from "../2.2 Soma/Courses/Basics of computer/Generalkeyboardshortcuts";
import Q1ComputerFundamentals from "../2.6 Questionnaire/Question In Basics of Computers/Q1ComputerFundamentals";
import HomeQuestions from "../2.6 Questionnaire/HomeQuestions";
import FooterContainer from "../3.Footer/containers/footer";
import TypingKeyBoard from "../2.2 Soma/Courses/TypingKeyBoard";
import TypingPratice from "../2.2 Soma/Courses/TypingPratice/TypingPratice";
import CreateEmailing from "../2.2 Soma/Courses/CreateEmailing";
import CreateEmail from "../2.2 Soma/Courses/Create your ancount/CreateEmail";
import GoingOnlineSafely from "../2.2 Soma/Courses/GoingOnlineSafely";
import SigningUp from "../2.5 SignUp$Login/SigningUp.js";
import FormPage from "../2.5 SignUp$Login/FormPage";
import User from "../5.Dashbord/User";
import SigningIn from "../2.5 SignUp$Login/LogIn";
import Payment from "../5.Dashbord/Payment";
import ListOfCourses from "../2.2 Soma/PremiumCourse/ListOfGrades";
import Practice from "../2.2 Soma/PremiumCourse/Practice/Practice";
import Grade1 from "../2.2 Soma/PremiumCourse/Grade/Grade1";
import Grade2 from "../2.2 Soma/PremiumCourse/Grade/Grade2";
import Grade3 from "../2.2 Soma/PremiumCourse/Grade/Grade3";
import Grade4 from "../2.2 Soma/PremiumCourse/Grade/Grade4";
import {
  ThemeCourses,
  Link1,
} from "../2.2 Soma/PremiumCourse/ThemeOfCourses/ThemeCourse";
import Mpesa from '../5.Dashbord/Payment/Mpesa'
import PayPal from '../5.Dashbord/Payment/Paypal'

export default function RouterAllPages() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", color: "red" }}>
              {" "}
              <p>ERROR PAGE</p>
            </main>
          }
        />
        <Route path="" element={<Home />} />
        <Route path="/SomaPamoja-Project" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/FreeCourses" element={<ListeOfCourses />} />
        <Route
          path="/fundamentalofComputer"
          element={<ComputerFundamentals />}
        />
        <Route path="/basicsOfComputer" element={<BasicsOfComputer />} />
        <Route path="/historyofComputer" element={<HistoryofComputer />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/PartyOfComputer" element={<PartyOfComputer />} />
        <Route
          path="/ComputerVirusesAndSecurty"
          element={<ComputerVirusesAndSecurty />}
        />
        <Route
          path="/Difference-Between-Mac-Windows"
          element={<DiffenceBWM />}
        />
        <Route
          path="/Classification-Computers-Size"
          element={<ClassificationSize />}
        />
        <Route
          path="/Basic-Computer-Maintenance"
          element={<BasicComputerMaintenance />}
        />
        <Route path="/Working-With-DeskTop" element={<WorkingWithDeskTop />} />
        <Route path="/Working-with-Windows" element={<WorkingWindows />} />
        <Route
          path="/Introduction-Internet"
          element={<IntroductionInternet />}
        />
        <Route
          path="/Disadvantages-Of-Using-Computer"
          element={<DisadvantagesOfUsingComputer />}
        />
        <Route
          path="/Generalkeyboardshortcuts"
          element={<Generalkeyboardshortcuts />}
        />
        <Route
          path="/Q1ComputerFundamentals"
          element={<Q1ComputerFundamentals />}
        />
        <Route path="/Typing-KeyBoard" element={<TypingKeyBoard />} />
        <Route path="/TypingPratice" element={<TypingPratice />} />
        <Route
          path="/HomeQuestions"
          element={
            <HomeQuestions
              header="Computer fondamantal"
              Click="Start your Quiz in Computer Fundamentals "
              GoTo="/Q1ComputerFundamentals"
            />
          }
        />
        <Route path="/CreateEmailing" element={<CreateEmailing />} />
        <Route path="/CreateEmail" element={<CreateEmail />} />
        <Route path="/GoingOnlineSafely" element={<GoingOnlineSafely />} />
        <Route path="/SigningUp" element={<SigningUp />} />
        <Route path="/User" element={<User />} />
        <Route path="/SigningIn" element={<SigningIn />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/ListOfCourses" element={<ListOfCourses />} />
        <Route path="/Practice" element={<Practice />} />
        <Route path="/Grade1" element={<Grade1 />} />
        <Route path="/Grade2" element={<Grade2/>}/>
        <Route path="/Grade3" element={<Grade3/>}/>
        <Route path="/Grade4" element={<Grade4/>}/>
        <Route
          path="/ThemeCourses"
          element={
            <ThemeCourses
              header="Introdution to Blockly"
              course1="Puzzle"
              course2="Maze"
            />
          }
        />

        <Route
          path="/Link1"
          element={<Link1 APIBlockly='https://blockly.games/puzzle?lang=en' Blockly1='Puzzle' youtubelink="https://www.youtube.com/embed/3rkkbltOaXA" header="Puzzle"  />}
        />
        <Route
          path="/Link2"
          element={<Link1 APIBlockly='https://blockly.games/maze?lang=en' Blockly1='Maze' youtubelink="https://www.youtube.com/embed/3rkkbltOaXA" header="Maze" />}
        />
   
      <Route
          path="/Link3"
          element={<Link1 APIBlockly='https://blockly.games/bird?lang=en' Blockly1='Bird' youtubelink="https://www.youtube.com/embed/3rkkbltOaXA" header="Bird" />}
        />
      <Route
          path="/Link4"
          element={<Link1 youtubelink="https://blockly.games/turtle?lang=en" header="Turtle" youtubelink="https://www.youtube.com/embed/3rkkbltOaXA" header="Turtle" />}
        />
        <Route
          path="/Link5"
          element={<Link1 youtubelink="https://blockly.games/movie?lang=en" header="Movie" youtubelink="https://www.youtube.com/embed/3rkkbltOaXA" header="Movie" />}
        />
        <Route
          path="/Link6"
          element={<Link1 youtubelink="https://blockly.games/music?lang=en" header="Music" youtubelink="https://www.youtube.com/embed/3rkkbltOaXA" header="Music" />}
        />
        <Route
          path="/Link7"
          element={<Link1 youtubelink="https://blockly.games/pond-tutor?lang=en" header="Pond Tuto" youtubelink="https://www.youtube.com/embed/3rkkbltOaXA" header="Pond Tuto" />}
        />
        <Route
          path="/Link8"
          element={<Link1 youtubelink="https://blockly.games/pond-duck?lang=en" header="Pond" youtubelink="https://www.youtube.com/embed/3rkkbltOaXA" header="Pond" />}
        />
        <Route path="/Payment-via-Mpesa"  element={<Mpesa TillNumber='5562149'/>}/>
        <Route path="/Payment-via-PayPal" element={<PayPal GmailPaypal='somapamojacompany@gmail.com'/>}/>
           </Routes>

      

      <FooterContainer />
    </BrowserRouter>
  );
}
