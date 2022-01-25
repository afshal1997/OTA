import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { BusinessAndSolutionsContent } from "../../../Constants/WhiteLabellingServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const BusinessAndSolutions = () => {
  return (
    <div className="mt-5 pt-5 mb-5">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce right cascade>
              <img
                className="w-100"
                src={
                  BusinessAndSolutionsContent.BusinessAndSolutionsContentImagePath
                }
                alt="BusinessAndSolutions"
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
                      <h1>{BusinessAndSolutionsContent.title}</h1>
                    </Zoom>
                    <Fade>
                      <p>
                        If you need any help with <strong>growing business</strong> online, we are here for you. At Outsource To Asia, we provide our partners with limitless possibilities for expanding and becoming more perceptible to the rest of the globe.

                      </p>
                      <Row>
                        {BusinessAndSolutionsContent.list.map((li, id) => {
                          if (id > 3) {
                            return (
                              <Col lg={6}>
                                <li>
                                  <b>{li}</b>
                                </li>
                              </Col>
                            );
                          }
                          return (
                            <li>
                              <b>{li}</b>
                            </li>
                          );
                        })}
                      </Row>
                    </Fade>
                    <Col lg="3">
                      <GetStarted buttonText={`${BusinessAndSolutionsContent.button[0]}`} buttonClass={`${BusinessAndSolutionsContent.button[1]}`} />
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

export default BusinessAndSolutions;
