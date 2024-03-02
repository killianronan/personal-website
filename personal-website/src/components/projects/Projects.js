import React from "react";
import "./Projects.css";
import Card from 'react-bootstrap/Card';
import { SiScikitlearn } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiChatbot } from "react-icons/si";

let projects = [
  {
    name: 'Personal Portfolio Website',
    url: 'https://github.com/killianronan/personal-website',
    description: 'Built this website from scratch using React with HTML + CSS.',
    icon: <FaReact className="project-icon"/>
  },
  {
    name: 'Premier League Match Predictor',
    url: 'https://github.com/killianronan/Premier-League-ML-Analysis',
    description: 'Created a premier league match outcome prediction system using various machine learning models with scikit-learn in python.',
    icon: <SiScikitlearn className="project-icon"/>
  },
  {
    name: 'Asclepsius Tools Chat Bot',
    url: 'https://github.com/steviejeebies/AscToolsChat',
    description: 'Contributed in the development of a Microsoft QnA chatbot for doctors to advise patients on lifestyle changes which could improve their health.',
    icon: <SiChatbot className="project-icon"/>
  },
  {
    name: 'Elderly Information Portal',
    url: 'https://github.com/ProfKevinKelly/InformaTV',
    description: 'Led a team in creating an Information Portal for the elderly, serving as team lead and Scrum Master.',
    icon: <SiScikitlearn className="project-icon"/>
  }
];

function Projects() {
  return (
    <section className="section">
      <div className="projects-container">
        {projects.map((project) => (
          <Card className="projects-item" key={project.name}>
            {project.icon}
            <Card.Body>
              <div className="card-body-container">
                <Card.Title className="card-title">{project.name}</Card.Title>
                <div className="icon-wrapper" onClick={() => {window.open(project.url);}}>
                  <FaGithub className="project-repo-icon"/>
                  <span className="tooltip-text">View on GitHub</span>
                </div>
              </div>
              <br></br>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
