import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { BusinessAndSolutionsContent } from "../../../Constants/ContentWrittingServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";
import { Link } from "react-router-dom";
const ContentWrittingWebPageCopy = () => {
  return (
    <div className="mt-5 pt-5 mb-5">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <Bounce right cascade>
              <img
                className="w-100"
                src={
                  BusinessAndSolutionsContent.BusinessAndSolutionsContentImagePath
                }
                alt="BusinessAndSolutionsContent.BusinessAndSolutionsContentImagePath"
              ></img>
            </Bounce>
          </Col>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">
                  {BusinessAndSolutionsContent.heading}
                </span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{BusinessAndSolutionsContent.title}</h1>
                    </Zoom>
                    <Fade>
                      <p>
                        Without good content, even an impeccably designed website will struggle to engage visitors, let alone <strong><Link to='/digital-startup' className='text-decoration-none'>generate leads</Link></strong>. Our expert <strong>copywriters</strong> churn out
                        <strong> <Link to='/web-development-services' className='text-decoration-none'>high-quality web </Link></strong>
                        copies that are compelling, gripping, and relevant.
                      </p>
                      <Row>
                        {BusinessAndSolutionsContent.list.map((li, id) => {
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
                      <GetStarted buttonText={`${BusinessAndSolutionsContent.button[0]}`} buttonClass={`${BusinessAndSolutionsContent.button[1]}`} />
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

export default ContentWrittingWebPageCopy;
