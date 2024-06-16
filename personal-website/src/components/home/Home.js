import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Home.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section className="section">
      <div className="home-container">
        <header className="greeting-container">
          <h1 className="heading">
            Hello there <span className="wave">👋 </span>
          </h1>
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
          <nav className="icon-list">
            <FaGithub
              className="icon github"
              aria-label="GitHub"
              onClick={() => {
                window.open("https://github.com/killianronan/");
              }}
            />
            <FaLinkedin
              className="icon linkedin"
              aria-label="LinkedIn"
              onClick={() => {
                window.open("https://www.linkedin.com/in/killian-ronan-9b5150194/");
              }}
            />
            <FaInstagram
              className="icon insta"
              aria-label="Instagram"
              onClick={() => {
                window.open("https://instagram.com/killianronan99");
              }}
            />
          </nav>
        </header>
        <aside className="image-container">
          <div className="development-image"></div>
        </aside>
      </div>
    </section>
  );
}

export default Home;
