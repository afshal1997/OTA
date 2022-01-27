import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./PortfolioPageLayout.css";
import MobileAppDevelopmentCarousal from "../../Components/Common/MobileAppDevelopmentCarousal/MobileAppDevelopmentCarousal";
import { importAll } from "../../Constants/functions";
import "../../Components/Common/Tabs/TabsStyle.css"
import { Link } from "react-router-dom";
const DevelopYourBrand = () => {
  return (
    <div className="DevelopYourBrand" id="OTAPortfolio">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
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
        <Row>
          <Col lg={7} className="m-auto mt-4">
            <p className="font-size-12 text-center text-light">
              Our team consists of experienced experts in all sectors of <strong><Link to='/seo-digital-marketing' className='text-decoration-none'>digital marketing</Link></strong>. This allows us to develop projects on a large scale, guaranteeing a supreme quality and an optimal experience.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="portfolioTabs">
          <Tabs>
            <TabList>
              <Tab>WEB DEVELOPMENT</Tab>
              <Tab>BRANDING &#38; CREATIVE</Tab>
              <Tab>MOBILE APPS</Tab>
              <Tab>SOCIAL MEDIA</Tab>
            </TabList>
            <TabPanel>

              <Row>
                {
                  React.Children.toArray
                    (
                      Object.values(importAll(require.context('../../Assets/Portfolio/WebDevelopment', false, /\.(png|jpe?g|svg)$/))).map((path, id) => {
                        return <Col lg={4}>
                          <div className="portfolioTabsCards">
                            <img className="w-100" src={`${path.default}`} alt={`ota-web-mockup-${id}`} loading='lazy'></img>
                          </div>
                        </Col>

                      })
                    )
                }
              </Row>
            </TabPanel>
            <TabPanel>
              <Row>
                {Object.values(importAll(require.context('../../Assets/Portfolio/BrandingAndCreative', false, /\.(png|jpe?g|svg)$/))).map((path, id) => {
                  return (
                    <Col lg={4}>
                      <div className="portfolioTabsCards">
                        <img className="w-100" src={path.default} alt={`branding-and-creative-${id}`} loading="lazy"
                        ></img>
                      </div>
                    </Col>
                  )
                })}
              </Row>


            </TabPanel>
            <TabPanel>
              <MobileAppDevelopmentCarousal />
            </TabPanel>
            <TabPanel>
              <Row>
                {Object.values(importAll(require.context('../../Assets/Portfolio/SocialMedia', false, /\.(png|jpe?g|svg)$/))).map((path, id) => {
                  return (
                    <Col lg={4}>
                      <div className="portfolioTabsCards">
                        <img className="w-100" src={path.default} alt={`our-social-media-posts-${id}`} loading='lazy'></img>
                      </div>
                    </Col>
                  )
                })}

              </Row>
            </TabPanel>

          </Tabs>
        </div>
      </Container>
    </div>
  );
};
export default DevelopYourBrand;