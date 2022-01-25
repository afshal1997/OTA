import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutUsFrom from "../../../Components/Common/AboutUsForm/AboutUsFrom";
import SocialMediaContact from "../../../Components/Common/SocialMediaContact";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { CHANGE_MODAL } from "../../../Store/Action";
import { useDispatch } from "react-redux";

const CallCenterMainBanner = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="plansPageMainBanner">
        <div className="PlansMainBanner">
          <Container>
            <Row>
              <Col lg={6} className="m-auto">
                <div className="smartWork mt-5 mb-5">
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
                        Quality
                      </text>
                    </g>
                  </svg>
                  <h1>
                    <Fade top cascade>
                      Customer support
                    </Fade>
                  </h1>
                  <h3>
                    We’re Here To Help
                  </h3>
                  <p>
                    Cut costs and take your <strong>customer support and sales operation</strong> to the next level with <strong>BPO outsourcing</strong> that caters to your consumer’s needs and guarantees a highly dependable and helpful client experience.
                  </p>
                  <Row>
                    <Col lg={4}>
                      <a
                        href="javascript:void(0)"
                        onClick={() => dispatch(CHANGE_MODAL(true))}
                        className="getStarted-btn"
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
    </div>
  );
};

export default CallCenterMainBanner;
