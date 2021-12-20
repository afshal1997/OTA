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
                <span class="BgText">
                  {WhiteLabellingDigitalMarketing.heading}
                </span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h2>{WhiteLabellingDigitalMarketing.title}</h2>
                    </Zoom>
                    <Fade>
                      <p>
                        <b>{WhiteLabellingDigitalMarketing.description1}</b>
                      </p>
                      <p>
                        <b>{WhiteLabellingDigitalMarketing.description2}</b>
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
