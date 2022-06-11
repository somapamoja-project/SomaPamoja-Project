import NavBar from "./Pages/1.Navbar/NavBar";
import Home from "./Pages/2.1HomePage/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./Pages/2.5 SignUp$Login/SignIn";
import SignUp from "./Pages/2.5 SignUp$Login/SignUp";
import WelcomePage from "./Pages/2.2 Soma/WelcomePage";
import RouterAllPages from "./Pages/4.RouterAllPages/RouterAllPages";

function App() {
  return <RouterAllPages />;
}

export default App;
