import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutUsFrom from "../../../Components/Common/AboutUsForm/AboutUsFrom";
import SocialMediaContact from "../../../Components/Common/SocialMediaContact";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const WhiteLabellingMainBanner = () => {
  return (
    <div className="WhiteLabellingMainBanner">
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
                      Platform
                    </text>
                  </g>
                </svg>
                <h1>
                  <Fade top cascade>
                    Affordable &#38; Reliable
                  </Fade>
                </h1>
                <h3>
                  <Bounce right cascade>
                    White Labelling Platform
                  </Bounce>
                </h3>
                <p>
                  <Bounce left cascade>
                    For Digital Agencies.
                  </Bounce>
                </p>
                <Row>
                  <Col lg={4}>
                    <GetStarted buttonText={`Get Started`} buttonClass={`getStarted-btn`} />
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

export default WhiteLabellingMainBanner;
