import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { SiStarship } from "react-icons/si";
import { IoIosFootball } from "react-icons/io";


const featuredProjects = [
  {
    name: 'Extraterrestrial Tracker App',
    url: 'https://github.com/killianronan/extraterrestrial-celestial-tracker',
    description: 'Built a web application designed to predict and notify users about upcoming celestial events.',
    icon: <SiStarship className="project-icon" />
  },
  {
    name: 'Football Match Predictor',
    url: 'https://github.com/killianronan/Premier-League-ML-Analysis',
    description: 'Created a football match outcome prediction system using various machine learning models in python.',
    icon: <IoIosFootball className="project-icon" />
  }
];

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
        <aside className="image-container">
          <h2 className="featured-title">Featured Projects</h2>
          <div className="featured-projects-container">
            {featuredProjects.map((project) => (
              <div className="project-card" key={project.name}>
                <div className="project-icon-container">
                  {project.icon}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-links">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="github-link">
                    <FaGithub className="project-repo-icon" />
                    <span className="tooltip-text">Open GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Home;
