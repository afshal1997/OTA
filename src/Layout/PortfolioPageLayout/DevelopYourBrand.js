import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PortfolioPageLayout.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Shape1 from "../../Assets/Portfolio/shape_6.png";
import Shape2 from "../../Assets/Portfolio/shape_8.png";
import Shape3 from "../../Assets/Portfolio/shape_9.png";
const DevelopYourBrand = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="DevelopYourBrand">
      <Container fluid>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="portfolio-heading smartWork mt-5 mb-5">
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
                    OTA Portfolio
                  </text>
                </g>
              </svg>
              <h1 className="text-center">Developing Your Brand</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-1">
            <div className="portfolio-content">
              <div
                className="image-shape-1"
                data-parallax='{"y" : 100, "rotateY":800}'
              >
                <img src={Shape2} data-aos="fade-up" data-aos-delay="300" />
              </div>
            </div>
          </Col>

          <Col className="col-1 m-auto me-0">
            <div className="portfolio-content">
              <div
                className="image-shape-2 aos-init aos-animate"
                data-parallax='{"y" : 100, "rotateY":800}'
              >
                <img
                  src={Shape1}
                  data-aos="flip-right"
                  data-aos-delay="300"
                  data-aos-once={false}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-1 m-5">
            <div className="portfolio-content">
              <div className="image-shape-3 aos-init aos-animate">
                <img
                  data-aos-easing="ease-in-out"
                  data-parallax='{"y" : 100, "rotateY":700}'
                  src={Shape3}
                  data-aos="zoom-out-left"
                  data-aos-delay="150"
                  data-aos-once={false}
                />
              </div>
            </div>
          </Col>
          <Col className="col-1 p-5 m-auto me-0">
            <div className="portfolio-content">
              <div className="image-shape-4 aos-init aos-animate">
                <img
                  data-aos-easing="ease-in-out"
                  src={Shape1}
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  data-aos-once={false}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DevelopYourBrand;
