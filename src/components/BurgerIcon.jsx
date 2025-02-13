import React from "react";
import "./BurgerIcon.css";

const BurgerIcon = ({ toggleMenu }) => {
  return (
    <div className="burger-icon" onClick={toggleMenu}>
      <div className="burger-bar"></div>
      <div className="burger-bar"></div>
      <div className="burger-bar"></div>
    </div>
  );
};

export default BurgerIcon;
