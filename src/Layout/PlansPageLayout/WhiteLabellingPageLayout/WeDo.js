import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import {
  WhiteLabellingDesignDevelopment,
  WhiteLabellingWeDo,
} from "../../../Constants/WhiteLabellingServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";
import { Link } from 'react-router-dom'
const WeDo = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp">
                <span className="BgText">{WhiteLabellingWeDo.heading}</span>
                <Row className="OurServicesHeading">
                  <Col className="col-1"></Col>
                  <Col className="col-1 m-auto">
                    <i className="fas fa-long-arrow-alt-right text-primary"></i>
                  </Col>
                  <Col className="col-10">
                    <Zoom right cascade>
                      <h2>{WhiteLabellingWeDo.title}</h2>
                    </Zoom>
                  </Col>
                </Row>
              </div>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right>
              <h6>
                We offer top-notch white labeling services to our valuable clients in the USA. The service is purely provided under the supervision of experienced and knowledgeable team members. Each of the <strong>white labeling services</strong> is designed with a result-oriented approach to give you an impressive return rate. We hope to add value to every process.              </h6>
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={WhiteLabellingDesignDevelopment.DesignDevelopment}
                alt="WhiteLabellingDesignDevelopment.DesignDevelopment"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span className="BgText">
                  {WhiteLabellingDesignDevelopment.heading}
                </span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h2>{WhiteLabellingDesignDevelopment.title}</h2>
                    </Zoom>
                    <Fade>
                      <h6>
                        <strong><Link to='/web-development-services' className='text-decoration-none'>Our design and development process </Link></strong>
                        is carried out with keen attention to detail to enhance our <strong>white labeling services</strong> experience. The process kick starts after a deep insight into the current trends and your requirements to get quality results. Your business philosophy and idea are analyzed to come up with an appropriate strategy. Our job is done only when every step is well-aligned with what your business needs. Outsource to Asia’s
                        <strong><Link to='/creative-design-packages' className='text-decoration-none'> creative designing </Link></strong>
                        team are experts in delivering the following services with full commitment:
                      </h6>
                      <Row>
                        {WhiteLabellingDesignDevelopment.list.map((li, id) => {
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
                      <GetStarted buttonText={`${WhiteLabellingDesignDevelopment.button[0]}`} buttonClass={`${WhiteLabellingDesignDevelopment.button[1]}`} />
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

export default WeDo;
