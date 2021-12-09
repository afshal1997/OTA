import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ServicesCards from "./ServicesCards";
import Icon1 from "../../Assets/HomeAssets/icon.png";
import Icon2 from "../../Assets/HomeAssets/icon2.png";
import Icon3 from "../../Assets/HomeAssets/icon3.png";
import Icon4 from "../../Assets/HomeAssets/icon4.png";
import Icon5 from "../../Assets/HomeAssets/icon5.png";
import Icon6 from "../../Assets/HomeAssets/icon6.png";
import Icon7 from "../../Assets/HomeAssets/icon7.png";
import Icon8 from "../../Assets/HomeAssets/icon8.png";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import OurService from "../../Components/Common/OurService/OurService";
import Heading from "../../Components/Common/PagesHeadings/Heading";
import VideoTestimonal from "../../Components/Common/VideoTestimonal/VideoTestimonal";
import { useDispatch } from "react-redux";
import { CHANGE_MODAL } from "../../Store/Action";
import GetStarted from "../../Components/Common/Buttons/GetStarted";
const HomePageBannerFour = () => {
  const servicesCards = [
    {
      icon: Icon1,
      title: "Creative & Design",
      details:
        "Make a statement in the market with the aid of innovative and high-quality, immersive, and mesmerizing designs.",
      href: "/creative-design",
    },
    {
      icon: Icon2,
      title: "Web Development",
      details:
        "Building websites that provide a digital pathway to clients- driving traffic and sales alike, getting you the results you are after.",
      href: "/web-development",
    },
    {
      icon: Icon3,
      title: "Digital Marketing",
      details:
        "Elevate your brand through innovative marketing solutions, custom strategies, market insights, and immaculate execution.",
      href: "/digital-marketing",
    },
    {
      icon: Icon4,
      title: "Content Writing",
      details:
        "Employing highly impactful and creative content coupled with the latest industrial trends to give you the best digital experience.",
      href: "/content-writing",
    },
    {
      icon: Icon5,
      title: "App Development",
      details:
        "Creating robust and scalable apps, custom-made with integrating new technological advances with intuitive design to build closely tailored solutions for any sector.",
      href: "/app-development",
    },
    {
      icon: Icon6,
      title: "Video Animation",
      details:
        "Dive right into the sea of imagination, creativity, innovation, and brilliance with both 2D & 3D animation involving explainer videos, product demos, and character designs.",
      href: "/video-development",
    },
    {
      icon: Icon7,
      title: "Cyber Security",
      details:
        "Your virtual Chief Information Security Officer, delivering specialized cyber security expertise to your organization, designing a full-fledged cyber security program, and notably reducing risk.",
      href: '/cyber-security'
    },
    {
      icon: Icon8,
      title: "Ecommerce",
      details:
        "An appealing E-Commerce web development is the essence of your business. An exceptional website is more than just a beautiful store. It takes the data and delivers you the information, provides user comfort and builds your brand stronger than ever.",
      href: "/web-development"
    },
  ];
  const dispatch = useDispatch();
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
          <Row>
            <Col></Col>

            <Col lg={2}>
              <Bounce>
              <GetStarted buttonText='Get Started' buttonClass='getStarted' />

              </Bounce>
            </Col>
            <Col></Col>
          </Row>
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
