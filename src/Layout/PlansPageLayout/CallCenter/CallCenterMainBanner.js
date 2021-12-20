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
                        Customer
                      </text>
                    </g>
                  </svg>
                  <h1>
                    <Fade top cascade>
                      Customer Services!
                    </Fade>
                  </h1>
                  <h3>
                    <Bounce right cascade>
                      We Offer instant and quality
                    </Bounce>
                  </h3>
                  <p>
                    <Bounce left cascade>
                      We offer instant and quality customer service to our
                      clients helping them cater their customers needs and wants
                      to ensure a reliable and helpful user experience !
                    </Bounce>
                  </p>
                  <Row>
                    <Col lg={4}>
                      <a
                        href="javascript:void(0)"
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
    </div>
  );
};

export default CallCenterMainBanner;
