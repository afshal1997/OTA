import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { SocialMediaDesign } from "../../../Constants/CreativeDesignWowCustomers";
import { useDispatch } from "react-redux";
import { CHANGE_MODAL } from "../../../Store/Action";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";
import { Link } from "react-router-dom";

const CreativeDesignSocialMedia = () => {
  const dispatch = useDispatch();
  return (
    <div className="mt-5 pt-5">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce right cascade>
              <img
                className="w-100"
                src={SocialMediaDesign.SocialMediaDesignImagePath}
                alt="SocialMediaDesign.SocialMediaDesignImagePath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{SocialMediaDesign.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{SocialMediaDesign.title}</h1>
                    </Zoom>
                    <Fade>
                      <p>
                        Our designers have fostered an effective design strategy to help your brand image be impactful and remembered with clean, clear, and unique graphics that match your brand's visual identity. Grasping the <strong><Link to='/seo-digital-marketing' className='text-decoration-none'> power of social media </Link></strong> that:
                      </p>
                      <Row>
                        {SocialMediaDesign.list.map((li, id) => {
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
                      <GetStarted buttonClass={SocialMediaDesign.button[1]} buttonText={SocialMediaDesign.button[0]}>

                      </GetStarted>
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

export default CreativeDesignSocialMedia;
