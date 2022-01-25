import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { DesignCustomWebsite } from "../../../Constants/WebDevelopmentServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const WebDevelopmentDesignCustomWebsite = () => {
  return (
    <div className="mt-5 pt-4">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{DesignCustomWebsite.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{DesignCustomWebsite.title}</h1>
                    </Zoom>
                    <Fade>
                      <h6>
                        Take control of your website through custom design and code. Our <strong>custom web design</strong> allows flexibility with the ever-evolving businesses spectrum, and is:

                      </h6>
                      <Row>
                        {DesignCustomWebsite.list.map((li, id) => {
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
                      <GetStarted buttonText={DesignCustomWebsite.button[0]} buttonClass={DesignCustomWebsite.button[1]} />
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
                src={DesignCustomWebsite.DesignCustomWebsiteImagePath}
                alt="DesignCustomWebsite.DesignCustomWebsiteImagePath"
              ></img>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WebDevelopmentDesignCustomWebsite;
