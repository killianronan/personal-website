import React from "react";
import "./About.css";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaAngular, FaPython, FaJava, FaDatabase, FaGithub, FaJenkins, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiApachespark, SiCsharp } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="skill-icon" />, name: "HTML" },
  { icon: <FaCss3Alt className="skill-icon" />, name: "CSS" },
  { icon: <FaSass className="skill-icon" />, name: "SCSS" },
  { icon: <IoLogoJavascript className="skill-icon" />, name: "JavaScript" },
  { icon: <FaReact className="skill-icon" />, name: "React" },
  { icon: <FaAngular className="skill-icon" />, name: "Angular" },
  { icon: <FaPython className="skill-icon" />, name: "Python" },
  { icon: <SiApachespark className="skill-icon" />, name: "PySpark" },
  { icon: <FaJava className="skill-icon" />, name: "Java" },
  { icon: <SiCsharp className="skill-icon" />, name: "C#" },
  { icon: <FaDatabase className="skill-icon" />, name: "SQL" },
  { icon: <FaGithub className="skill-icon" />, name: "Git" },
  { icon: <FaJenkins className="skill-icon" />, name: "Jenkins" },
  { icon: <FaAws className="skill-icon" />, name: "AWS" }
];

function About() {
  return (
    <section className="section">
      <div className="about-container">
        <div className="greeting-container">
          <p className="text">Here is some more information about who I am, what I do, and my skills with programming and technology!</p>
        </div>
        <div className="bio-container">
          <FlipCard
            frontContent={<h2 className="heading">Who am I?</h2>}
            backContent={
              <div className="intro-text">
                I'm a <strong>software developer</strong> committed to the overall success of the projects & products I work on. I'm creative, meticulous & a passionate developer who delivers innovative solutions that exceed customer expectations. I'm a highly motivated critical thinker & who is quick to learn new technologies.
                <br /><br />
                I developed my knowledge on the fundamentals of software design & maintenance throughout my studies of Computer Science at Trinity College Dublin. I got experience working as a <strong>full-stack web application developer</strong> at a promising startup, which allowed me to hone my proficiency in all facets of the software design lifecycle. I'm currently working as a <strong>P3 Software Engineer at Workday</strong>!
                <br /><br />
                Take a look at some of my personal work in the Projects section. Check out my resume for more details on my background in software development.
              </div>
            }
          />
          <FlipCard
            frontContent={<h2 className="heading">Skills & Proficiencies</h2>}
            backContent={
              <div className="skill-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill.icon}
                    <strong>{skill.name}</strong>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}

function FlipCard({ frontContent, backContent }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
}

export default About;
