import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { ProvideSupportingTools } from "../../../Constants/DigitalStartupServicesDiscription";
import { CHANGE_MODAL } from "../../../Store/Action";
import { useDispatch } from "react-redux";

const ProvideSupportingtools = () => {
  const dispatch = useDispatch();
  return (
    <div className="StartupServicesSection">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span className="BgText">{ProvideSupportingTools.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{ProvideSupportingTools.title}</h1>
                    </Zoom>
                    <Fade>
                      <p>
                        <b>{ProvideSupportingTools.description}</b>
                      </p>
                      {ProvideSupportingTools.list.map((li) => {
                        return (
                          <li>
                            <b>{li}</b>
                          </li>
                        );
                      })}
                    </Fade>
                    <Col lg="3">
                      <a
                        href="#"
                        onClick={() => {
                          dispatch(CHANGE_MODAL(true));
                        }}
                        className="getStarted-btn"
                      >
                        Get Started
                      </a>
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
                src={ProvideSupportingTools.ProvideSupportingToolsImagePath}
                alt=""
              ></img>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProvideSupportingtools;
