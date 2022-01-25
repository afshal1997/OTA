import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { ScreenCastService } from "../../../Constants/VideoDevelopmentServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const VideoDevelopmentScreenCast = () => {
  return (
    <div className="mt-5 pt-4 mb-5">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={ScreenCastService.ScreenCastServiceImagePath}
                alt=""
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{ScreenCastService.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{ScreenCastService.title}</h1>
                    </Zoom>
                    <Fade>
                      <h6>
                        Walk viewers through your newly launched product or service with splendid and swanky-looking <strong>Screencast animation service</strong>
                      </h6>
                      <Row>
                        {ScreenCastService.list.map((li, id) => {
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
                      <GetStarted buttonText={ScreenCastService.button[0]} buttonClass={ScreenCastService.button[1]}></GetStarted>

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

export default VideoDevelopmentScreenCast;
