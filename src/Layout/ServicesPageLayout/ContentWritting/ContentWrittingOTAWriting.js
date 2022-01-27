import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import {
  BlogWritingService,
  OTAWrittingService,
} from "../../../Constants/ContentWrittingServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";
import { Link } from "react-router-dom";

const ContentWrittingOTAWriting = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp">
                <span class="BgText">{OTAWrittingService.heading}</span>
                <Row className="OurServicesHeading">
                  <Col className="col-1"></Col>
                  <Col className="col-1 m-auto">
                    <i class="fas fa-long-arrow-alt-right text-primary"></i>
                  </Col>
                  <Col className="col-10">
                    <Zoom right cascade>
                      <h1>{OTAWrittingService.title}</h1>
                    </Zoom>
                  </Col>
                </Row>
              </div>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right>
              <h6>
                When you work with <strong><Link to='/' className='text-decoration-none'>OTA</Link></strong>, we align our <strong>content writing services</strong> with your brand’s business and marketing objectives, feeding your marketing machine the content it needs to create genuine outcomes for your company. Given our team's adaptation of the most recent news, trends, and insights, we dig deep into driving consumer attention to indelible memory through effective <strong>content writing</strong> tricks!
              </h6>
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={BlogWritingService.BlogWritingServiceImgPath}
                alt="BlogWritingService.BlogWritingServiceImgPath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{BlogWritingService.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{BlogWritingService.title}</h1>
                    </Zoom>
                    <Fade>
                      <h6>
                        Blogs are an incredible method for informing, teaching, and even engaging your target audience. High-grade <strong>blog writing services</strong> that not only aid in SEO but also increase site traffic.
                      </h6>
                      <Row>
                        {BlogWritingService.list.map((li, id) => {
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
                      <GetStarted buttonText={BlogWritingService.button[0]} buttonClass={BlogWritingService.button[1]} />
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

export default ContentWrittingOTAWriting;
