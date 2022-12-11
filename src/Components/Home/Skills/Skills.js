import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="text-white min-h-screen mx-auto">
      <h2 className="text-center text-white text-2xl py-14">WORK EXPERIENCE & SKILL</h2>
      <div className="grid lg:grid-cols-2  content-center gap-10 mt-6">
        <div className="w-1/2 mx-auto">
          <ul className="steps steps-vertical">
            <li data-content="✓" className="step step-secondary">
              Register
            </li>
            <li data-content="✓" className="step step-secondary">
              HTML
            </li>
            <li data-content="✓" className="step step-secondary">
              CSS
            </li>
            <li data-content="✓" className="step step-secondary">
              BOOTSTRAP
            </li>
            <li data-content="✓" className="step step-secondary">
              TAILWIND
            </li>
            <li data-content="✓" className="step step-secondary">
              JAVASCRIPT & DOM
            </li>
            <li data-content="✓" className="step step-secondary">
              REACT JS
            </li>
            <li data-content="✓" className="step step-secondary">
              FIREBASE &
            </li>
            <li data-content="✓" className="step step-secondary">
              MONGODB
            </li>
          </ul>
        </div>
        <div className="w-1/2 mx-auto">
          <p style={{ color: "#484848" }}>
            I've done several projects at the moment using react.js with Firebase Mongodb.I have several projects posted on{" "}
            <a className=" text-orange-700" href=" https://github.com/iratul010?tab=repositories ">
              <span> GitHub </span>
            </a>
            with Firebase and Mongodb.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
