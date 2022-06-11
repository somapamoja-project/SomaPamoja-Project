import React from "react";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";
import Home from "../2.1HomePage/Home";
import WelcomePage from "../2.2 Soma/WelcomePage";
import { useNavigate } from "react-router-dom";
import NavBar from "../1.Navbar/NavBar";
import Request from "../2.2 Soma/Request";

export default function RouterAllPages() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/request" element={<Request />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
