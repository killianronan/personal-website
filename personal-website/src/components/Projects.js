import React from "react";
import "./../App.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {
  return (
    <section className="section">
      <div className="projects-container">
        <Card className="projects-item" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/Users/killian.ronan/Documents/Canada Docs/personal-website/personal-website/src/assets/pngegg.png/100px270"/>
          <Card.Body>
            <Card.Title>Premier League Match Predictor</Card.Title>
            <Card.Text>
              Led a team of 3 to create a premier league match outcome prediction system using machine learning models. 
              Utilized Python for web scraping and parsing through datasets, as well as implementing machine learning models such as Regression and K-Nearest Neighbour.
            </Card.Text>
            <Button variant="primary" onClick={() => {window.open("https://github.com/killianronan/Premier-League-ML-Analysis");}}>GitHub</Button>
          </Card.Body>
        </Card>
        <Card className="projects-item" style={{ width: '18rem', backgroundColor: 'blue' }}>
          <Card.Img variant="top" src="/Users/killian.ronan/Documents/Canada Docs/personal-website/personal-website/src/assets/pngegg.png/100px270"/>
          <Card.Body >
            <Card.Title>Asclepsius Tools Chat Bot</Card.Title>
            <Card.Text>
              Contributed as a lead developer to a Microsoft QnA chatbot for doctors to advise patients on lifestyle changes.
            </Card.Text>
            <Button variant="primary" onClick={() => {window.open("https://github.com/steviejeebies/AscToolsChat");}}>GitHub</Button>
          </Card.Body>
        </Card>
        <Card className="projects-item project-background" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/Users/killian.ronan/Documents/Canada Docs/personal-website/personal-website/src/assets/pngegg.png/100px270"/>
          <Card.Body className="project-background">
            <Card.Title>Elderly Information Portal</Card.Title>
            <Card.Text className="project-background">
              Led a team in creating an Information Portal for the elderly, serving as team lead and Scrum Master.
            </Card.Text>
            <Button variant="primary" onClick={() => {window.open("(https://github.com/ProfKevinKelly/InformaTV");}}>GitHub</Button>
          </Card.Body>
        </Card>
        <Card className="projects-item" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/Users/killian.ronan/Documents/Canada Docs/personal-website/personal-website/src/assets/pngegg.png/100px270"/>
          <Card.Body>
            <Card.Title>Personal Website</Card.Title>
            <Card.Text>
              Created this website to showcase front-end & web application development skills.
            </Card.Text>
            <Button variant="primary" onClick={() => {window.open("https://github.com/killianronan/personal-website");}}>GitHub</Button>
          </Card.Body>
        </Card>
        <div className="projects-item">Project 5</div>
      </div>
    </section>
  );
}

export default Projects;
