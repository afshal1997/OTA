import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import {
  SearchEngineOptimization,
  TheExpertiseOf,
} from "../../../Constants/DigitalMarketingServices";
import { Link } from 'react-router-dom'
import GetStarted from "../../../Components/Common/Buttons/GetStarted";
const DigitalMarketingSeo = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp">
                <span class="BgText">{TheExpertiseOf.heading}</span>
                <Row className="OurServicesHeading">
                  <Col className="col-1"></Col>
                  <Col className="col-1 m-auto">
                    <i class="fas fa-long-arrow-alt-right text-primary"></i>
                  </Col>
                  <Col className="col-10">
                    <Zoom right cascade>
                      <h1>{TheExpertiseOf.title}</h1>
                    </Zoom>
                  </Col>
                </Row>
              </div>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right>
              <h6>
                In need of <strong>SEO services for your local business</strong> ? We gander at things with your perspective; with a fresh mind.  We pursue your progress so we can give you - an extravagance of commitment, deals leading stocks to run out, and perks tearing your pockets apart. We convey <strong><Link to='/content-writing-services' className='text-decoration-none'>quality content writing service</Link></strong> , not bogus guarantees, ensuring we boost your financial plan, so you get max returns on investment (ROI).
              </h6>
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={SearchEngineOptimization.SearchEngineOptimizationImagePath}
                alt="SearchEngineOptimization.SearchEngineOptimizationImagePath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{SearchEngineOptimization.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{SearchEngineOptimization.title}</h1>
                    </Zoom>
                    <Fade>
                      <h6>
                        Get top rankings for desired search terms and drive qualified leads with effective keyword research and competitors analysis. Let us your website to the highest point of the internet search results that are pivotal to building your business.  Contact us for <strong>SEO outsourcing</strong> and we’ll provide <strong>affordable SEO packages</strong>.

                      </h6>
                      <Row>
                        {SearchEngineOptimization.list.map((li, id) => {
                          if (id < 4) {
                            return (
                              <Col lg={6}>
                                <li>
                                  <b>{li}</b>
                                </li>
                              </Col>
                            );
                          }
                          return (
                            <Col lg={6}>
                              <li>
                                <b>{li}</b>
                              </li>
                            </Col>
                          );
                        })}
                      </Row>
                    </Fade>
                    <Row>
                      <Col lg="3">
                        <GetStarted
                          buttonClass={SearchEngineOptimization.button[1]}
                          buttonText={SearchEngineOptimization.button[0]}
                        />
                      </Col>
                      <Col lg="3">
                        <Link to="/seo-digital-marketing" className={SearchEngineOptimization.button[1]}>
                          Read More
                        </Link>
                      </Col>
                    </Row>
                  </ul>
                </div>
              </div>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DigitalMarketingSeo;
