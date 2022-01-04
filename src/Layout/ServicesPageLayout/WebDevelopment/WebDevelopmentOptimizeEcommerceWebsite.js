import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { OptimizeEcommerceWebsite } from "../../../Constants/WebDevelopmentServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const WebDevelopmentOptimizeEcommerceWebsite = () => {
  return (
    <div className="mt-5 pt-4 mb-5 pb-4">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={OptimizeEcommerceWebsite.OptimizeEcommerceWebsiteImagePath}
                alt="WebDevelopmentImage"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{OptimizeEcommerceWebsite.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{OptimizeEcommerceWebsite.title}</h1>
                    </Zoom>
                    <Fade>
                      <h6>
                        <b>{OptimizeEcommerceWebsite.description}</b>
                      </h6>
                      <Row>
                        {OptimizeEcommerceWebsite.list.map((li, id) => {
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
                      <GetStarted buttonText={OptimizeEcommerceWebsite.button[0]} buttonClass={OptimizeEcommerceWebsite.button[1]} />
                    </Col>
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

export default WebDevelopmentOptimizeEcommerceWebsite;
