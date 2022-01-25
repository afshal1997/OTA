import React from "react";
import ResourcesOutsourcingBusinessImg02 from "../../../Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessImg02.png";
import Bounce from "react-reveal/Bounce";
import { Col, Container, Row } from "react-bootstrap";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const OutsourcingHumanResources = () => {
  return (
    <div className="pt-5 pb-5">
      <Container>
        <Row>
          <Col lg={6}>
            <Bounce left cascade>
              <div className="planServicesSvg">
                <svg width="100%">
                  <defs>
                    <linearGradient id="gradient" y1="0" y2="1">
                      <stop stopColor="#054084" offset="0" />
                      <stop stopColor="#054084" offset="1" />
                    </linearGradient>
                  </defs>
                  <g>
                    <text
                      id="text"
                      y="103"
                      strokeWidth="1"
                      stroke="url(#gradient)"
                      fill="rgb(0, 0, 0,0.2)"
                    >
                      Hassle-free
                    </text>
                  </g>
                </svg>
                <h1>
                  Human Resource
                </h1>
                <p>
                  To win in the marketplace, you must first win the workplace! We make sure that your dream candidate will walk right through your doors.
                  Para: Hiring and managing employees with adequate knowledge and skillset for each new project is a time-consuming and daunting endeavor for any firm. Not only that, but it also costs you money, effort, and time. Outsource to Asia LLC, acknowledges the importance and value of your time and money, and, as a corollary, offers fully-managed <strong>human resource outsourcing services</strong> to its prestigious customers. Our goal with <strong>resource outsourcing</strong> is to allow you to focus on your core strengths while we handle the rest.
                </p>
                <Row>
                  <Col lg={4}>
                    <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />
                  </Col>
                </Row>
              </div>
            </Bounce>
          </Col>
          <Col lg={4} className="m-auto">
            <Bounce right cascade>
              <img
                className="w-100"
                src={ResourcesOutsourcingBusinessImg02}
                alt="ResourcesOutsourcingBusinessImg02"
              ></img>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OutsourcingHumanResources;
