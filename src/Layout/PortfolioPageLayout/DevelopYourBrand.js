import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./PortfolioPageLayout.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Akaria from "../../Assets/Portfolio/WebDevelopment/Akaria.jpg";
import BlackBoxMedia from "../../Assets/Portfolio/WebDevelopment/BlackBoxMedia.jpg";
import BusinessMadeEazi from "../../Assets/Portfolio/WebDevelopment/BusinessMadeEazi.jpg";
import CalsAutoRepairCenter from "../../Assets/Portfolio/WebDevelopment/CalsAutoRepairCenter.jpg";
import DopeStudios from "../../Assets/Portfolio/WebDevelopment/DopeStudios.jpg";
import FamilyGovernmentAgency from "../../Assets/Portfolio/WebDevelopment/FamilyGovernmentAgency.jpg";
import knitTech from "../../Assets/Portfolio/WebDevelopment/knitTech-Inc.jpg";
import MarvelMarketing from "../../Assets/Portfolio/WebDevelopment/MarvelMarketing.jpg";
import RolixAutomotive from "../../Assets/Portfolio/WebDevelopment/RolixAutomotive.jpg";
import img01 from "../../Assets/Portfolio/SocialMedia/img01.jpg";
import img02 from "../../Assets/Portfolio/SocialMedia/img02.jpg";
import img03 from "../../Assets/Portfolio/SocialMedia/img03.jpg";
import img04 from "../../Assets/Portfolio/SocialMedia/img04.jpg";
import img05 from "../../Assets/Portfolio/SocialMedia/img05.jpg";
import img06 from "../../Assets/Portfolio/SocialMedia/img06.jpg";
import img07 from "../../Assets/Portfolio/SocialMedia/img07.jpg";
import hustlepost1 from "../../Assets/Portfolio/SocialMedia/hustle-post-1.jpg";
import hustlepost2 from "../../Assets/Portfolio/SocialMedia/hustle-post-2.jpg";
import BrandingAndCreativeImg01 from "../../Assets/Portfolio/BrandingAndCreative/img01.jpg";
import BrandingAndCreativeImg02 from "../../Assets/Portfolio/BrandingAndCreative/img02.jpg";
import BrandingAndCreativeImg03 from "../../Assets/Portfolio/BrandingAndCreative/img03.jpg";
import BrandingAndCreativeImg04 from "../../Assets/Portfolio/BrandingAndCreative/img04.jpg";
import BrandingAndCreativeImg05 from "../../Assets/Portfolio/BrandingAndCreative/img05.jpg";
import BrandingAndCreativeImg06 from "../../Assets/Portfolio/BrandingAndCreative/img06.jpg";
import BrandingAndCreativeImg07 from "../../Assets/Portfolio/BrandingAndCreative/img07.jpg";
import BrandingAndCreativeImg08 from "../../Assets/Portfolio/BrandingAndCreative/img08.jpg";
import BrandingAndCreativeImg09 from "../../Assets/Portfolio/BrandingAndCreative/img09.jpg";
import BrandingAndCreativeImg10 from "../../Assets/Portfolio/BrandingAndCreative/img10.jpg";
import BrandingAndCreativeImg11 from "../../Assets/Portfolio/BrandingAndCreative/img11.jpg";
import BrandingAndCreativeImg12 from "../../Assets/Portfolio/BrandingAndCreative/img06.jpg";
import MobileAppDevelopmentCarousal from "../../Components/Common/MobileAppDevelopmentCarousal/MobileAppDevelopmentCarousal";
const DevelopYourBrand = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
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
              Our team consists of experienced experts in all sectors of digital
              marketing. This allows us to develop projects on a large scale,
              guaranteeing a supreme quality and an optimal experience.
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
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={Akaria} alt="Akaria"></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={BlackBoxMedia} alt="BlackBoxMedia"></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={BusinessMadeEazi} alt="BusinessMadeEazi"></img>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img
                      className="w-100"
                      src={CalsAutoRepairCenter}
                      alt="CalsAutoRepairCenter"
                    ></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={DopeStudios} alt="DopeStudios"></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img
                      className="w-100"
                      src={FamilyGovernmentAgency}
                      alt="FamilyGovernmentAgency"
                    ></img>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={knitTech} alt="knitTech"></img>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={MarvelMarketing} alt="MarvelMarketing"></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={RolixAutomotive} alt="RolixAutomotive"></img>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel>
              <Row id="ct-ds">
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img
                      className="w-100"
                      src={BrandingAndCreativeImg01}
                      alt="BrandingAndCreativeImg01"
                      loading='lazy'
                    ></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img
                      className="w-100"
                      src={BrandingAndCreativeImg02}
                      alt="BrandingAndCreativeImg02"
                      loading='lazy'
                    ></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img
                      loading='lazy'
                      className="w-100"
                      src={BrandingAndCreativeImg03}
                      alt="BrandingAndCreativeImg03"
                    ></img>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img
                      className="w-100"
                      loading='lazy'
                      src={BrandingAndCreativeImg04}
                      alt="BrandingAndCreativeImg04"
                    ></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img
                      className="w-100"
                      loading='lazy'
                      src={BrandingAndCreativeImg05}
                      alt="BrandingAndCreative"
                    ></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img
                      className="w-100"
                      loading='lazy'
                      src={BrandingAndCreativeImg06}
                      alt="BrandingAndCreative"
                    ></img>
                  </div>
                </Col>
                {
                  <>
                    <Row>
                      <Col lg={4}>
                        <div className="portfolioTabsCards">
                          <img
                            className="w-100"
                            loading='lazy'
                            src={BrandingAndCreativeImg07}
                            alt="BrandingAndCreativeImg07"
                          ></img>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="portfolioTabsCards">
                          <img
                            className="w-100"
                            loading='lazy'
                            src={BrandingAndCreativeImg08}
                            alt="BrandingAndCreativeImg08"
                          ></img>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="portfolioTabsCards">
                          <img
                            className="w-100"
                            loading='lazy'
                            src={BrandingAndCreativeImg09}
                            alt="BrandingAndCreativeImg09"
                          ></img>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <div className="portfolioTabsCards">
                          <img
                            className="w-100"
                            loading='lazy'
                            src={BrandingAndCreativeImg10}
                            alt="BrandingAndCreativeImg10"
                          ></img>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="portfolioTabsCards">
                          <img
                            className="w-100"
                            loading='lazy'
                            src={BrandingAndCreativeImg11}
                            alt="BrandingAndCreativeImg11"
                          ></img>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="portfolioTabsCards">
                          <img
                            className="w-100"
                            loading='lazy'
                            src={BrandingAndCreativeImg12}
                            alt="BrandingAndCreativeImg12"
                          ></img>
                        </div>
                      </Col>
                    </Row>
                  </>
                }
              </Row>
            </TabPanel>
            <TabPanel>
              <MobileAppDevelopmentCarousal />
            </TabPanel>
            <TabPanel>
              <Row>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={img01} alt="img01"></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={img02} alt="img02"></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={img03} alt="img03"></img>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={img04} alt="img04"></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={img05} alt="img05"></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={img06} alt="img06"></img>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={img07} alt="img07"></img>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={hustlepost1} alt="hustlepost1"></img>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="portfolioTabsCards">
                    <img className="w-100" src={hustlepost2} alt="hustlepost2"></img>
                  </div>
                </Col>
              </Row>
            </TabPanel>

          </Tabs>
        </div>
      </Container>
    </div>
  );
};
export default DevelopYourBrand;
