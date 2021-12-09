import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";
import loGo from "../../../Assets/logo/logo.png";
import Pakistan from "../../../Assets/footer/pakistan.png";
import Pennsylvania from "../../../Assets/footer/pennsylvania.png";

function Footer() {
  if (window.location.pathname === "/thank-you") {
    return <></>;
  }
  return (
    <div>
      <div className="footer">
        <Container>
          <Row>
            <Col lg={3} className="pr-4 pl-4">
              <div className="logo mb-3">
                <img className="w-100" width="" src={loGo} alt="outsourcetoasia"></img>
              </div>
              <p>
                Pioneering innovative digital experiences that fuel startups, scale-up enterprises, and help family businesses embrace digital transformation.
              </p>
            </Col>
            <Col lg={2} className="ps-5">
              <h6 className="mb-4">Quick Links</h6>
              <div className="footerUl">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} className="ps-5">
              <h6 className="mb-4">Outsourcing Plans </h6>
              <div className="footerUl">
                <ul>
                  <li>
                    <Link to="/white-labelling">White Labelling</Link>
                  </li>
                  <li>
                    <Link to="/digital-startup">Digital Startup</Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/refund-policy">Refund Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} className="ps-5">
              <h6 className="mb-4">Services </h6>
              <div className="footerUl">
                <ul>
                  <li>
                    <Link to="/creative-design">Creative & Design</Link>
                  </li>
                  <li>
                    <Link to="/web-development">Web Development</Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="/app-development">App Development</Link>
                  </li>
                  <li>
                    <Link to="/video-development">Video Animation</Link>
                  </li>
                  <li>
                    <Link to="/content-writing">Content Writing</Link>
                  </li>
                  <li>
                    <Link to="/cyber-security">Cyber Security</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} className="ps-5">
              <h6 className="mb-4">Contact </h6>
              <div className="footerUl footerContact position-relative">
                <ul>
                  <li>
                    <Row>
                      <Col lg={9} className="col-9">
                        <p
                          onClick={() =>
                            window.open(
                              "https://www.google.com/maps/place/3145+Silbury+Hill,+Downingtown,+PA+19335,+USA/@39.986511,-75.7625718,17z/data=!3m1!4b1!4m5!3m4!1s0x89c658d7df8cb7c5:0x8424ebb4ac3faaa4!8m2!3d39.986511!4d-75.7603831"
                            )
                          }
                        >
                          3145 Silbury Hl. Downingtown Pennsylvania, 19335
                        </p>
                        <p>
                          <a href="mailto:info@outsourcetoasia.io">
                            info@outsourcetoasia.io
                          </a>
                        </p>
                        <p>
                          <a href="tel:+1 610-379-1236">+1 610-379-1236</a>
                        </p>
                      </Col>
                      <Col lg={3} className="col-3">
                        <img className="w-100" src={Pennsylvania} alt="Pennsylvania"></img>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col lg={9} className="col-9">
                        <p
                          onClick={() =>
                            window.open(
                              "https://www.google.com/maps/search/Suite+%23+603,+6th+Floor,+Business+Avenue,+Block+6,+PECHS,+Karachi,+Pakistan+/@24.8621898,67.0696829,17z/data=!3m1!4b1"
                            )
                          }
                        >
                          Suite # 603, 6th Floor, Business Avenue, Block 6,
                          PECHS, Karachi, Pakistan
                        </p>
                        <p>
                          <a href="mailto:info@outsourcetoasia.io">
                            info@outsourcetoasia.io
                          </a>
                        </p>
                        <p>
                          <a href="tel:02133374275">021-333-74275</a>
                        </p>
                      </Col>
                      <Col lg={3} className="col-3 m-auto">
                        <img className="w-100" src={Pakistan} alt="Pakistan"></img>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <hr></hr>
        <Container>
          <Row className="pt-4 ">
            <Col lg={8}>
              <p>
                © Copyright 2021 by{" "}
                <Link to="/" className="text-light">
                  <strong>Outsource to Asia</strong>
                </Link>
                , All Rights Reserved.
              </p>
            </Col>
            <Col lg={4}>
              <div className="footerSocialLink text-center">
                <a
                  target="_blank"
                  href="https://www.facebook.com/outsourcetoasiallc/"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/outsourcetoasia/?utm_medium=copy_link"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/outsource-to-asia"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCu5Sl1qH8Jr3yaia0c2lTzw"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
