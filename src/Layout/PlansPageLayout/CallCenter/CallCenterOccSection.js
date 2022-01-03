import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CallCenterImg03 from "../../../Assets/PlansAssets/CallCenter/CallCenterImg03.png";
import Bounce from "react-reveal/Bounce";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";
const CallCenterOccSection = () => {
  return (
    <div className="PlanOccBg">
      <Container>
        <Row className="mt-5">
          <Col lg={6}>
            <Bounce right cascade>
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
                      OCC
                    </text>
                  </g>
                </svg>
                <h1>
                  Why OCC <br></br> is Necessary?
                </h1>
                <p>
                  It provides an edge to the operating costs comes from good
                  infrastructure, a long recruitment process and 24/7 operating
                  cost of the department.
                </p>
                <h5>
                  <i>
                    <b>According to Statista</b>
                  </i>
                </h5>
                <p>
                  “Businesses enjoy a 59% cut cost by hiring a customer service
                  team”.
                </p>
                <p>
                  In the age of the internet where bad rumors and negative
                  reviews can ruin a business but outsourcing a Call Centre
                  takes charge of keeping customers happy and makes their
                  shopping experience with your brand delightful to keep you
                  away from the worries of bad publicity.
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
            <Bounce left cascade>
              <img className="w-100" src={CallCenterImg03} alt="CallCenterImg03"></img>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallCenterOccSection;
