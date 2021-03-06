import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { BusinessAndSolutionsContent } from "../../../Constants/AppDevelopmentServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";
const AppDevelopmentFacebook = () => {
  return (
    <div className="mb-5">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={
                  BusinessAndSolutionsContent.BusinessAndSolutionsContentImagePath
                }
                alt="BusinessAndSolutionsContent.BusinessAndSolutionsContentImagePath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span className="BgText">
                  {BusinessAndSolutionsContent.heading}
                </span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h2>{BusinessAndSolutionsContent.title}</h2>
                    </Zoom>
                    <Fade>
                      <h6>
                        An application for a preeminent social platform- Facebook. The odds of raking a higher user base and consequently your business growth greatly increases by landing your app on the leading social platform.
                      </h6>
                      <Row>
                        {BusinessAndSolutionsContent.list.map((li, id) => {
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
                      <GetStarted buttonText={BusinessAndSolutionsContent.button[0]} buttonClass={BusinessAndSolutionsContent.button[1]} />
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

export default AppDevelopmentFacebook;
