import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { SocialMediaMarketing } from "../../../Constants/DigitalMarketingServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";
import { Link } from 'react-router-dom';

const DigitalMarketingSocialMediaMarketing = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{SocialMediaMarketing.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{SocialMediaMarketing.title}</h1>
                    </Zoom>
                    <Fade>
                      <h6>
                        Amplify your <strong>brand awareness</strong> with Outsource to Asia’s in-house SMM Experts who are highly qualified in managing campaigns for different Social Media Marketing channels like Facebook, Instagram, Pinterest, Twitter, Reddit, and LinkedIn.

                      </h6>
                      <Row>
                        {SocialMediaMarketing.list.map((li, id) => {
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
                          buttonClass={SocialMediaMarketing.button[1]}
                          buttonText={SocialMediaMarketing.button[0]}
                        />
                      </Col>
                      <Col lg="3">
                        <Link to="/social-media-marketing" className={SocialMediaMarketing.button[1]}>
                          Read More
                        </Link>
                      </Col>
                    </Row>
                    <Col lg="3">
                    </Col>
                  </ul>
                </div>
              </div>
            </Bounce>
          </Col>
          <Col lg={5} className="m-auto">
            <Bounce left cascade>
              <img
                className="w-100"
                src={SocialMediaMarketing.SocialMediaMarketingImagePath}
                alt="SocialMediaMarketing.SocialMediaMarketingImagePath"
              ></img>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DigitalMarketingSocialMediaMarketing;
