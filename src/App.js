import react from "react";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";
import Home from "./Pages/2.1HomePage/Home";
import WelcomePage from "./Pages/2.2 Soma/WelcomePage";
import { useNavigate } from "react-router-dom";
import NavBar from "./Pages/1.Navbar/NavBar";
import Request from "./Pages/2.2 Soma/Request";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route exact path="/" element={<Home />} />
      <Route path="/request" element={<Request />} />
      
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
