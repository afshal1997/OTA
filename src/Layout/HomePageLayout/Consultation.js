import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomePage.css";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import {  SCHEDULE_CALL } from "../../Store/Action";
import { useDispatch } from "react-redux";

const Consultation = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="consultation">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="consultationContent">
                <svg width="100%">
                  <defs>
                    <linearGradient id="gradient" y1="0" y2="1">
                      <stop stopColor="#054084" offset="0" />
                      <stop stopColor="#054084" offset="1" />
                    </linearGradient>
                  </defs>
                  <g>
                    <text
                      id="text"
                      y="103"
                      strokeWidth="1"
                      stroke="url(#gradient)"
                      fill="rgb(0, 0, 0,0.2)"
                    >
                      Consultation
                    </text>
                  </g>
                </svg>
                <Bounce right>
                  <h2>Free Consultation</h2>
                </Bounce>
                <Bounce left>
                  <h5>How We Can Partner</h5>
                </Bounce>
                <Zoom>
                  <h6>
                    Our experts will understand your business requirements and
                    will develop services and pricing strategy for your agency.
                    Watch how we help our clients walk through the world wide
                    web directly from their perspective.
                  </h6>
                </Zoom>
              </div>
            </Col>
            <Col lg={4} className="m-auto">
              <Bounce>
                <a
                  className={'schedulecall w-75'}
                  onClick={() => dispatch(SCHEDULE_CALL({ isScheduleCall: true, isModalOpen: true }))}
                  href="javascript:void(0)"
                >
                  {'Schedule a Call'}
                </a>

              </Bounce>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Consultation;
