import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PricingCardImg01 from "../../../Assets/Pricing/PricingCardImg01.png";
import PricingCardImg02 from "../../../Assets/Pricing/PricingCardImg02.png";
import PricingCardImg03 from "../../../Assets/Pricing/PricingCardImg03.png";
const AppDevelopment = () => {
  return (
    <div className="pt-5 pb-5">
      <Row>
        <Col lg={4}>
          <Card className="TabsCard text-center">
            <Card.Body className="p-0">
              <div className="PricingCardImg">
                <Col lg={10} className="m-auto p-3">
                  <Card.Title>
                    <img className="w-100" src={PricingCardImg01}></img>
                  </Card.Title>
                </Col>
              </div>
              <div className="cardText pt-5 pb-5">
                <h4>
                  USD $8-12<span>/hour</span>
                </h4>
                <h5>Android Development</h5>
                <a
                  class="PricingApplyNowBtn w-100 p-2"
                  href="javascript:void(0)"
                >
                  Outsource Now
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="TabsCard TabsCardCenter text-center">
            <Card.Body className="p-0">
              <div className="PricingCardImg">
                <Col lg={10} className="m-auto p-3">
                  <Card.Title>
                    <img className="w-100" src={PricingCardImg02}></img>
                  </Card.Title>
                </Col>
              </div>
              <div className="cardText pt-5 pb-5">
                <h4>
                  USD $8-12<span>/hour</span>
                </h4>
                <h5>Android Development</h5>
                <a
                  class="PricingApplyNowBtn w-100 p-2"
                  href="javascript:void(0)"
                >
                  Outsource Now
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="TabsCard text-center">
            <Card.Body className="p-0">
              <div className="PricingCardImg">
                <Col lg={10} className="m-auto p-3">
                  <Card.Title>
                    <img className="w-100" src={PricingCardImg03}></img>
                  </Card.Title>
                </Col>
              </div>
              <div className="cardText pt-5 pb-5">
                <h4>
                  USD $8-12<span>/hour</span>
                </h4>
                <h5>Android Development</h5>
                <a
                  class="PricingApplyNowBtn w-100 p-2"
                  href="javascript:void(0)"
                >
                  Outsource Now
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AppDevelopment;