import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import {
  AndroidAppService,
  ExclusiveAppDevelopmentService,
} from "../../../Constants/AppDevelopmentServices";
import { CHANGE_MODAL } from "../../../Store/Action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const AppDevelopmentOtaExclusive = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp">
                <span class="BgText">
                  {ExclusiveAppDevelopmentService.heading}
                </span>
                <Row className="OurServicesHeading">
                  <Col className="col-1"></Col>
                  <Col className="col-1 m-auto">
                    <i class="fas fa-long-arrow-alt-right text-primary"></i>
                  </Col>
                  <Col className="col-10">
                    <Zoom right cascade>
                      <h1>{ExclusiveAppDevelopmentService.title}</h1>
                      <h4>{ExclusiveAppDevelopmentService.title2}</h4>
                    </Zoom>
                  </Col>
                </Row>
              </div>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right>
              <h6>
                While designing your app, we take its look, feel, and incorporation of elements into thought. We carry out a technique that is the best methodology for mobile application improvement as it permits us to make changes, add new features, and advance with changing trends. Our <strong>application development services</strong> include:
              </h6>
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={AndroidAppService.AndroidAppServiceImgPath}
                alt="AndroidAppService.AndroidAppServiceImgPath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{AndroidAppService.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{AndroidAppService.title}</h1>
                    </Zoom>
                    <Fade>
                      <h6>
                        <strong><Link to='/' className='text-decoration-none'>OTA</Link></strong> has an expert team of <strong>mobile app development professionals</strong> specializing in Android app development services. We help companies create a terrific Android app experience, create new consumer channels, and differentiate themselves from the competition. We ensure our <strong>Android mobile application development services</strong> match your necessities, by being:
                      </h6>
                      <Row>
                        {AndroidAppService.list.map((li, id) => {
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
                        href="#"
                        onClick={() => dispatch(CHANGE_MODAL(true))}
                        class={`${AndroidAppService.button[1]}`}
                      >
                        {AndroidAppService.button[0]}
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

export default AppDevelopmentOtaExclusive;
