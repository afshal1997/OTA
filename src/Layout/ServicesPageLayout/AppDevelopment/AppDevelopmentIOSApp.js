import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { IosAppService } from "../../../Constants/AppDevelopmentServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const AppDevelopmentIOSApp = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span className="BgText">{IosAppService.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{IosAppService.title}</h1>
                    </Zoom>
                    <Fade>
                      <h6>
                        Leverage OTA’s expertise in <strong>iOS app development services</strong>  to fabricate an intelligent, engaging, and consistent application for your industry, regardless of intricacy. As an <strong>outsource iOS app development agency</strong>, we start with the idea of getting an upheaval of the IOS app industry by enhancing your application on top of the iOS application store.
                      </h6>
                      <Row>
                        {IosAppService.list.map((li, id) => {
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
                      <GetStarted buttonClass={IosAppService.button[1]} buttonText={IosAppService.button[0]}></GetStarted>
                    </Col>
                  </ul>
                </div>
              </div>
            </Bounce>
          </Col>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={IosAppService.IosAppServiceImagePath}
                alt="IosAppService.IosAppServiceImagePath"
                loading='lazy'
              ></img>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppDevelopmentIOSApp;
