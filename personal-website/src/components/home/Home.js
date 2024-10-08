import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import "./Home.css";
import NetworkVisualization from "./NetworkVisualization";

function Home() {
  return (
    <section className="section min-h-screen relative overflow-hidden">
      <NetworkVisualization />
      <div className="relative z-10 home-container">
        <header className="greeting-container">
          <h1 className="heading featured-title">
            Hi there <span className="wave">👋</span> I'm <span style={{color:'#c073ff'}}>Killian</span>.
            A passionate <span style={{color:'#c073ff'}}>Software Engineer</span>.
          </h1>
          <div className="text-container">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button expand"></span>
              </div>
            </div>
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
                  delay: 75, 
                  pauseFor: 2000 
                }}
              />
            </div>
          </div>
          <div className="button-container">
            <Link to="projects" spy={true} smooth={true} duration={500}>
              <button className="cta-button">
                View My Projects
              </button>
            </Link>
            <a href="#blog" className="cta-button">
              See My Blog
            </a>
          </div>
          <nav className="icon-list">
            <FaGithub
              className="icon github"
              aria-label="GitHub"
              title="GitHub"
              onClick={() => {
                window.open("https://github.com/killianronan/");
              }}
            />
            <FaLinkedin
              className="icon linkedin"
              aria-label="LinkedIn"
              title="LinkedIn"
              onClick={() => {
                window.open("https://www.linkedin.com/in/killian-ronan-9b5150194/");
              }}
            />
          </nav>
        </header>
      </div>
    </section>
  );
}

export default Home;
