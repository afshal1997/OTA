import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./PortfolioPageLayout.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Shape1 from "../../Assets/Portfolio/shape_6.png";
import Shape2 from "../../Assets/Portfolio/shape_8.png";
import Shape3 from "../../Assets/Portfolio/shape_9.png";
import Akaria from "../../Assets/Portfolio/WebDevelopment/Akaria.jpg";
import BlackBoxMedia from "../../Assets/Portfolio/WebDevelopment/BlackBoxMedia.jpg";
import BusinessMadeEazi from "../../Assets/Portfolio/WebDevelopment/BusinessMadeEazi.jpg";
import CalsAutoRepairCenter from "../../Assets/Portfolio/WebDevelopment/CalsAutoRepairCenter.jpg";
import DopeStudios from "../../Assets/Portfolio/WebDevelopment/DopeStudios.jpg";
import FamilyGovernmentAgency from "../../Assets/Portfolio/WebDevelopment/FamilyGovernmentAgency.jpg";
import knitTech from "../../Assets/Portfolio/WebDevelopment/knitTech-Inc.jpg";
import MarvelMarketing from "../../Assets/Portfolio/WebDevelopment/MarvelMarketing.jpg";
import RolixAutomotive from "../../Assets/Portfolio/WebDevelopment/RolixAutomotive.jpg";
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
          <Col lg={4} className="m-auto">
            <div className="portfolio-heading smartWork">
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
        <Row className="position-absolute">
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

        <Row className="position-absolute">
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
      <Container>
        <div className="portfolioTabs">
          <Tabs>
            <TabList>
              <Tab>WEB DEVELOPMENT</Tab>
              <Tab>BRANDING & CREATIVE</Tab>
              <Tab>MOBILE APPS</Tab>
              <Tab>SOCIAL MEDIA</Tab>
              <Tab>VIDEO DEVELOPMENT</Tab>
            </TabList>
            <TabPanel>
              <Row>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={Akaria} alt=""></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={BlackBoxMedia} alt=""></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={BusinessMadeEazi} alt=""></img>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img
                      className="w-100"
                      src={CalsAutoRepairCenter}
                      alt=""
                    ></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={DopeStudios} alt=""></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={FamilyGovernmentAgency} alt=""></img>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={knitTech} alt=""></img>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={MarvelMarketing} alt=""></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={RolixAutomotive} alt=""></img>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};
export default DevelopYourBrand;
