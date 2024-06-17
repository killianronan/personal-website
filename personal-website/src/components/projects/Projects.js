import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Projects.css";
import { SiScikitlearn, SiChatbot, SiStarship } from "react-icons/si";
import { FaReact, FaGithub, FaProjectDiagram } from "react-icons/fa";

const completedProjects = [
  {
    name: 'Personal Portfolio Website',
    url: 'https://github.com/killianronan/personal-website',
    description: 'Built this website using React with HTML, CSS & JS.',
    icon: <FaReact className="project-icon" />
  },
  {
    name: 'Football Match Predictor',
    url: 'https://github.com/killianronan/Premier-League-ML-Analysis',
    description: 'Created a premier league match outcome prediction system using various machine learning models in python.',
    icon: <SiScikitlearn className="project-icon" />
  },
  {
    name: 'Asclepsius Tools Chat Bot',
    url: 'https://github.com/steviejeebies/AscToolsChat',
    description: 'Helped develop a Microsoft QnA chatbot for doctors to advise patients on lifestyle changes which could improve their health.',
    icon: <SiChatbot className="project-icon" />
  },
  {
    name: 'Elderly Information Portal',
    url: 'https://github.com/ProfKevinKelly/InformaTV',
    description: 'Led a team in creating an Information Portal for the elderly, serving as team lead and Scrum Master.',
    icon: <FaProjectDiagram className="project-icon" />
  }
];

const ongoingProjects = [
  {
    name: 'Extraterrestrial Tracker App',
    url: 'https://github.com/killianronan/extraterrestrial-celestial-tracker',
    description: 'Built a web application designed to predict and notify users about upcoming celestial events.',
    icon: <SiStarship className="project-icon" />
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-wrapper">
        <div className="projects-category">
          <h3>Completed Projects</h3>
          <Carousel responsive={responsive} containerClass="carousel-container">
            {completedProjects.map((project) => (
              <div className="project-card-container" key={project.name}>
                <div className="project-card">
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
              </div>
            ))}
          </Carousel>
        </div>
        <div className="projects-category">
          <h3>Ongoing Projects</h3>
          <div className="projects-container">
            {ongoingProjects.map((project) => (
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
        </div>
      </div>
    </section>
  );
}

export default Projects;
