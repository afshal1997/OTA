import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import {
  BasicWebsite,
  RenownedOutsourceWeb,
} from "../../../Constants/WebDevelopmentServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const WebDevelopmentRenownedOutsourceWeb = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp">
                <span class="BgText">{RenownedOutsourceWeb.heading}</span>
                <Row className="OurServicesHeading">
                  <Col className="col-1"></Col>
                  <Col className="col-1 m-auto">
                    <i class="fas fa-long-arrow-alt-right text-primary"></i>
                  </Col>
                  <Col className="col-10">
                    <Zoom right cascade>
                      <h1>{RenownedOutsourceWeb.title}</h1>
                      <h4>{RenownedOutsourceWeb.title2}</h4>
                    </Zoom>
                  </Col>
                </Row>
              </div>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right>
              <h6>
                <b>{RenownedOutsourceWeb.description}</b>
              </h6>
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={BasicWebsite.BasicWebsiteImagePath}
                alt="BasicWebsite.BasicWebsiteImagePath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{BasicWebsite.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{BasicWebsite.title}</h1>
                    </Zoom>
                    <Fade>
                      <h6>
                        Improve your business standing with <strong>highly responsive web designs</strong> . Whether you want to generate leads, contact prospective clients, or advertise your business, our basic <strong>website development package</strong> is the perfect match, by being:
                      </h6>
                      <Row>
                        {BasicWebsite.list.map((li, id) => {
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
                      <GetStarted buttonText={BasicWebsite.button[0]} buttonClass={`${BasicWebsite.button[1]}`} />
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

export default WebDevelopmentRenownedOutsourceWeb;
