import React from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import ImageTextPair from "../../components/ImageTextPair/ImageTextPair";
import "./Classes.css";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <HeaderContainer imageSrc="/classes_header_img.webp" title="Classes" loading="lazy"/>
      <hr />
      <ImageTextPair imageSrc="/entrance_img.webp" text="." loading="lazy"/>
      <ImageTextPair imageSrc="/gymfloor_img.webp" text="." loading="lazy"/>
      <ImageTextPair imageSrc="/studio_img.webp" text="." loading="lazy"/>
      <ImageTextPair imageSrc="/changingrooms_img.webp" text="." loading="lazy"/>
    </section>
  );
};

export default WorkoutSessions;
