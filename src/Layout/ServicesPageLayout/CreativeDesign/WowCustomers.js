import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import {
  BrandLogoDesign,
  MakeCustomersGo,
} from "../../../Constants/CreativeDesignWowCustomers";
import { CHANGE_MODAL } from "../../../Store/Action";
import { useDispatch } from "react-redux";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const WowCustomers = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp">
                <span class="BgText">{MakeCustomersGo.heading}</span>
                <Row className="OurServicesHeading">
                  <Col className="col-1"></Col>
                  <Col className="col-1 m-auto">
                    <i class="fas fa-long-arrow-alt-right text-primary"></i>
                  </Col>
                  <Col className="col-10">
                    <Zoom right cascade>
                      <h1>{MakeCustomersGo.title}</h1>
                    </Zoom>
                  </Col>
                </Row>
              </div>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right>
              <h6>
                <p>
                  In need of a <strong>stellar logo and website design package</strong> ? Let Outsource to Asia handle graphic designing for your brand through compelling, dazzling, and ornate graphics. Be it a logo or web design, print or digital media, our team creates vivid designs across platforms and mediums. We create professional, aesthetically pleasing,<strong> high-quality graphics for small to medium-sized businesses</strong> , with cost & time-saving solutions, plus a highly personalized experience for our clients.
                </p>
              </h6>
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={BrandLogoDesign.DevelopBrandPersonaImagePath}
                alt="BrandLogoDesign.DevelopBrandPersonaImagePath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{BrandLogoDesign.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{BrandLogoDesign.title}</h1>
                    </Zoom>
                    <Fade>
                      <h6>
                        We craft logos that live and breathe your brand sentiment and vision. An artistic masterpiece is more than just an interesting logo, it’s the combination of strategy, planning, market research, and experience. Our one-of-a-kind <strong>logo package</strong> is:
                      </h6>
                      <Row>
                        {BrandLogoDesign.list.map((li, id) => {
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
                      <GetStarted buttonText={BrandLogoDesign.button[0]} buttonClass={`${BrandLogoDesign.button[1]} `} ></GetStarted>
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

export default WowCustomers;
