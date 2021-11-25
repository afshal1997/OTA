import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import AboutUsForm from "../../Components/Common/AboutUsForm/AboutUsFrom";
import SocialMediaContact from "../../Components/Common/SocialMediaContact";
import { CHANGE_MODAL } from "../../Store/Action";
const ContactUsMainBanner = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="contactUsPageBanner">
        <div className="contactUsMainBanner">
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
                        Now !
                      </text>
                    </g>
                  </svg>
                  <h1 className="mt-0">Contact Us</h1>
                  <h3>Need A Hand? We Would Love To Hold You</h3>
                  <p>
                    From answering entrepreneur’s queries or giving ideas to a
                    veteran brand; we do it all. Hit us up for a free
                    consultation! With our vast portfolio of high end clients,
                    we ensure that our resources fit your guidelines either
                    you're a startup with minimum resources or an organization
                    with extensive budgets
                  </p>
                  <Row>
                    <Col lg={4}>
                      <a
                        href="#"
                        onClick={() => dispatch(CHANGE_MODAL(true))}
                        className="getStarted-btn"
                      >
                        Get Started
                      </a>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={6} className="pt-5 mt-5">
                <AboutUsForm />
              </Col>
            </Row>
          </Container>
        </div>
        <SocialMediaContact />
      </div>
    </div>
  );
};

export default ContactUsMainBanner;
