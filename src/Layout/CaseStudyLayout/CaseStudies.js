import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Bounce, Zoom, Fade } from "react-reveal";
import { WhiteLabellingDesignDevelopment } from "../../Constants/WhiteLabellingServices";
import beyondant from "../../Assets/CaseStudy/b.svg";
import Mili from "../../Assets/CaseStudy/mili.png";
import p360 from "../../Assets/CaseStudy/perrform360.png";
import Adzum from "../../Assets/CaseStudy/adzum.png";
import { CHANGE_MODAL } from "../../Store/Action";

const CaseStudies = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <Container>
          <Row className="my-4">
            <Col lg={5} className="m-auto">
              <Bounce left cascade>
                <img className="w-100" src={p360} alt=""></img>
              </Bounce>
            </Col>
            <Col lg={7} className="m-auto">
              <Bounce right cascade>
                <div className="StartUp pt-5 mt-5">
                  <div className="OurServicesHeadingUl">
                    <ul>
                      <Zoom right cascade>
                        <h1>BRIEF</h1>
                      </Zoom>
                      <Fade>
                        <h6>
                          <b>
                            The client’s main goal was to generate new leads. He
                            sought to scale his business up and was looking to
                            improve the brand’s perception on the web.
                            Precisely, he wanted an engaging website that draws
                            traffic.
                          </b>
                        </h6>

                        <Row className="mt-5">
                          <Col>
                            <h2>CHALLENGE:</h2>
                            <p>
                              The client aimed to increase brand awareness, web
                              traffic, and sales for their social media
                              marketing business.
                            </p>
                          </Col>
                        </Row>
                        <Row className="">
                          <Col>
                            <h2>SOLUTION:</h2>
                            <p>
                              In addition to building a fresh website to
                              revitalize Proform 360’s digital presence, we also
                              suggested an engaging landing page. A team of
                              marketing experts was drafted and a Google PPC
                              campaign was put into action.
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <h2>RESULT:</h2>
                            <p>
                              Our partnership with Proform 360 bore fruits and
                              within two months of the website being live,
                              existing customers soared by 200%.
                            </p>
                          </Col>
                        </Row>
                      </Fade>
                    </ul>
                  </div>
                </div>
              </Bounce>
            </Col>
          </Row>
          <Row className="my-4">
            <Col lg={7} className="m-auto">
              <Bounce right cascade>
                <div className="StartUp pt-5 mt-5">
                  <div className="OurServicesHeadingUl">
                    <ul>
                      <Zoom right cascade>
                        <h1>BRIEF</h1>
                      </Zoom>
                      <Fade>
                        <h6>
                          <b>
                            Beyondant; a well-known provider of digital business
                            cards, scannable NFC bracelets, and smart stickers;
                            wanted to expand its reach and enter newer markets.{" "}
                          </b>
                        </h6>

                        <Row className="mt-5">
                          <Col>
                            <h2>CHALLENGE:</h2>
                            <p>
                              Beyondant wanted to expand its reach and enter
                              newer markets while engaging existing clients.
                            </p>
                          </Col>
                        </Row>
                        <Row className="">
                          <Col>
                            <h2>SOLUTION:</h2>
                            <p>
                              We entered into a joint venture with Beyondant. An
                              entire production team comprising of UI/UX
                              developer, Web Developer, App Developer, Virtual
                              Assistant, QA Tester, and Project Manager was
                              provided. They oversaw the development of a
                              full-fledged website with eCommerce features,
                              customer dashboard, admin dashboard, CRM, CMS,
                              Order Tracker among others. Mobile app development
                              is under the design phase. After-sales and
                              customer services are also being carried out.
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <h2>RESULT:</h2>
                            <p>
                              Beyondant has hired an ongoing production facility
                              at Outsource to Asia that manages their website,
                              mobile app and provides after-sales and customer
                              support.
                            </p>
                          </Col>
                        </Row>
                      </Fade>
                    </ul>
                  </div>
                </div>
              </Bounce>
            </Col>
            <Col lg={5} className="m-auto">
              <Bounce left cascade>
                <img className="w-100" src={beyondant} alt=""></img>
              </Bounce>
            </Col>
          </Row>
          <Row className="my-4">
            <Col lg={5} className="m-auto">
              <Bounce left cascade>
                <img className="w-100" src={Mili} alt=""></img>
              </Bounce>
            </Col>
            <Col lg={7} className="m-auto">
              <Bounce right cascade>
                <div className="StartUp pt-5 mt-5">
                  <div className="OurServicesHeadingUl">
                    <ul>
                      <Zoom right cascade>
                        <h1>BRIEF</h1>
                      </Zoom>
                      <Fade>
                        <h6>
                          <b>
                            They reached out to us on Instagram and were looking
                            for an interactive and responsive website for their
                            Digital Marketing services.{" "}
                          </b>
                        </h6>

                        <Row className="mt-5">
                          <Col>
                            <h2>CHALLENGE:</h2>
                            <p>
                              They were looking for a user-friendly CMS that was
                              low on budget but high on quality.
                            </p>
                          </Col>
                        </Row>
                        <Row className="">
                          <Col>
                            <h2>SOLUTION:</h2>
                            <p>
                              Since the client was not sure about the design, we
                              gathered all the requirements we could and
                              provided a Web mockup which they were very pleased
                              to get. We also suggested a customized WordPress
                              website that suited all their requirements but
                              also kept the cost at the bare minimum.
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <h2>RESULT:</h2>
                            <p>
                              Our team of skilled developers got together and
                              formulated a website that was smooth, fast, and
                              fully responsive, that too in just a week.
                            </p>
                          </Col>
                        </Row>
                      </Fade>
                    </ul>
                  </div>
                </div>
              </Bounce>
            </Col>
          </Row>
          <Row className="my-4">
            <Col lg={7} className="m-auto">
              <Bounce right cascade>
                <div className="StartUp pt-5 mt-5">
                  <div className="OurServicesHeadingUl">
                    <ul>
                      <Zoom right cascade>
                        <h1>BRIEF</h1>
                      </Zoom>
                      <Fade>
                        <h6>
                          <b>
                            Our relationship with Adzum is as old as OTA itself.
                            Mr. Jensen, the founder of Adzum, came to us with an
                            idea and sought our help in bringing it to life. He
                            wanted to establish a digital marketing firm.
                          </b>
                        </h6>

                        <Row className="mt-5">
                          <Col>
                            <h2>CHALLENGE:</h2>
                            <p>
                              This client needed to build his brand from the
                              ground up. He had no crew, no website, nor any
                              social media presence.
                            </p>
                          </Col>
                        </Row>
                        <Row className="">
                          <Col>
                            <h2>SOLUTION:</h2>
                            <p>
                              As the client wanted to establish a brand from its
                              very foundation; and keeping the outlandish cost
                              associated with such an endeavor, we pitched a
                              partnership proposal. A white-labeling agreement
                              was reached by which he would outsource the
                              production to our firm-Outsource To Asia.
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <h2>RESULT:</h2>
                            <p>
                              Within months, business was booming for Adzum with
                              a respectable list of clientele that was amazed at
                              the quality with market-defying prices.
                            </p>
                          </Col>
                        </Row>
                      </Fade>
                    </ul>
                  </div>
                </div>
              </Bounce>
            </Col>
            <Col lg={5} className="m-auto">
              <Bounce left cascade>
                <img className="w-100" src={Adzum} alt=""></img>
              </Bounce>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CaseStudies;
