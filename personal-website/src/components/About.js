import React from "react";
import "./../App.css";
import Card from 'react-bootstrap/Card';

function About() {
  return (
          <section className="section">
            <div className="about-container">
              <div className="greeting-container">
                <h2 className="heading">About me</h2>
                <div className="text">Here you will find more information about me, what I do, and my skills with programming and technology</div>
              </div>
              <div className="about-content-2">
                <div className="about-content">
                  <h2 className="heading">Who am I?</h2>
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
                <div className="about-content">
                  <h2 className="heading">Skills</h2>
                  <div className="skill-list">
                    <div className="skill-item">
                      HTML
                    </div>
                    <div className="skill-item">
                      CSS
                    </div>
                    <div className="skill-item">
                      SCSS
                    </div>
                    <div className="skill-item">
                      JavaScript
                    </div>
                    <div className="skill-item">
                      React
                    </div>
                    <div className="skill-item">
                      Angular
                    </div>
                    <div className="skill-item">
                      Python
                    </div>
                    <div className="skill-item">
                      Pyspark
                    </div>
                    <div className="skill-item">
                      Java
                    </div>
                    <div className="skill-item">
                      C#
                    </div>
                    <div className="skill-item">
                      SQL
                    </div>
                    <div className="skill-item">
                      Git
                    </div>
                    <div className="skill-item">
                      Jenkins
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}


export default About;
