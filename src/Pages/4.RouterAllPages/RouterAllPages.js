import React from "react";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";
import Home from "../2.1HomePage/Home";
import WelcomePage from "../2.2 Soma/WelcomePage";

import NavBar from "../1.Navbar/NavBar";
import Request from "../2.2 Soma/Request";
import ListeOfCourses from "../2.2 Soma/Courses/ListeOfCourses";

export default function RouterAllPages() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/SomaPamoja-Project" element={<Home />} />
        <Route path="/request" element={<Request />} />

        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/FreeCourses" element={<ListeOfCourses/>} />
      </Routes>
    </BrowserRouter>
  );
}
