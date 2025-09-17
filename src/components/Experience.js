import React from "react";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Experience() {
  return (
    <Container fluid className="experience-section py-5" style={{ backgroundColor: "#121212" }}>
      <h1 className="text-center mb-5" style={{ color: "#700c86" }}>My Journey</h1>

      {/* Education Section */}
      <h2 className="mb-4" style={{ color: "#700c86" }}>Education</h2>
      <Row className="mb-5">
        <Col md={12}>
          <Card className="mb-3 shadow-lg border-0" style={{ backgroundColor: "#1e1e1e", color: "white" }}>
            <Card.Body>
              <h5 style={{ color: "#700c86" }}>G. Pulla Reddy Engineering College, Kurnool, AP</h5>
              <p>Nov 2022 – June 2026</p>
              <p>B.Tech in Computer Science and Business Systems, CGPA: 9.24</p>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-lg border-0" style={{ backgroundColor: "#1e1e1e", color: "white" }}>
            <Card.Body>
              <h5 style={{ color: "#700c86" }}>Sri Chaitanya Junior College, Kurnool, AP</h5>
              <p>June 2020 – May 2022</p>
              <p>Class XII (BIE Board), Percentage: 92.8%</p>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-lg border-0" style={{ backgroundColor: "#1e1e1e", color: "white" }}>
            <Card.Body>
              <h5 style={{ color: "#700c86" }}>Sri Chaitanya Techno School, Kurnool, AP</h5>
              <p>June 2019 – April 2020</p>
              <p>Class X (SSC Board), Percentage: 100%</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Experience Section */}
      <h2 className="mb-4" style={{ color: "#700c86" }}>Experience</h2>
      <Row className="mb-5">
        <Col md={12}>
          <Card className="mb-3 shadow-lg border-0" style={{ backgroundColor: "#1e1e1e", color: "white" }}>
            <Card.Body>
              <h5 style={{ color: "#700c86" }}>Raise Digital (1Stop, Wipro) — Front-End Web Dev Intern</h5>
              <p>May 2025 – Present</p>
              <ul>
                <li>Developed and maintained responsive UIs using HTML, CSS, JavaScript, jQuery.</li>
                <li>Enhanced front-end performance by optimizing DOM manipulation and load times, improving UX by 25% across 3 projects.</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-lg border-0" style={{ backgroundColor: "#1e1e1e", color: "white" }}>
            <Card.Body>
              <h5 style={{ color: "#700c86" }}>CodSoft — Web Dev Intern (Virtual)</h5>
              <p>Nov 2024 – Dec 2024</p>
              <ul>
                <li>Developed and deployed 3 responsive web apps using HTML, CSS, and JavaScript.</li>
                <li>Created a portfolio, calculator, and landing page showcasing frontend design skills and accessibility.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Certifications Section */}
      <h2 className="mb-4" style={{ color: "#700c86" }}>Certifications</h2>
      <Row className="mb-5">
        <Col md={12}>
          <ul style={{ color: "white" }}>
            <li>Spoken Tutorials: HTML, Java</li>
            <li>Udacity: Generative AI with AWS</li>
            <li>Udemy: The Complete Web Development Bootcamp</li>
            <li>Freedom with AI: AI Masterclass</li>
            <li>Swayam NPTEL: Programming in Java</li>
            <li>Infosys Springboard: Programming in Java, Generative AI</li>
          </ul>
        </Col>
      </Row>

      {/* Achievements Section */}
      <h2 className="mb-4" style={{ color: "#700c86" }}>Achievements</h2>
      <Row className="mb-5">
        <Col md={12}>
          <Card className="mb-3 shadow-lg border-0" style={{ backgroundColor: "#1e1e1e", color: "white" }}>
            <Card.Body>
              <h5 style={{ color: "#700c86" }}>Reliance Foundation Undergraduate Scholarship</h5>
              <p>Chosen as one of 5,000 students from 50,000+ applicants.</p>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-lg border-0" style={{ backgroundColor: "#1e1e1e", color: "white" }}>
            <Card.Body>
              <h5 style={{ color: "#700c86" }}>AWS AI and ML Scholar — Amazon Web Services</h5>
              <p>June 2024 – Oct 2024</p>
              <p>Selected among 2,000 global recipients and explored AI, ML, Neural Networks, and AWS DeepRacer.</p>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-lg border-0" style={{ backgroundColor: "#1e1e1e", color: "white" }}>
            <Card.Body>
              <h5 style={{ color: "#700c86" }}>Academic Excellence Prize — GPA: 9.40</h5>
              <p>May 2024 – June 2024</p>
              <p>Secured the highest GPA (9.40) in the class and received a cash award of 1,116.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Community & Leadership Section */}
      <h2 className="mb-4" style={{ color: "#700c86" }}>Community & Leadership</h2>
      <Row>
        <Col md={12}>
          <Card className="mb-3 shadow-lg border-0" style={{ backgroundColor: "#1e1e1e", color: "white" }}>
            <Card.Body>
              <h5 style={{ color: "#700c86" }}>Class Committee Member — GPREC, Kurnool</h5>
              <p>Sept 2024 – June 2025</p>
              <p>Facilitated communication between students and faculty, resolving academic issues efficiently.</p>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-lg border-0" style={{ backgroundColor: "#1e1e1e", color: "white" }}>
            <Card.Body>
              <h5 style={{ color: "#700c86" }}>IEI Coordinator — GPREC, Kurnool</h5>
              <p>Nov 2023 – June 2024</p>
              <p>Led and executed technical events with student teams, enhancing engagement and teamwork.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
