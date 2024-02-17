import React from "react";
import "./About.css";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaAngular, FaPython, FaJava, FaDatabase, FaGithub, FaJenkins } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiApachespark, SiCsharp } from "react-icons/si";

function About() {
  return (
    <section className="section">
      <div className="about-container">
        <div className="greeting-container">
          <div className="text">Here is some more information about who I am, what I do, and my skills with programming and technology!</div>
        </div>
        <div className="bio-container">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h2 className="heading">Who am I?</h2>
              </div>
              <div class="flip-card-back">
                <div className="intro-text">
                  I'm a <strong>software developer</strong> committed to the overall success of the projects & products I work on.
                  I'd consider myself to be a creative, meticulous & passionate developer who delivers innovative solutions that exceed customer expectations.
                  Check out some of my work in the Projects section. I'm a highly motivated critical thinker & who is quick to learn new technologies.
                  <br></br>
                  <br></br>
                  I revel at opportunities to work outside of my comfort zone, having developed my knowledge fundementals of software design & maintainence throughout my studies of Computer Science at Trinity College Dublin.
                  I got experience working as a <strong>full-stack web application developer</strong> at a promising startup, which allowed me to hone my proficiency in all facets of the software design lifecycle.
                  I'm currently working as a software engineer in a big tech company.
                  <br></br>
                  <br></br>
                  In my workplace & throughout my studies I was able to develop my experience using <strong>agile methodologies and with project management</strong>.
                  My experience has made me adept in collaborating with teams or working independently to deliver high-quality software.
                  Check out my resume for more details on my background in software development.
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h2 className="heading">My Skills</h2>
              </div>
              <div class="flip-card-back">
                <div className="skill-list">
                  <div className="skill-item">
                    <FaHtml5 className="skill-icon" />
                    <strong>HTML</strong>
                  </div>
                  <div className="skill-item">
                    <FaCss3Alt className="skill-icon" />
                    <strong>CSS</strong>
                  </div>
                  <div className="skill-item">
                    <FaSass className="skill-icon" />
                    <strong>SCSS</strong>
                  </div>
                  <div className="skill-item">
                    <IoLogoJavascript className="skill-icon" />
                    <strong>Javascript</strong>
                  </div>
                  <div className="skill-item">
                    <FaReact className="skill-icon" />
                    <strong>React</strong>
                  </div>
                  <div className="skill-item">
                    <FaAngular className="skill-icon" />
                    <strong>Angular</strong>
                  </div>
                  <div className="skill-item">
                    <FaPython className="skill-icon" />
                    <strong>Python</strong>
                  </div>
                  <div className="skill-item">
                    <SiApachespark className="skill-icon" />
                    <strong>PySpark</strong>
                  </div>
                  <div className="skill-item">
                    <FaJava className="skill-icon" />
                    <strong>Java</strong>
                  </div>
                  <div className="skill-item">
                    <SiCsharp className="skill-icon" />
                    <strong>C#</strong>
                  </div>
                  <div className="skill-item">
                    <FaDatabase className="skill-icon" />
                    <strong>SQL</strong>
                  </div>
                  <div className="skill-item">
                    <FaGithub className="skill-icon" />
                    <strong>Git</strong>
                  </div>
                  <div className="skill-item">
                    <FaJenkins className="skill-icon" />
                    <strong>Jenkins</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default About;
