import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import OurService from "../../../Components/Common/OurService/OurService";
import Heading from "../../../Components/Common/PagesHeadings/Heading";
import VideoTestimonal from "../../../Components/Common/VideoTestimonal/VideoTestimonal";
import { StartupPricing } from "../../../Constants/DigitalStartupPricing";
import { CHANGE_MODAL } from "../../../Store/Action";
const DigitalStartupPricing = () => {
  const dispatch = useDispatch();

  return (
    <div className="DigitalStartupPricing">
      <OurService>
        <Container>
          <Row>
            <Col lg={12} className="m-auto text-center">
              <Heading
                Heading="Starting Prices"
                tagline="With us you will get multiple benefits such as :"
                MainHeading="Pricing"
              />
            </Col>
          </Row>
          <Row className="mt-5">
            {StartupPricing.map(
              ({
                type,
                pricing,
                description,
                services,
                classes,
                applyNowButton,
              }) => {
                return (
                  <Col lg={4} className="text-center mb-5">
                    <div className={`card PricingCard ${classes}`}>
                      <h2>{type}</h2>
                      <h3>
                        <span>USD -</span>
                        {pricing}{" "}
                      </h3>
                      <div className="textBox">
                        <p>{description}</p>
                      </div>
                      <ul>
                        {services.map((service) => {
                          return <li>{service}</li>;
                        })}
                      </ul>
                      <a
                        href="javascript:void(0)"
                        onClick={() => dispatch(CHANGE_MODAL(true))}
                        className={applyNowButton.buttonStyling}
                      >
                        {applyNowButton.buttonText}
                      </a>
                    </div>
                  </Col>
                );
              }
            )}
          </Row>
          <Row className="mt-5">
            <Col lg={4}></Col>
            <Col lg={6} className="m-auto">
              <div className="watch">
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
                      Watch
                    </text>
                  </g>
                </svg>
              </div>
            </Col>
          </Row>
          <VideoTestimonal />
        </Container>
      </OurService>
    </div>
  );
};

export default DigitalStartupPricing;
