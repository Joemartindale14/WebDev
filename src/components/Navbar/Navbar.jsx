import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import logo_black from "../../assets/logo_black.png";
import logo_colour from "../../assets/logo_colour.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import account_black from "../../assets/account_black.png";
import account_colour from "../../assets/account_colour.png";
import shopping_cart_black from "../../assets/shopping_cart_black.png";
import shopping_cart_colour from "../../assets/shopping_cart_colour.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  const location = useLocation();

  return (
    <div className="navbar">
      <a href="/">
        <img
          src={theme == "light" ? logo_black : logo_colour}
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
      <a href="/SignIn">
        <img
          src={theme == "light" ? account_black : account_colour}
          alt=""
          className="account-icon"
        />
      </a>
      <a href="/Cart">
        <img
          src={theme == "light" ? shopping_cart_black : shopping_cart_colour}
          alt=""
          className="shopping-cart-icon"
        />
      </a>
      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme == "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
