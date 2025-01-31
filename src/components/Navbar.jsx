import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo_white from "../assets/logo_black.png";
import logo_black from "../assets/logo_white.png";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";
import account_black from "../assets/account_black.png";
import account_blue from "../assets/account_blue.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  const location = useLocation();

  return (
    <div className="navbar">
      <a href="/">
        <img
          src={theme == "light" ? logo_white : logo_black}
          alt=""
          className="logo"
        />
      </a>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <a href="/">Home</a>
        </li>
        <li className={location.pathname === "/Facilities" ? "active" : ""}>
          <a href="/Facilities">Facilities</a>
        </li>
        <li className={location.pathname === "/Memberships" ? "active" : ""}>
          <a href="/Memberships">Memberships</a>
        </li>
        <li className={location.pathname === "/Merchandise" ? "active" : ""}>
          <a href="/Merchandise">Merchandise</a>
        </li>
        <li className={location.pathname === "/Classes" ? "active" : ""}>
          <a href="/Classes">Classes</a>
        </li>
        <li className={location.pathname === "/Contact" ? "active" : ""}>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
      <a href="/Memberships">
        <button>Join Now</button>
      </a>

      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme == "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
      />
      <a href="/SignIn">
        <img
          src={theme == "light" ? account_black : account_blue}
          alt=""
          className="account-icon"
        />
      </a>
    </div>
  );
};

export default Navbar;
