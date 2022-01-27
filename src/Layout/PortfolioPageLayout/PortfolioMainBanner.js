import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SocialMediaContact from "../../Components/Common/SocialMediaContact";
import AboutUsFrom from "../../Components/Common/AboutUsForm/AboutUsFrom";
import "./PortfolioPageLayout.css";
import { CHANGE_MODAL } from "../../Store/Action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const PortfolioMainBanner = () => {
  const dispatch = useDispatch();
  return (
    <div className="PortfolioMainBanner">
      <div className="PortfolioBanner">
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
                      Portfolio
                    </text>
                  </g>
                </svg>
                <h1>Guaranteeing</h1>
                <h3>
                  <strong><Link to='/' className='text-decoration-none text-light'>Supreme Quality Services</Link></strong> and an Optimal Experience Always and
                  Forever
                </h3>
                <Row>
                  <Col lg={4}>
                    <a
                      onClick={() => dispatch(CHANGE_MODAL(true))}
                      href="#"
                      className="getStarted-btn"
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
  );
};

export default PortfolioMainBanner;
