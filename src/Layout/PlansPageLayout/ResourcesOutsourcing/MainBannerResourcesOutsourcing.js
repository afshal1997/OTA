import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutUsFrom from "../../../Components/Common/AboutUsForm/AboutUsFrom";
import SocialMediaContact from "../../../Components/Common/SocialMediaContact";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const MainBannerResourcesOutsourcing = () => {
  return (
    <div>
      <div className="plansPageResourcesOutsourcingMainBanner">
        <div className="ResourcesOutsourcingMainBanner">
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
                        Outsourcing
                      </text>
                    </g>
                  </svg>
                  <h1>
                    <Fade top cascade>
                      Business Essentials
                    </Fade>
                  </h1>
                  <h3>
                    Lifting the burden off your shoulders!
                  </h3>
                  <p>
                    From <strong>outsourcing designers and developers to sales representatives and project managers</strong>, we help your organization achieve goals in minimum capacity - in both time, complexity, and infrastructure cost.
                  </p>
                  <Row>
                    <Col lg={4}>
                      <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />

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
    </div>
  );
};

export default MainBannerResourcesOutsourcing;
