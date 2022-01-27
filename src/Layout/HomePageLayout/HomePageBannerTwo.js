import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import GetStarted from "../../Components/Common/Buttons/GetStarted";

const HomePageBannerTwo = () => {

  return (
    <div>
      <div className="section2 pb-5" id="section2">
        <Container>
          <Row>
            <Col lg={6} className="ota_Bg">
              <Fade left>
                <div className="whyChooseOta">
                  <h3 className="text-dark font-size-36 font-weight-bold">Why Choose</h3>
                  <h2>Outsource to Asia</h2>
                  <Row>
                    <Col className="col-1 mt-4">
                      <i className="fas fa-long-arrow-alt-right text-primary"></i>
                    </Col>
                    <Col className="col-11">
                      <h3>A Wide Array of Services Provided Under One Roof</h3>
                      <p>
                        From the nascent stages of design &#38; development to advertising it on the internet, we offer a slew of services to help you establish your brand in the digital world.
                        <strong><Link to='/creative-design-packages' className='text-decoration-none'>Creative Web &#38; Logo Design</Link></strong>
                        , web and app development, custom CMS & e-commerce development, SEO, SEM, SMO, Video Animation, Content Writing, and Cyber Security are just a few of the services our full-service <strong> <Link to='/seo-digital-marketing' className='text-decoration-none'>digital marketing agency</Link></strong> delivers.

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
                        Our projects are always accomplished within time, with no compromises on quality. We have a strong quality control procedure in place to guarantee that everything we supply meets and even exceeds the expectations of our clients. Our customer support team works around the clock for flawless communication with both prospects and existing clients.
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
                    <Col className="col-1 mt-3">
                      <i className="fas fa-long-arrow-alt-right text-primary"></i>
                    </Col>
                    <Col className="col-11">
                      <h3>An Awe-inspiring Digital Agency Experience</h3>
                      <p>
                        We're a cluster of young, energetic, and innovative minds that go above and beyond to solve your problems. We develop <strong><Link to='/web-development-services' className='text-decoration-none'>eye-catching websites</Link></strong>, engaging content, strategize distinctive campaigns, and help companies expand by turning followers into customers. We've established a plethora of success stories by assisting brands in <strong> <Link to="/outsource-human-resources" className='text-decoration-none'>growing their businesses online</Link> </strong>. Working with us means collaborating with a group of articulate writers, tech geeks, and visionary minds who will assist you in
                        <strong><Link to='/digital-startup' className='text-decoration-none'> increasing lead generation</Link></strong>
                        , sales prospects, and revenue.
                      </p>
                      <Row>
                        <Col lg={4} className="m-auto">
                          <Link to="/about-us" className="learn-btn">
                            Read to Learn
                          </Link>
                        </Col>
                        <Col lg={4} className="m-auto">
                          <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />

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
