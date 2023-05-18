import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Time Time Keeper"
              description="Introducing the ultimate timer app – a simple and intuitive solution for all your timing needs! Simplify your life with the most efficient timer app! With its user-friendly interface, and managing multiple timers has never been easier. Get your hands on timer app!"
              demoLink="https://apps.apple.com/in/app/time-time-keeper/id1671096673?platform=iphone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="OSAT-Video Compositor"
              description="OSAT-VideoCompositor is an open source project which allow iOS app developers to annotate and augment a video file using Apple's native Video composition APIs."
              ghLink="https://github.com/OSAT-OpenSourceAppleTech/OSAT-VideoCompositor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={true}
              title="UIKit, Pull Down Menu Demo"
              description="Implement pull down menu in iOS (Swift 5+). To Open this project just open pullDownMenuSpike.xcodeproj file in XCode and click on play button."
              ghLink="https://medium.com/@rohit236c/ios-pull-down-menus-the-newer-way-of-interaction-a255ceb3a28e"   
              demoLink="https://github.com/rohshar6/Pull-Down-Menu-Demo"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
