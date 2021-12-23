import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { ArticleWriting } from "../../../Constants/ContentWrittingServices";
import GetStarted from "../../../Components/Common/Buttons/GetStarted";

const ContentWrittingArticleWriting = () => {
  return (
    <div className="mt-5 pt-5">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <Bounce right cascade>
              <div className="StartUp pt-5 mt-5">
                <span class="BgText">{ArticleWriting.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    <Zoom right cascade>
                      <h1>{ArticleWriting.title}</h1>
                    </Zoom>
                    <Fade>
                      <p>
                        <b>{ArticleWriting.description}</b>
                      </p>
                      <Row>
                        {ArticleWriting.list.map((li, id) => {
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
                      <GetStarted buttonText={ArticleWriting.button[0]} buttonClass={ArticleWriting.button[1]} />
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
                src={ArticleWriting.ArticleWritingImagePath}
                alt="ArticleWriting.ArticleWritingImagePath"
              ></img>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentWrittingArticleWriting;
