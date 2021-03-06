import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import AboutUsForm from "../../Components/Common/AboutUsForm/AboutUsFrom";
import SocialMediaContact from "../../Components/Common/SocialMediaContact";
import { CHANGE_MODAL } from "../../Store/Action";
import { Link } from 'react-router-dom'
const AboutUsMainBanner = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="aboutUsPageBanner">
        <div className="aboutUsMainBanner">
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
                        About Us
                      </text>
                    </g>
                  </svg>
                  <h1>Your Virtual Digital</h1>
                  <h3>Production Facility Based In Asia</h3>
                  <p>
                    We at Outsource to Asia provide our clients with
                    out-of-the-box solutions in the realms of web design, web
                    development, and digital marketing. Our solutions are
                    precisely tuned to the demands of a business and its kind
                    and implemented in a way that encourages business growth and
                    maximizes ROI.
                  </p>
                  <p>
                    <strong>
                      <Link to='/web-development-services' className='text-decoration-none'>Outsource Web Design And Development Services</Link>
                    </strong>
                    To A Well-Known <strong>Digital Outsourcing Agency In The United States</strong> To Expand Your Business Online. Let's Grow As One!
                  </p>
                  <Row>
                    <Col lg={4}>
                      <a
                        href="javascript:void(0)"
                        onClick={() => {
                          dispatch(CHANGE_MODAL(true));
                        }}
                        className="getStarted-btn"
                      >
                        Get Started
                      </a>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={6} className="pt-5">
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

export default AboutUsMainBanner;
