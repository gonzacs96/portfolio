import React from "react";
import foto_cv from "../../assets/foto_perfil_cv.jpg";
import "./Resume.css";

export default function Resume() {

  const downloadCV=(e)=>{
   window.open("https://drive.google.com/file/d/1pPN8hjRzOZy1blGGqqAOtqxQFkTypdmZ/view?usp=sharing")
  }

  return (
    <>
      <div className="resume" id="resume">
        <div className="resume-info-section">
          <h3 className="resume-info-title">
            Hi, my name is Gonzalo, <br /> and I'm a Full Stack Developer.
          </h3>
          <p className="resume-info-body">
            I am currently studying computer science.I recently did a bootcamp,
            called "Soy Henry", in which I specialized as a Full Stack
            Developer, in the PERN stack. I define myself as a proactive,
            responsible, committed person. I learn quickly, and I adapt quickly,
            I like challenges, and improve myself day by day in all my profiles
          </p>
          <button
            className="resume-download-button"
            onClick={downloadCV}
          >
            Download my CV
          </button>
        </div>
        <div className="resume-image-section">
          <img src={foto_cv} className="resume-image" alt="not found" />
        </div>
      </div>
    </>
  );
}
