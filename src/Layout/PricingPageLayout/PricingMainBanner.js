import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import SocialMediaContact from "../../Components/Common/SocialMediaContact";
import AboutUsFrom from "../../Components/Common/AboutUsForm/AboutUsFrom";
import { Link } from "react-router-dom";
import GetStarted from "../../Components/Common/Buttons/GetStarted";

const PricingMainBanner = () => {
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
                  From envisioning your web identity to advertising it on the internet, we demystify and fulfill all your digital needs for your brand to go big! Pick a <strong><Link to='creative-design-packages' className='text-decoration-none'>full branding package</Link></strong> that is ideal for your brand.
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

export default PricingMainBanner;
