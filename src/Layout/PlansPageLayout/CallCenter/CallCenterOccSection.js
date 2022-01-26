import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CallCenterImg03 from "../../../Assets/PlansAssets/CallCenter/CallCenterImg03.png";
import Bounce from "react-reveal/Bounce";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";
const CallCenterOccSection = () => {
  return (
    <div className="PlanOccBg">
      <Container>
        <Row className="mt-5">
          <Col lg={6}>
            <Bounce right cascade>
              <div className="planServicesSvg">
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
                      CCO
                    </text>
                  </g>
                </svg>
                <h1>
                  Why is Call Center Outsourcing necessary?
                </h1>
                <p>
                  In the age of digitalization, bad rumors and negative reviews can destroy a business. This is why great customer service is paramount to your brand’s success. Outsource to Asia supports your business by giving you an edge over your competition by cutting down costs and reshaping your customer support process and infrastructure.
                  Without a good customer experience, most clients won’t return even after receiving a satisfactory product or service. Our comprehensive, adaptable, and cost-effective <strong>BPO outsourcing</strong> solutions will assist you in running your business smoothly and efficiently. We will handle a wide range of client requests and guarantee that all questions and issues are resolved on time.

                </p>
                <Row>

                  <Col lg={4}>
                    <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />

                  </Col>
                </Row>
              </div>
            </Bounce>
          </Col>
          <Col lg={4} className="m-auto">
            <Bounce left cascade>
              <img className="w-100" src={CallCenterImg03} alt="CallCenterImg03"></img>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallCenterOccSection;
