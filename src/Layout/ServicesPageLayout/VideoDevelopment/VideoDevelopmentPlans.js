import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import OurService from "../../../Components/Common/OurService/OurService";
import Heading from "../../../Components/Common/PagesHeadings/Heading";
import VideoTestimonal from "../../../Components/Common/VideoTestimonal/VideoTestimonal";
import { VideoDevelopmentPricing } from "../../../Constants/VideoDevelopmentPricingPage";
import { CHANGE_MODAL } from "../../../Store/Action";

const VideoDevelopmentPlans = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <OurService>
        <Container>
          <Row>
            <Col lg={12} className="m-auto">
              <Heading
                Heading="Video Animation"
                tagline="Introducing Outsource To Asia new pricing packages."
                MainHeading=""
              />
            </Col>
          </Row>
          <Row className="mt-5">
            {VideoDevelopmentPricing.map(
              ({ type, pricing, services, classes, applyNowButton }) => {
                return (
                  <Col lg={4} className="text-center mb-5">
                    <div className={`card PricingCard pt-0 ${classes}`}>
                      <div className="PackageAndPricing">
                        <h4>{type}</h4>
                        <h3>
                          <span>USD -</span>
                          {pricing} <span>sec</span>{" "}
                        </h3>
                      </div>
                      <ul>
                        {services.map((service) => {
                          return <li>{service}</li>;
                        })}
                      </ul>
                      <a
                        className={applyNowButton.buttonStyling}
                        href={applyNowButton.linkText}
                        onClick={() => dispatch(CHANGE_MODAL(true))}
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

export default VideoDevelopmentPlans;
