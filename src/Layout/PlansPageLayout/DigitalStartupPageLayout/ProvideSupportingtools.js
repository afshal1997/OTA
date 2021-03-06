import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { ProvideSupportingTools } from "../../../Constants/DigitalStartupServicesDiscription";
import { CHANGE_MODAL } from "../../../Store/Action";
import { useDispatch } from "react-redux";

const ProvideSupportingtools = () => {
  const dispatch = useDispatch();
  return (
    <div className="StartupServicesSection">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span className="BgText">{ProvideSupportingTools.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h2>{ProvideSupportingTools.title}</h2>
                    </Zoom>
                    <Fade>
                      <p>
                        With custom or 3rd party customer support tools such as Tawk.to and Zendesk Chat App or popular chat platforms integration through WhatsApp/iMessage for business, your clients experience exceptional after-sales support 24/7
                      </p>
                      {ProvideSupportingTools.list.map((li) => {
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
                        onClick={() => {
                          dispatch(CHANGE_MODAL(true));
                        }}
                        className="getStarted-btn"
                      >
                        Get Started
                      </a>
                    </Col>
                  </ul>
                </div>
              </div>
            </Bounce>
          </Col>
          <Col lg={5} className="m-auto">
            <Bounce right cascade>
              <img
                className="w-100"
                src={ProvideSupportingTools.ProvideSupportingToolsImagePath}
                alt="ProvideSupportingTools.ProvideSupportingToolsImagePath"
              />
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProvideSupportingtools;
