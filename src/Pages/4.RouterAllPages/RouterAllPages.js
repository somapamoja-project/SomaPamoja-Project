import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
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
import PartyOfComputer from '../2.2 Soma/Courses/Basics of computer/PartyOfComputer'
import ComputerVirusesAndSecurty from '../2.2 Soma/Courses/Basics of computer/ComputerVirusesAndSecurty'

export default function RouterAllPages() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/SomaPamoja-Project" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/FreeCourses" element={<ListeOfCourses />} />
        <Route path="/fundamentalofComputer" element={<ComputerFundamentals />}/>
        <Route path="/basicsOfComputer" element={<BasicsOfComputer />} />
        <Route path="/historyofComputer" element={<HistoryofComputer />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/PartyOfComputer" element={<PartyOfComputer/>}/>
        <Route path="/ComputerVirusesAndSecurty" element={<ComputerVirusesAndSecurty/>}/>
      </Routes>
    </BrowserRouter>
  );
}
