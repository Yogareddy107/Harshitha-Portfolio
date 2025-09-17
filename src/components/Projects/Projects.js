import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
              title="Eye-Movement-Based Human-Computer Interface "
              description="Developed a hands-free mouse system using eye tracking and blink detection, improving cursor accuracy by 30%.
 • Applied computer vision and machine learning techniques to enhance accessibility for mobility-impaired users."
              ghLink="https://github.com/Harshi8043"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
          
              isBlog={false}
              title="Random Password Generator"
              description="Developed a customizable password generator, increasing password strength by 40%.
 • Added real-time strength indicator, reducing feedback time by 30%."
              ghLink="https://github.com/Harshi8043"
              demoLink=""
            />
          </Col>

          
          

          

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
