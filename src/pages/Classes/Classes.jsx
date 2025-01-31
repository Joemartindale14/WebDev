import React from "react";
import "./Classes.css";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <h1>CLASSES</h1>
      <div className="wrapper">
        <h2>Featured Classes</h2>
        <h5>
          Look at the classes we offer to help you reach your fitness goals, we
          have classes tailored to your needs. Join us today and find the right
          workout class for you! Hovering over the intended class will indicate
          which one you are focusing on.
        </h5>
        <div className="bootcamps-container">
          <img src="/img5.jpg" alt="Spin Class" />
          <div className="bootcamps">
            <div>
              <h4>SPIN CLASS</h4>
              <p>
                A Cycle Spin class involves an adjustable stationary bike
                workout, guided by a specilaist instructor that provides upbeat
                music to boost your energy levels. Enhancing cardiovascular
                levels, leg strengthing and full body workout whilst burning
                calories!
              </p>
            </div>
            <div>
              <h4>CIRCUIT TRAINING</h4>
              <p>
                A Circuit Training class involves a structured and timed routine
                where members use different exercise stations to help with body
                strength, cardio levels, flexability and core.
              </p>
            </div>
            <div>
              <h4>PILATES</h4>
              <p>
                A Pilates class is a low-imapct workout which focuses on muscle
                strengthening whilst improving flexability. This workout
                enhances form and control rather than intensity and is suitable
                for any members.
              </p>
            </div>
            <div>
              <h4>DANCE-FIT</h4>
              <p>
                A Dance-Fit class is a fun and energetic workout which allows
                members to combine dance moves with fitness exercises. This
                class is suitable for all members that like to boost their
                energy levels through dancing and help improve their cardio,
                flexability and overall fitness levels.
              </p>
            </div>
            <div>
              <h4>BOXING</h4>
              <p>
                A Boxing class allows members to use boxing techniques combined
                with fitness exercises to help burn calories and improve form.
                This class is suitable for all members and can help with their
                overall fitness levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
