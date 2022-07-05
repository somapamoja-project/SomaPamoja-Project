import React, { useEffect, useState } from "react";
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
import  User  from "../5.Dashbord/User";
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
import Mpesa from "../5.Dashbord/Payment/Mpesa";
import PayPal from "../5.Dashbord/Payment/Paypal";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, colRef } from "../../firebase/Firebase-config";
import "../5.Dashbord/Style.css";
import noImage from "../../Images/noImage.png";
import WaitingList from "../6.SponsorPlateform/WaitingList";
import FormForWaitingList from "../6.SponsorPlateform/FormForWaitingList";
import { getDocs } from "firebase/firestore";
import StudentProp from "../6.SponsorPlateform/StudentsList/StudentProp";
import WelcomeToSponsorPlatform from "../6.SponsorPlateform/WelcomeToSponsorPlatform";
import SponsoredStudents from "../6.SponsorPlateform/StudentsList/SponsoredStudents";
import ListOfSponsoredStudents from "../6.SponsorPlateform/StudentsList/ListOfSponsoredStudents.js";
import DonorPagesQ from "../6.SponsorPlateform/Donors/DonorPages";
import { Expo, More } from "../2.1HomePage/HomeComponents";
import VolunteerTeachers from "../6.SponsorPlateform/Donors/VolunteerTeachers";
import PagePastingMeeting from "../6.SponsorPlateform/Donors/PagePastingMeeting";
import CrossTheRoad from "../Gaming/CrossTheRoad";
import Sponsor from '../6.SponsorPlateform/Donors/Sponsor'
export default function RouterAllPages() {
  const [user, setUser] = useState();
  const [data1, setData1] = useState({});

  //sponsor code

  const [List, setList] = useState([]);
  const oneData = [];
  React.memo(async function display() {
    await getDocs(colRef)
      .then((allDocs) => {
        var studentsList = [];

        allDocs.docs.forEach((doc) => {
          studentsList.push({ ...doc.data(), id: doc.id });
          setList(studentsList);
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  });

  

  //Login and Logout Statement
  const logeOut = () => {
    signOut(auth);
    document.getElementById("Get").style.display = "flex";
    setLogin();
    document.getElementById("loginVannish").style.display = "flex";
  };
  function setLogin() {
    document.getElementById("Logout").style.display = "none";
  }

  useEffect(() => {
    
    try {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(<NavBar logeOut={logeOut} HomeName="Dashboard" LinkHomeorDashboard={'/User'} />);
          setData1(currentUser);
          function Display() {
            document.getElementById("Get").style.display = "none";
            document.getElementById("Logout").style.display = "flex";
            document.getElementById("loginVannish").style.display = "none";
            document.getElementById("imageIcon").style.display = "flex";
            document.getElementById("imgiconLogo").style.display = "flex";
          }
          Display();
        } else {
          setUser(<NavBar LinkHomeorDashboard={''} HomeName="Home" />);
          logeOut();

          function Display() {
            document.getElementById("Get").style.display = "flex";
            document.getElementById("Logout").style.display = "none";
            document.getElementById("loginVannish").style.display = "flex";
            document.getElementById("imageIcon").style.display = "none";
          }
          Display();
        }
      });
    } catch (err) {
      alert("check Your Internet");
      console.log(err.code);
    }

    List.map((e) => {
      oneData.push(e.FullNames, e.Reason);
    });
    console.log(oneData.FullNames);
  }, []);

  return (
    <BrowserRouter>
      {user}
      <div className="UseName" id="imageIcon">
        <div className="imageUser">
          <img
            type="icon"
            id="imgiconLogo"
            src={data1?.photoURL}
            alt="noImage"
          />
        </div>
        <h2>
          {data1?.displayName}
          
        </h2>
      </div>

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
        <Route path="/Grade2" element={<Grade2 />} />
        <Route path="/Grade3" element={<Grade3 />} />
        <Route path="/Grade4" element={<Grade4 />} />
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
          element={
            <Link1
              APIBlockly="https://blockly.games/puzzle?lang=en"
              Blockly1="Puzzle"
              youtubelink="https://www.youtube.com/embed/3rkkbltOaXA"
              header="Puzzle"
            />
          }
        />
        <Route
          path="/Link2"
          element={
            <Link1
              APIBlockly="https://blockly.games/maze?lang=en"
              Blockly1="Maze"
              youtubelink="https://www.youtube.com/embed/3rkkbltOaXA"
              header="Maze"
            />
          }
        />

        <Route
          path="/Link3"
          element={
            <Link1
              APIBlockly="https://blockly.games/bird?lang=en"
              Blockly1="Bird"
              youtubelink="https://www.youtube.com/embed/3rkkbltOaXA"
              header="Bird"
            />
          }
        />
        <Route
          path="/Link4"
          element={
            <Link1
              youtubelink="https://blockly.games/turtle?lang=en"
              header="Turtle"
              youtubelink="https://www.youtube.com/embed/3rkkbltOaXA"
              header="Turtle"
            />
          }
        />
        <Route
          path="/Link5"
          element={
            <Link1
              youtubelink="https://blockly.games/movie?lang=en"
              header="Movie"
              youtubelink="https://www.youtube.com/embed/3rkkbltOaXA"
              header="Movie"
            />
          }
        />
        <Route
          path="/Link6"
          element={
            <Link1
              youtubelink="https://blockly.games/music?lang=en"
              header="Music"
              youtubelink="https://www.youtube.com/embed/3rkkbltOaXA"
              header="Music"
            />
          }
        />
        <Route
          path="/Link7"
          element={
            <Link1
              youtubelink="https://blockly.games/pond-tutor?lang=en"
              header="Pond Tuto"
              youtubelink="https://www.youtube.com/embed/3rkkbltOaXA"
              header="Pond Tuto"
            />
          }
        />
        <Route
          path="/Link8"
          element={
            <Link1
              youtubelink="https://blockly.games/pond-duck?lang=en"
              header="Pond"
              youtubelink="https://www.youtube.com/embed/3rkkbltOaXA"
              header="Pond"
            />
          }
        />
        <Route
          path="/Payment-via-Mpesa"
          element={<Mpesa TillNumber="5562149" />}
        />
        <Route
          path="/Payment-via-PayPal"
          element={<PayPal GmailPaypal="somapamojacompany@gmail.com" />}
        />
        <Route path="/Waiting-List" element={<WaitingList />} />
        <Route path="/Form-For-Waiting-List" element={<FormForWaitingList />} />
        <Route
          path="/Welcome-To-Sponsor-Platform"
          element={<WelcomeToSponsorPlatform />}
        />
        <Route path="/Sponsored-Students" element={<SponsoredStudents />} />
        <Route
          path="/List-Of-Sponsored-Students"
          element={<ListOfSponsoredStudents />}
        />
        <Route path="/Donor-Pages-Question" element={<DonorPagesQ />} />
        <Route path="/Under-Development" element={<More ExpoPage="Use the App, even under development"/>}/>
        <Route path="/Under-Development2" element={<More/>}/>
        <Route path="/Expo" element={<Expo/>}/>
        <Route path="/Volunteer-Teachers" element={<VolunteerTeachers/>}/>
        <Route path="/Meeting-schedule" element={<PagePastingMeeting/>}/>
        <Route path='/Gaming-Space' element={<CrossTheRoad/>}/>
        <Route path="/Sponsor-platform" element={<Sponsor/>}/>
      </Routes>

      <FooterContainer emailName={data1?.email} logeOut={logeOut} />
    </BrowserRouter>
  );
}
