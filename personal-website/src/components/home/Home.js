import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "./Home.css";
import NetworkVisualization from "./NetworkVisualization";

function Home() {
  return (
    <section className="section min-h-screen relative overflow-hidden">
      <NetworkVisualization />
      <div className="relative z-10 home-container">
        <header className="greeting-container">
          <h1 className="heading featured-title">
            Hello there <span className="wave">👋</span>
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
                  deleteSpeed: 50
                }}
              />
            </div>
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
            <FaInstagram
              className="icon insta"
              aria-label="Instagram"
              title="Instagram"
              onClick={() => {
                window.open("https://instagram.com/killianronan99");
              }}
            />
          </nav>
        </header>
      </div>
    </section>
  );
}

export default Home;
