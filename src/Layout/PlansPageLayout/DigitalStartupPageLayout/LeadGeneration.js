import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { leadgenarationpagecontent } from "../../../Constants/DigitalStartupServicesDiscription";
import { useDispatch } from "react-redux";
import { CHANGE_MODAL } from "../../../Store/Action";
const LeadGeneration = () => {
  const dispatch = useDispatch();
  return (
    <div className="StartupServicesSection">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={leadgenarationpagecontent.ProvideSupportingToolsImagePath}
                alt="leadgenarationpagecontent.ProvideSupportingToolsImagePath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span className="BgText">LG</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h2>{leadgenarationpagecontent.heading}</h2>
                    </Zoom>
                    <Fade>
                      <h6>
                        <b>{leadgenarationpagecontent.description}</b>
                      </h6>
                      {leadgenarationpagecontent.list.map((li) => {
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
                        onClick={() => dispatch(CHANGE_MODAL(true))}
                        className={`${leadgenarationpagecontent.button[1]}`}
                      >
                        {leadgenarationpagecontent.button[0]}
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

export default LeadGeneration;
