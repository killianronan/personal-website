import React from "react";
import "./../App.css";

function About() {
  return (
    <section className="section">
      <div>
        <h2 className="heading">About me</h2>
        <p className="text">Hi, I'm Killian Ronan, a software developer with 5 years of experience in web development. I specialize in creating responsive websites using HTML, CSS, and JavaScript.</p>
      </div>
      <div>
        <h2 className="heading">Skills</h2>
        <ul className="list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </div>
    </section>
    
  );
}

export default About;
