import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiUikit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiSwift,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" >
      <SiSwift />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <DiUikit/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      
    </Row>
  );
}

export default Techstack;
