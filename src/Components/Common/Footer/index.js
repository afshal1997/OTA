import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";
import loGo from "../../../Assets/logo/logo.png";
import Pakistan from "../../../Assets/footer/pakistan.png";
import Pennsylvania from "../../../Assets/footer/pennsylvania.png";
import { CHANGE_MODAL } from "../../../Store/Action";
import { useDispatch, useSelector } from "react-redux";
import ApplyNowModal from './../Modal/ApplyNowModal';

function Footer() {
  const { modalReducer } = useSelector((state) => state);
  const dispatch = useDispatch()
  useEffect(() => {
    const now = new Date();
    let time = now.getTime();
    const hourImMs = 60 * 60 * 1000
    const checkTimer = +localStorage.getItem('contact-ota') + hourImMs
    const estimatedTimeToShowPopup = now > checkTimer
    if (!localStorage.getItem("contact-ota") || estimatedTimeToShowPopup) {
      setTimeout(() => {
        localStorage.setItem("contact-ota", time);
        dispatch(CHANGE_MODAL(true));
      }, 10000);
    }
  }, [])

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
                <img loading='lazy' className="w-100" width="" src={loGo} alt="outsourcetoasia"></img>
              </div>
              <p>
                Pioneering innovative┬ádigital experiences that fuel startups, scale-up enterprises, and help family businesses embrace digital transformation.
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
                    <Link to="/white-label-agency">White Labelling</Link>
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
                    <Link to="/creative-design-packages">Creative & Design</Link>
                  </li>
                  <li>
                    <Link to="/web-development-services">Web Development</Link>
                  </li>
                  <li>
                    <Link to="/seo-digital-marketing">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="/ios-android-app-development">App Development</Link>
                  </li>
                  <li>
                    <Link to="/corporate-video-production">Video Animation</Link>
                  </li>
                  <li>
                    <Link to="/content-writing-services">Content Writing</Link>
                  </li>
                  <li>
                    <Link to="/cyber-security-services">Cyber Security</Link>
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
                          <a href="mailto:info@outsourcetoasia.co">
                            info@outsourcetoasia.co
                          </a>
                        </p>
                        <p>
                          <a href="tel:+16109897744">+1(610) 989-7744</a>
                        </p>
                      </Col>
                      <Col lg={3} className="col-3">
                        <img loading='lazy' className="w-100" src={Pennsylvania} alt="Pennsylvania"></img>
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
                          <a href="mailto:info@outsourcetoasia.co">
                            info@outsourcetoasia.co
                          </a>
                        </p>
                        <p>
                          <a href="tel:+923352155171">+923352155171</a>
                        </p>
                      </Col>
                      <Col lg={3} className="col-3 m-auto">
                        <img loading='lazy' className="w-100" src={Pakistan} alt="Pakistan"></img>
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
                ┬ę Copyright 2022 by{" "}
                <Link to="/" className="text-light">
                  <strong>Outsource to Asia</strong>
                </Link>
                , All Rights Reserved.
              </p>
            </Col>
            <Col lg={4}>
              <div className="footerSocialLink text-center">
                <a
                  target="blank"
                  href="https://www.facebook.com/outsourcetoasiallc/"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com/outsourcetoasia/?utm_medium=copy_link"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/company/outsource-to-asia"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.youtube.com/channel/UCu5Sl1qH8Jr3yaia0c2lTzw"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ApplyNowModal show={modalReducer.isModalOpen} />

    </div>
  );
}

export default Footer;
