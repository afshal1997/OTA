import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { useDispatch } from "react-redux";
import AboutUsFrom from "../../Components/Common/AboutUsForm/AboutUsFrom";
import { CHANGE_MODAL } from "../../Store/Action";
import SocialMediaContact from "../../Components/Common/SocialMediaContact/";
const CaseStudyBanner = () => {
  const dispatch = useDispatch();
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
                      Case Study
                    </text>
                  </g>
                </svg>
                <h1>
                  <Fade top cascade>
                    Case Study
                  </Fade>
                </h1>
                <p>
                  Before you can outsource your IT production, you have to
                  make sure that you and your company are in safe hands. A
                  case study of our clients and how we have helped them might
                  vouch on our behalf.
                </p>

                <Row>
                  <Col lg={4}>
                    {/* <a
                      href="#"
                      className="getStarted-btn"
                      onClick={() => {
                        dispatch(CHANGE_MODAL(true));
                      }}
                    >
                      Get Started
                    </a> */}
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

export default CaseStudyBanner;
