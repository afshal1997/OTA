import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CallCenterImg02 from "../../../Assets/PlansAssets/CallCenter/CallCenterImg02.png";
import Bounce from "react-reveal/Bounce";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";
import { Link } from "react-router-dom";

const CallCenterServices = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <Bounce right cascade>
              <img className="w-100" src={CallCenterImg02} alt="CallCenterImg02"></img>
            </Bounce>
          </Col>
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
                      Services
                    </text>
                  </g>
                </svg>
                <h1>
                  Making Clients Happy
                </h1>
                <p>
                  If you are in the service industry, you would realize how hard it is to please clients Our objective at <strong><Link to='/' className='text-decoration-none'>Outsource to Asia</Link></strong> is to give our clients the best staff available. We will ensure that your customers' demands are met with our <strong>call centre outsourcing services</strong>. We understand that many of our clients have concerns regarding <strong>contact centre outsourcing</strong>, which is why we are here to assist. We are one of the finest <strong>inbound call center outsourcing</strong> out there and can handle all communication channels, including phone, chat, text, and email.
                </p>
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

export default CallCenterServices;
