import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./../App.css";


function Home() {
  return (
      <section className="section">
        <div className="home-container">
          <div className="greeting-container">
            <h1 className="heading">Hello there  <span className='wave'>👋 </span></h1>
            <p className="text">
              My name is Killian Ronan.
            </p>
            <div className="icon-list">
              <FaGithub className="icon" onClick={() => {window.open("https://github.com/killianronan/");}}/>
              <FaLinkedin className="icon" onClick={() => {window.open("https://www.linkedin.com/in/killian-ronan-9b5150194/");}}/>
              <FaInstagram className="icon" onClick={() => {window.open("https://github.com/killianronan/");}}/>
            </div>
          </div>
          {/* <div>tels</div> */}
          {/* <img src="./assets/software-dev.png" alt="Software dev"></img> */}
          <div className="imagedeveloper"> testing</div>
          {/* <div className="testing">hello</div> */}
        </div>
      </section>
  );
}

export default Home;
