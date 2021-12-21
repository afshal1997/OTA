import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import {
  DevelopBrandPersonal,
  Startup,
} from "../../../Constants/DigitalStartupServicesDiscription";
import { CHANGE_MODAL } from "../../../Store/Action";
import { useDispatch } from "react-redux";

const StartupServices = () => {
  const dispatch = useDispatch();
  return (
    <div className="StartupServicesSection">
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp">
                <span className="BgText">{Startup.heading}</span>
                <Row className="OurServicesHeading">
                  <Col className="col-1"></Col>
                  <Col className="col-1 m-auto">
                    <i className="fas fa-long-arrow-alt-right text-primary"></i>
                  </Col>
                  <Col className="col-10">
                    <Zoom right cascade>
                      <h2>{Startup.title}</h2>
                    </Zoom>
                  </Col>
                </Row>
              </div>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right>
              <h6>
                <b>{Startup.description}</b>
              </h6>
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={DevelopBrandPersonal.DevelopBrandPersonaImagePath}
                alt="DevelopBrandPersonal.DevelopBrandPersonaImagePath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span className="BgText">{DevelopBrandPersonal.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h2>{DevelopBrandPersonal.title}</h2>
                    </Zoom>
                    <Fade>
                      <h6>
                        <b>{DevelopBrandPersonal.description}</b>
                      </h6>
                      {DevelopBrandPersonal.list.map((li) => {
                        return (
                          <li>
                            <b>{li}</b>
                          </li>
                        );
                      })}
                    </Fade>
                    <Col lg="3">
                      <a
                        href="javascript:void(0)"
                        onClick={() => dispatch(CHANGE_MODAL(true))}
                        className={`${DevelopBrandPersonal.button[1]}`}
                      >
                        {DevelopBrandPersonal.button[0]}
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

export default StartupServices;
