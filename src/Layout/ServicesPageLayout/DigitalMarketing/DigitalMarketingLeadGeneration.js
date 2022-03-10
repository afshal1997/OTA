import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { LeadGeneration } from "../../../Constants/DigitalMarketingServices";
import { Link } from "react-router-dom";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const DigitalMarketingLeadGeneration = () => {
  return (
    <div className="mb-5">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={LeadGeneration.LeadGenerationImagePath}
                alt="LeadGeneration.LeadGenerationImagePath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{LeadGeneration.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h2>{LeadGeneration.title}</h2>
                    </Zoom>
                    <Fade>
                      <h6>
                        We are <strong>experts in <Link to='/digital-startup' className='text-decoration-none'>online lead generation</Link></strong> be it Inbound advertising or account-based marketing. We create a lead executive process that is constantly evolving and self-sustaining.                      </h6>
                      <Row>
                        {LeadGeneration.list.map((li, id) => {
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
                    <Row>
                      <Col lg="3">
                        <GetStarted
                          buttonClass={LeadGeneration.button[1]}
                          buttonText={LeadGeneration.button[0]}
                        />
                      </Col>
                      <Col lg="3">
                        <Link to="/lead-generation-services" className={LeadGeneration.button[1]}>
                          Read More
                        </Link>
                      </Col>
                    </Row>

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

export default DigitalMarketingLeadGeneration;
