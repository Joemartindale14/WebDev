import React from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import ImageTextPair from "../../components/ImageTextPair/ImageTextPair";
import "./Classes.css";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <HeaderContainer imageSrc="/classes_header_img.jpg" title="Classes"/>
      <hr />
      <ImageTextPair imageSrc="/entrance_img.jpg" text="."/>
      <ImageTextPair imageSrc="/gymfloor_img.jpg" text="."/>
      <ImageTextPair imageSrc="/studio_img.jpg" text="."/>
      <ImageTextPair imageSrc="/changingrooms_img.jpg" text="."/>
    </section>
  );
};

export default WorkoutSessions;
