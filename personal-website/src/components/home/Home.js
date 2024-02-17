import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Home.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
      <section className="section">
        <div className="home-container">
          <div className="greeting-container">
            <h1 className="heading">Hello there  <span className='wave'>👋 </span></h1>
            <div className="text">
              <Typewriter
                options={{
                  strings: [
                    "Welcome to my personal portfolio.",
                    "My name is Killian Ronan.",
                    "Check out my links below."
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <div className="icon-list">
              <FaGithub className="icon" onClick={() => {window.open("https://github.com/killianronan/");}}/>
              <FaLinkedin className="icon" onClick={() => {window.open("https://www.linkedin.com/in/killian-ronan-9b5150194/");}}/>
              <FaInstagram className="icon" onClick={() => {window.open("https://github.com/killianronan/");}}/>
            </div>
          </div>
          <div className="image-container">
            <div className="development-image"></div>
          </div>
        </div>
      </section>
  );
}

export default Home;
