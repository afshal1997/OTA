import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import {
  MotionGraphicsServices,
  WowMakeCustomersGoService,
} from "../../../Constants/VideoDevelopmentServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";
import { Link } from 'react-router-dom'
const VideoDevelopmentMotionGraphics = () => {
  return (
    <div className="mt-5 pt-4">
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp">
                <span class="BgText">{WowMakeCustomersGoService.heading}</span>
                <Row className="OurServicesHeading">
                  <Col className="col-1"></Col>
                  <Col className="col-1 m-auto">
                    <i class="fas fa-long-arrow-alt-right text-primary"></i>
                  </Col>
                  <Col className="col-10">
                    <Zoom right cascade>
                      <h1>{WowMakeCustomersGoService.title}</h1>
                      <h4>{WowMakeCustomersGoService.title2}</h4>
                    </Zoom>
                  </Col>
                </Row>
              </div>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right>
              <h6>
                <strong>Video Animation</strong> is an integral tool that helps you vividly imagine and grasp the specific idea of a film, animated feature, advertisement, or production. Connect with an award-winning <strong>animation <Link to='/' className='text-decoration-none'>outsourcing company</Link></strong> and lift your ROI with wholeheartedly engaging <strong>video production services</strong>.
              </h6>
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={MotionGraphicsServices.MotionGraphicsServicesImgPath}
                alt="MotionGraphicsServices.MotionGraphicsServicesImgPath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{MotionGraphicsServices.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{MotionGraphicsServices.title}</h1>
                    </Zoom>
                    <Fade>
                      <h6>
                        Play with pictorial <strong><Link to='/creative-design-packages' className='text-decoration-none'>objectives and creative edits</Link></strong> to furnish astounding <strong>motion graphics</strong> for your viewers.

                      </h6>
                      <Row>
                        {MotionGraphicsServices.list.map((li, id) => {
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
                      <GetStarted buttonClass={MotionGraphicsServices.button[1]} buttonText={MotionGraphicsServices.button[0]} />
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

export default VideoDevelopmentMotionGraphics;
