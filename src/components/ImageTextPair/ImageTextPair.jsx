import React from "react";
import PropTypes from "prop-types";
import "./ImageTextPair.css";

const ImageTextPair = ({ imageSrc, text, reverse }) => {
  return (
    <div className={`image-text-pair ${reverse ? "reverse" : ""}`}>
      <img src={imageSrc} alt="Image" />
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
};

ImageTextPair.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

ImageTextPair.defaultProps = {
  reverse: false,
};

export default ImageTextPair;