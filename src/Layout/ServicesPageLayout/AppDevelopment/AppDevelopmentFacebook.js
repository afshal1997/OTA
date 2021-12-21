import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { BusinessAndSolutionsContent } from "../../../Constants/AppDevelopmentServices";
import { useDispatch } from "react-redux";
import { CHANGE_MODAL } from "../../../Store/Action";
const AppDevelopmentFacebook = () => {
  const dispatch = useDispatch();
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
                        <b>{BusinessAndSolutionsContent.description}</b>
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
                      <a
                        href="javascript:void(0)"
                        onClick={() => dispatch(CHANGE_MODAL(true))}
                        className={`${BusinessAndSolutionsContent.button[1]}`}
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

export default AppDevelopmentFacebook;
