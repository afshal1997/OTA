import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CallCenterImg01 from "../../../Assets/PlansAssets/CallCenter/CallCenterImg01.png";
import Bounce from "react-reveal/Bounce";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";
import { Link } from 'react-router-dom'
const CallCentreOutsourcingSection = () => {
  return (
    <div className="CallCentreOutsourcingbg pt-5 pb-5">
      <Container>
        <Row>
          <Col lg={6}>
            <Bounce right cascade>
              <img className="w-75" src={CallCenterImg01} alt="CallCenterImg01"></img>
            </Bounce>
          </Col>
          <Col lg={6} className="m-auto">
            <Bounce left cascade>
              <div className="Operating">
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
                      Outsourcing
                    </text>
                  </g>
                </svg>
                <h1>Call Center</h1>
                <p>
                  <b>We call them, You choose them</b>
                </p>
                <h5>
                  <em>From <strong>Inbound and Outbound call center outsourcing</strong> to telemarketing and tech support, we handle and resolve customer queries, pitch sales to desired demographic, and churn <strong><Link to='/digital-startup' className='text-decoration-none'> leads into revenue </Link></strong>.</em>
                </h5>
                <Row>
                  <Col lg={4}>
                    <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />
                  </Col>
                </Row>
              </div>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallCentreOutsourcingSection;
