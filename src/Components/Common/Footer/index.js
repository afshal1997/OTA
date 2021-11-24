import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";
import loGo from "../../../Assets/logo/logo.png";

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
              <div className="logo">
                <img className="w-100" src={loGo}></img>
              </div>
              <p>
                Outsource to Asia is a premier full-service digital agency, creating custom strategies for each of our clients based on their needs and goals. We focus on delivering data-driven and result-oriented services that bring revenue and strengthen brand identity.

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
                    <Link to="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Security Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Refund Policy</Link>
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
                    <p>
                      Suite # 603, 6th Floor, Business Avenue, Block 6, PECHS,
                      Karachi, Pakistan
                    </p>
                    <p>
                      <a href="mailto:info@outsourcetoasia.co">
                        info@outsourcetoasia.co
                      </a>
                    </p>
                    <p>
                      <a href="tel:+92 21-34804850">+92 21-34804850</a>
                    </p>
                  </li>
                  <li>
                    <p>3145 Silbury Hl. Downingtown Pennsylvania, 19335</p>
                    <p>
                      <a href="mailto:info@outsourcetoasia.co">
                        info@outsourcetoasia.co
                      </a>
                    </p>
                    <p>
                      <a href="tel:+1 631-250-6471">+1 631-250-6471</a>
                    </p>
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
                © Copyright 2021 by <strong>Outsource to Asia</strong>, All
                Rights Reserved.
              </p>
            </Col>
            <Col lg={4}>
              <div className="footerSocialLink text-center">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
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
