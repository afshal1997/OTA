import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OurService from "../../../Components/Common/OurService/OurService";
import Heading from "../../../Components/Common/PagesHeadings/Heading";
import SearchEngineOptimization from "../../../Components/Common/Tabs/SearchEngineOptimization";
import VideoTestimonal from "../../../Components/Common/VideoTestimonal/VideoTestimonal";

const DigitalMarketingPricing = () => {
  return (
    <div>
      <OurService>
        <Container>
          <Row>
            <Col lg={12} className="m-auto">
              <Heading
                Heading="Digital Marketing"
                tagline="Introducing Outsource To Asia new pricing packages."
                MainHeading=""
              />
            </Col>
            <SearchEngineOptimization />
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <VideoTestimonal />
        </Container>
      </OurService>
    </div>
  );
};

export default DigitalMarketingPricing;
