import React from "react";
import { useLocation, Link } from "react-router-dom";
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
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={theme == "light" ? logo_black : logo_colour}
          alt=""
          className="logo"
        />
      </Link>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/Facilities" ? "active" : ""}>
          <Link to="/Facilities">Facilities</Link>
        </li>
        <li className={location.pathname === "/Memberships" ? "active" : ""}>
          <Link to="/Memberships">Memberships</Link>
        </li>
        <li className={location.pathname === "/Merchandise" ? "active" : ""}>
          <Link to="/Merchandise">Merchandise</Link>
        </li>
        <li className={location.pathname === "/Classes" ? "active" : ""}>
          <Link to="/Classes">Classes</Link>
        </li>
        <li className={location.pathname === "/Contact" ? "active" : ""}>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      {isAuthenticated ? (
      <Link to="/Account">
        <img
          src={theme == "light" ? account_black : account_colour}
          alt=""
          className="account-icon"
        />
      </Link>
      ) : (
      <Link to="/SignIn">
        <img
          src={theme == "light" ? account_black : account_colour}
          alt=""
          className="account-icon"
        />
      </Link>
      )}
      <Link to="/Cart">
        <img
          src={theme == "light" ? shopping_cart_black : shopping_cart_colour}
          alt=""
          className="shopping-cart-icon"
        />
      </Link>
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
