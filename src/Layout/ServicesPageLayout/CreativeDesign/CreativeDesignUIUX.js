import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { UIUXDesign } from "../../../Constants/CreativeDesignWowCustomers";
import { CHANGE_MODAL } from "../../../Store/Action";
import { useDispatch } from "react-redux";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const CreativeDesignUIUX = () => {
  const dispatch = useDispatch();
  return (
    <div className="mt-5 pt-5">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{UIUXDesign.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{UIUXDesign.title}</h1>
                    </Zoom>
                    <Fade>
                      <p>
                        Employ the best <strong>UI/UX designers</strong> that concoct distinctive visuals and harmonize graphic identity with your brand in mind. We deliver <strong>custom web and app designs</strong> that are:
                      </p>
                      <Row>
                        {UIUXDesign.list.map((li, id) => {
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
                      <GetStarted buttonClass={`${UIUXDesign.button[1]}`} buttonText={UIUXDesign.button[0]}
                      ></GetStarted>
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
                src={UIUXDesign.UIUXDesignImagePath}
                alt="UIUXDesign.UIUXDesignImagePath"
              ></img>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div >
  );
};

export default CreativeDesignUIUX;
