import React from "react";
import "./DropdownMenu.css";

const DropdownMenu = ({ isOpen }) => {
  return (
    <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Facilities">Facilities</a></li>
        <li><a href="/Memberships">Memberships</a></li>
        <li><a href="/Merchandise">Merchandise</a></li>
        <li><a href="/Classes">Classes</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
