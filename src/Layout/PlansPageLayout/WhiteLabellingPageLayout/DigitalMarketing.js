import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { WhiteLabellingDigitalMarketing } from "../../../Constants/WhiteLabellingServices";

import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const DigitalMarketing = () => {
  return (
    <div className="mt-5 pt-5">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span className="BgText">
                  {WhiteLabellingDigitalMarketing.heading}
                </span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h2>{WhiteLabellingDigitalMarketing.title}</h2>
                    </Zoom>
                    <Fade>
                      <p>
                      </p>
                      <p>
                        Digital marketing is without a doubt the foundation of each business. From <strong>SEO to Social Media outsourcing</strong>, trust our white labeling team to present to you the most refined and <strong>affordable digital marketing services</strong> for you, and your clients. Share your needs and requirements with us and the rest will be efficiently handled at our end. Get a chance to experience an instant <strong>boost to your business</strong> through increased traffic, reach, and conversions. The perfect opportunity to build brand awareness, gain a competitive edge, and organically expand your customer base.
                        Here is a list of our <strong>digital marketing services</strong>
                      </p>
                      <Row>
                        {WhiteLabellingDigitalMarketing.list.map((li, id) => {
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
                    <Col lg="3">
                      <GetStarted buttonText={`${WhiteLabellingDigitalMarketing.button[0]}`} buttonClass={`${WhiteLabellingDigitalMarketing.button[1]}`} />
                    </Col>
                  </ul>
                </div>
              </div>
            </Bounce>
          </Col>
          <Col lg={5} className="m-auto">
            <Bounce right cascade>
              <img
                className="w-100"
                src={
                  WhiteLabellingDigitalMarketing.WhiteLabellingDigitalMarketingImage
                }
                loading='lazy'
                alt="WhiteLabellingDigitalMarketing.WhiteLabellingDigitalMarketingImage"
              ></img>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DigitalMarketing;
