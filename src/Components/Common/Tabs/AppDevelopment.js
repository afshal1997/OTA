import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PricingCardImg01 from "../../../Assets/Pricing/PricingCardImg01.png";
import PricingCardImg02 from "../../../Assets/Pricing/PricingCardImg02.png";
import PricingCardImg03 from "../../../Assets/Pricing/PricingCardImg03.png";
import GetStarted from "../Buttons/GetStarted";
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
                    <img loading='lazy' className="w-100" src={PricingCardImg01} alt='PricingCardImg01'></img>
                  </Card.Title>
                </Col>
              </div>
              <div className="cardText pt-5 pb-5">
                <h4>
                  USD <span className="dollar">$</span>10-15
                  <span className="hour">/hour</span>
                </h4>
                <h5 className="text-light">
                  <b>Android Development</b>
                </h5>
                <GetStarted buttonText='Sign-Up' buttonClass='PricingApplyNowBtn w-100 p-2' />

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
                    <img loading='lazy' className="w-100" src={PricingCardImg02} alt='PricingCardImg02'></img>
                  </Card.Title>
                </Col>
              </div>
              <div className="centerCard cardText pt-5 pb-5">
                <h4>
                  USD <span className="dollar">$</span>10-15
                  <span className="hour">/hour</span>
                </h4>
                <h5 className="text-light">
                  <b>IOS Development</b>
                </h5>
                <GetStarted buttonText='Sign-Up' buttonClass='PricingApplyNowBtn w-100 p-2' />

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
                    <img loading='lazy' className="w-100" src={PricingCardImg03} alt='PricingCardImg03'></img>
                  </Card.Title>
                </Col>
              </div>
              <div className="cardText pt-5 pb-5">
                <h4>
                  USD <span className="dollar">$</span>20-25
                  <span className="hour">/hour</span>
                </h4>
                <h5 className="text-light">
                  <b>Game Development</b>
                </h5>
                <GetStarted buttonText='Sign-Up' buttonClass='PricingApplyNowBtn w-100 p-2' />

              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AppDevelopment;
