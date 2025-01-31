import React from "react";
import "./Footer.css";

const Footer = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <footer className={theme == "light" ? "footer" : "dark footer"}>
      Copyright 2025 * Created by Joe Martindale
    </footer>
  );
};

export default Footer;
