import React from "react";
import PropTypes from "prop-types";
import "./HeaderContainer.css";

const HeaderContainer = ({ imageSrc, title }) => {
  return (
    <div className="header-container">
      <img src={imageSrc} alt={title} />
      <div className="overlay-text">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

HeaderContainer.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HeaderContainer;
