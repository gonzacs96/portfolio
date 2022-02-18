import React from "react";
import foto_cv from "../../assets/foto_perfil_cv.jpg";
import NavBar from "../NavBar/NavBar";
import "./Resume.css";

export default function Resume() {
  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="resume">
        <div className="resume-body">
          <h3>Hi, my name is Gonzalo, and I'm a Full Stack Developer.</h3>
          <p>
            I am currently studying computer science.I recently did a bootcamp,
            called "Soy Henry", in which I specialized as a Full Stack
            Developer, in the PERN stack.
          </p>
          <p>
            I define myself as a proactive, responsible, committed person. I
            learn quickly, and I adapt quickly, I like challenges, and improve
            myself day by day in all my profiles
          </p>
        </div>
        <div className="resume-image">
          <img src={foto_cv} alt="not found" />
        </div>
      </div>
    </>
  );
}
