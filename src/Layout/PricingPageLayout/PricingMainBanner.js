import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import SocialMediaContact from "../../Components/Common/SocialMediaContact";
import AboutUsFrom from "../../Components/Common/AboutUsForm/AboutUsFrom";
import { CHANGE_MODAL } from "../../Store/Action";
import { useDispatch } from "react-redux";

const PricingMainBanner = () => {
  const dispatch = useDispatch();
  return (
    <div className="PricingMainBanner">
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
                      Packages
                    </text>
                  </g>
                </svg>
                <h1>
                  <Fade top cascade>
                    Pricing
                  </Fade>
                </h1>
                <p>
                  <Bounce left cascade>
                    From envisioning your web identity to advertising it on the internet, we fulfill all your digital needs for your brand to go big! Choose a package that is right for your business.
                  </Bounce>
                </p>
                <Row>
                  <Col lg={4}>
                    <a
                      href="#"
                      onClick={() => dispatch(CHANGE_MODAL(true))}
                      class="getStarted-btn"
                    >
                      Get Started
                    </a>
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

export default PricingMainBanner;
