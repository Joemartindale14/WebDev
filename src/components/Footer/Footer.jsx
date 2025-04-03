import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="footer-content">
      <footer className={theme == "light" ? "footer" : "dark footer"}>
        <div className="footer-content-right">
          <h1>Strive Fusion</h1>
            <ul>
                <Link to="/facilities">Facilities</Link>
                <Link to="/memberships">Memberships</Link>
                <Link to="/merchandise">Merchandise</Link>
                <Link to="/classes">Classes</Link>
                <Link to="/contact">Contact Us</Link>
            </ul>
          <p><em>Copyright 2025 * Created by Joe Martindale</em></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
