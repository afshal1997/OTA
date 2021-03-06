import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutUsFrom from "../../Components/Common/AboutUsForm/AboutUsFrom";
import SocialMediaContact from "../../Components/Common/SocialMediaContact";
import Fade from "react-reveal/Fade";
import GetStarted from "../../Components/Common/Buttons/GetStarted";

const BlogMainBanner = () => {
  return (
    <div>
      <div className="BlogPageMainBanner">
        <div className="BlogMainBanner">
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
                        latest
                      </text>
                    </g>
                  </svg>
                  <h1>
                    <Fade top cascade>
                      Blogs!
                    </Fade>
                  </h1>
                  <h3>
                    Stay tuned with the latest news about Digital Marketing
                    industry.
                  </h3>
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
    </div>
  );
};

export default BlogMainBanner;
