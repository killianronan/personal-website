import React from "react";
import "./About.css";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaAngular, FaPython, FaJava, FaDatabase, FaJenkins, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiApachespark, SiCsharp } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 className="skill-icon" style={{ color: "#E34F26" }} />, name: "HTML" },
  { icon: <FaCss3Alt className="skill-icon" style={{ color: "#1572B6" }} />, name: "CSS" },
  { icon: <FaSass className="skill-icon" style={{ color: "#CC6699" }} />, name: "SCSS" },
  { icon: <IoLogoJavascript className="skill-icon" style={{ color: "#F7DF1E" }} />, name: "JavaScript" },
  { icon: <FaReact className="skill-icon" style={{ color: "#61DAFB" }} />, name: "React" },
  { icon: <FaAngular className="skill-icon" style={{ color: "#DD0031" }} />, name: "Angular" },
  { icon: <FaPython className="skill-icon" style={{ color: "#3776AB" }} />, name: "Python" },
  { icon: <SiApachespark className="skill-icon" style={{ color: "#E25A1C" }} />, name: "PySpark" },
  { icon: <FaJava className="skill-icon" style={{ color: "#007396" }} />, name: "Java" },
  { icon: <SiCsharp className="skill-icon" style={{ color: "#239120" }} />, name: "C#" },
  { icon: <FaDatabase className="skill-icon" style={{ color: "#F29111" }} />, name: "SQL" },
  { icon: <FaGitSquare className="skill-icon" style={{ color: "#F05032" }} />, name: "Git" },
  { icon: <FaJenkins className="skill-icon" style={{ color: "#D24939" }} />, name: "Jenkins" },
  { icon: <FaAws className="skill-icon" style={{ color: "#FF9900" }} />, name: "AWS" }
];

function About() {
  return (
    <section id="about" className="section min-h-screen">
      <div className="about-container">
        <div className="bio-container">
          <div className="card-container">
            <h2 className="card-title">About Me</h2>
            <div className="card">
              <div className="intro-text"><strong style={{textDecoration: 'underline'}}>Professional Background</strong></div>
              <div className="intro-text">
              I developed my knowledge on the fundamentals of software design & maintenance throughout my studies of Computer Science at Trinity College Dublin. I got experience working as a <strong>full-stack web application developer</strong> at a promising startup, which allowed me to hone my proficiency in all facets of the software design lifecycle. I'm currently working as a <strong>P3 Software Engineer at Workday</strong>!
              {/* The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development.I'm creative, meticulous & a passionate developer who delivers innovative solutions that exceed customer expectations. I'm a highly motivated critical thinker & who is quick to learn new technologies. */}
              </div>
              <div className="intro-text"><strong style={{textDecoration: 'underline'}}>Personal Interests</strong></div>
              <div className="intro-text">
                When I’m not at my computer I like to spend my time reading, playing football, hanging out with friends and gaming. Take a look at some of my personal work in the Projects section. Check out my resume for more details on my background in software development.
              </div>
            </div>
          </div>
          <div className="card-container">
            <h2 className="card-title">Skills & Proficiencies</h2>
            <div className="card">
              <div className="skill-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill.icon}
                    <strong>{skill.name}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
