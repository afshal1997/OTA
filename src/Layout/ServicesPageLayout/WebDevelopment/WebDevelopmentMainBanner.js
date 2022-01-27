import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutUsFrom from "../../../Components/Common/AboutUsForm/AboutUsFrom";
import SocialMediaContact from "../../../Components/Common/SocialMediaContact";
import Fade from "react-reveal/Fade";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const WebDevelopmentMainBanner = () => {
  return (
    <div className="WebDevelopmentMainBanner">
      <div className="DigitalStartupMainBanner">
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="Outsource mt-5 mb-5">
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
                      Traffic
                    </text>
                  </g>
                </svg>
                <h1>
                  <Fade top cascade>
                    Web Development
                  </Fade>
                </h1>
                <p>
                  <strong>Web design</strong> that develops connections and improves notoriety. Our <strong>custom web</strong> <strong>development company</strong> helps your website persuade your audience to learn more, stay longer, and make a move.
                </p>
                <Row>
                  <Col lg={4}>
                    <GetStarted buttonClass={'getStarted-btn'} buttonText={'Get Started'} />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} className="pt-5">
              <AboutUsFrom />
            </Col>
          </Row>
        </Container>
      </div>
      <SocialMediaContact />
    </div>
  );
};

export default WebDevelopmentMainBanner;
