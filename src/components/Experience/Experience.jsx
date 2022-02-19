import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experiences" id="experience">
      <div className="experience-body">
        <h2 className="experience-title">Experience</h2>
        <div className="experiences-grid">
          <div className="empty"></div>
          <div className="line"></div>
          <div className="experience">
            <div className="experience-date">Nov/2021-Marzo/2022</div>
            <div className="experience-company">Soy Henry Bootcamp</div>
            <div className="experience-position">Full Stack Developer</div>
            <div className="experience-description">
              I carried out various projects in their laboratories (more than
              800 hours of coding),
              <br /> in which I was evaluated in different aspects.
              <br /> Throughout the bootcamp, which consisted of 4 modules:
              <br /> Foundations,
              <br />
              Front-end(React-Redux),
              <br />
              Back-end(Node,Express,Sequelize),
              <br />
              and DataBases (PostgreSQL).
            </div>
          </div>
          <div className="experience experience-left">
            <div className="experience-date">Actually</div>
            <div className="experience-company">Name of your company here</div>
            <div className="experience-position">Full Stack Developer</div>
            <div className="experience-description">
              When you hire me I will tell you my experience, haha.
            </div>
          </div>
          {/* <div className="line"></div> */}
          {/* <div className="empty"></div> */}
          {/*  <div className="empty"></div>
          <div className="line"></div>
          <div className="experience">
            <div className="experience-date">Nov/2021-Marzo/2022</div>
            <div className="experience-company">Soy Henry Bootcamp</div>
            <div className="experience-position">Full Stack Developer</div>
            <div className="experience-description">
              I carried out various projects in their laboratories (more than 800 hours of coding),<br/> in which I
              was evaluated in different aspects.<br/> Throughout the bootcamp, which
              consisted of 4 modules:<br/> Foundations,<br/>
              Front-end(React-Redux),<br/>Back-end(Node,Express,Sequelize),<br/>and
              DataBases (PostgreSQL).
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
