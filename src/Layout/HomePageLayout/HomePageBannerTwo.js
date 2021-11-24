import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { CHANGE_MODAL } from "../../Store/Action";
import { useDispatch } from "react-redux";

const HomePageBannerTwo = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="section2 pb-5" id="section2">
        <Container>
          <Row>
            <Col lg={6} className="ota_Bg">
              <Fade left>
                <div className="whyChooseOta">
                  <h1>Why Choose</h1>
                  <h2>Outsource to Asia</h2>
                  <Row>
                    <Col className="col-1">
                      <i className="fas fa-long-arrow-alt-right text-primary"></i>
                    </Col>
                    <Col className="col-11">
                      <h3>A Wide Array of Services Provided Under One Roof</h3>
                      <p>
                        From the nascent stages of design & development to
                        advertising it on the internet, we offer a slew of
                        services to help you establish your brand in the digital
                        world. SEO, SEM, SMO, web development, CMS development,
                        e-commerce development, and mobile app development are
                        just a few of the services our full-service digital
                        marketing agency delivers.
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="whyChoose">
                  <Row>
                    <Col className="col-1">
                      <i className="fas fa-long-arrow-alt-right text-primary"></i>
                    </Col>
                    <Col className="col-11">
                      <h3>
                        High-Quality Services Paired With Seamless Customer
                        Support
                      </h3>
                      <p>
                        The quality we provide is exceptional and our projects
                        always meet deadlines. We have a strict quality control
                        mechanism in place to ensure that everything we offer
                        exceeds our clients' expectations. Our customer support
                        team works around the clock for flawless communication
                        with proposed and/or existing clients.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Fade>
            </Col>
            <Col lg={6} className="m-auto">
              <Fade right>
                <div className="whyChooseOta">
                  <Row>
                    <Col className="col-1">
                      <i className="fas fa-long-arrow-alt-right text-primary"></i>
                    </Col>
                    <Col className="col-11">
                      <h3>An Awe-inspiring Digital Agency Experience</h3>
                      <p>
                        We're a bunch of young, energetic, and innovative folks
                        that are willing to go above and beyond for your
                        company. We develop eye-catching websites, engaging
                        content, strategize distinctive campaigns, and help
                        companies expand by turning followers into customers.
                        We've established a number of success stories by
                        assisting brands in growing their businesses. Working
                        with us means collaborating with a group of articulate
                        writers, tech geeks, and visionary minds who will assist
                        you in increasing lead generation, sales prospects, and
                        revenue.
                      </p>
                      <Row>
                        <Col lg={4} className="m-auto">
                          <Link to="/about-us" className="learn-btn">
                            Read to Learn
                          </Link>
                        </Col>
                        <Col lg={4} className="m-auto">
                          <Link
                            href="#"
                            onClick={() => dispatch(CHANGE_MODAL(true))}
                            className="getStarted-btn"
                          >
                            Get Started
                          </Link>
                        </Col>
                        <Col></Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePageBannerTwo;
