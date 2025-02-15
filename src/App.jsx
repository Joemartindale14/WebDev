import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Classes from "./pages/Classes/Classes";
import Facilities from "./pages/Facilities/Facilities";
import Memberships from "./pages/Memberships/Memberships";
import Merchandise from "./pages/Merchandise/Merchandise";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import BurgerIcon from "./components/BurgerIcon/BurgerIcon";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Burger icon clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <BurgerIcon toggleMenu={toggleMenu} />
        <DropdownMenu isOpen={isMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Classes" element={<Classes />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/Memberships" element={<Memberships />} />
          <Route path="/Merchandise" element={<Merchandise />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
        <ToastContainer theme="dark" position="top-center" />
      </div>
    </Router>
  );
};

export default App;
