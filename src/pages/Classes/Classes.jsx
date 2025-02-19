import React from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import Timetable from "../../components/Timetable/Timetable";
import "./Classes.css";
import { ClassBookingProvider } from "../../context/ClassBookingContext";

const WorkoutSessions = () => {
  return (
    <ClassBookingProvider>
    <section className="workout_session">
      <HeaderContainer imageSrc="/classes_header_img.webp" title="CLASSES" loading="lazy"/>
      <hr />
      <div className="classes-page">
        <Timetable />
      </div>
    </section>
    </ClassBookingProvider>
  );
};

export default WorkoutSessions;
