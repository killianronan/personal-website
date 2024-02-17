import React from "react";
import "./Projects.css";
import Card from 'react-bootstrap/Card';
import { SiScikitlearn } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiChatbot } from "react-icons/si";

function Projects() {
  return (
    <section className="section">
      <div className="projects-container">
        <Card className="projects-item">
          <FaReact className="project-icon"/>
          <Card.Body>
            <div className="card-body-container">
              <Card.Title className="card-title">Personal Portfolio Website</Card.Title>
              <div className="icon-wrapper" onClick={() => {window.open("https://github.com/killianronan/personal-website");}}>
                <FaGithub className="project-repo-icon"/>
                <span className="tooltip-text">View on GitHub</span>
              </div>
            </div>
            <br></br>
            <Card.Text>
              Built this website from scratch using React with HTML + CSS.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="projects-item">
          <SiScikitlearn className="project-icon"/>
          <Card.Body>
            <div className="card-body-container">
              <Card.Title className="card-title">Premier League Match Predictor</Card.Title>
              <div className="icon-wrapper" onClick={() => {window.open("https://github.com/killianronan/Premier-League-ML-Analysis");}}>
                <FaGithub className="project-repo-icon"/>
                <span className="tooltip-text">View on GitHub</span>
              </div>
            </div>
            <br></br>
            <Card.Text>
                Created a premier league match outcome prediction system using various machine learning models with scikit-learn in python. 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="projects-item">
          <SiChatbot className="project-icon"/>
          <Card.Body>
            <div className="card-body-container">
              <Card.Title className="card-title">Asclepsius Tools Chat Bot</Card.Title>
              <div className="icon-wrapper" onClick={() => {window.open("https://github.com/steviejeebies/AscToolsChat");}}>
                <FaGithub className="project-repo-icon"/>
                <span className="tooltip-text">View on GitHub</span>
              </div>
            </div>
            <br></br>
            <Card.Text>
              Contributed in the development of a Microsoft QnA chatbot for doctors to advise patients on lifestyle changes which could improve their health.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="projects-item">
          <SiScikitlearn className="project-icon"/>
          <Card.Body>
            <div className="card-body-container">
              <Card.Title className="card-title">Elderly Information Portal</Card.Title>
              <div className="icon-wrapper" onClick={() => {window.open("https://github.com/ProfKevinKelly/InformaTV");}}>
                <FaGithub className="project-repo-icon"/>
                <span className="tooltip-text">View on GitHub</span>
              </div>
            </div>
            <br></br>
            <Card.Text>
              Led a team in creating an Information Portal for the elderly, serving as team lead and Scrum Master.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default Projects;
