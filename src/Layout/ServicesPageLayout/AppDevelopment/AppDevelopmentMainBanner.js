import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutUsFrom from "../../../Components/Common/AboutUsForm/AboutUsFrom";
import SocialMediaContact from "../../../Components/Common/SocialMediaContact";
import Fade from "react-reveal/Fade";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const AppDevelopmentMainBanner = () => {
  return (
    <div className="AppDevelopmentMainBanner">
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
                      Mobile
                    </text>
                  </g>
                </svg>
                <h1>
                  <Fade top cascade>
                    App Development
                  </Fade>
                </h1>
                <p>
                  Creating custom-built, high-performing, and digitally transformative apps for satisfying user experiences on Android and iOS alike.

                </p>
                <Row>
                  <Col lg={4}>
                    <GetStarted buttonClass={"getStarted-btn"} buttonText={"Get Started"} />
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

export default AppDevelopmentMainBanner;
