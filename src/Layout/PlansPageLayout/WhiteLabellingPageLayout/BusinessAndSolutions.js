import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { BusinessAndSolutionsContent } from "../../../Constants/WhiteLabellingServices";
import { CHANGE_MODAL } from "../../../Store/Action";
import { useDispatch } from "react-redux";

const BusinessAndSolutions = () => {
  const dispatch = useDispatch();
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
                alt="BusinessAndSolutionsContent.BusinessAndSolutionsContentImagePath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">
                  {BusinessAndSolutionsContent.heading}
                </span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{BusinessAndSolutionsContent.title}</h1>
                    </Zoom>
                    <Fade>
                      <p>
                        <b>{BusinessAndSolutionsContent.description1}</b>
                      </p>
                      <p>
                        <b>{BusinessAndSolutionsContent.description2}</b>
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
                      <a
                        href="#"
                        onClick={() => dispatch(CHANGE_MODAL(true))}
                        class={`${BusinessAndSolutionsContent.button[1]}`}
                      >
                        {BusinessAndSolutionsContent.button[0]}
                      </a>
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
