import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCards from "./ServicesCards";

import Zoom from "react-reveal/Zoom";
import OurService from "../../Components/Common/OurService/OurService";
import Heading from "../../Components/Common/PagesHeadings/Heading";
import VideoTestimonal from "../../Components/Common/VideoTestimonal/VideoTestimonal";
import { servicesCards } from '../../Constants/ServicesCards'
import './HomePage.css'
const HomePageBannerFour = () => {

  return (
    <OurService>
      <div>
        <Container>
          <Heading
            Heading="Our Services"
            Tagline="Outsource Any Of Your Project To Us."
            MainHeading="Expertise"
          />
          <Row className="mt-5">
            {React.Children.toArray(
              servicesCards.map(({ icon, title, details, href }) => (
                <Col lg={3}>
                  <Zoom>
                    <ServicesCards
                      image={icon}
                      title={title}
                      details={details}
                      href={href}
                    />
                  </Zoom>
                </Col>
              ))
            )}
          </Row>
          <br />
          <br />
          <Row>
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
      </div>
    </OurService>
  );
};

export default HomePageBannerFour;
