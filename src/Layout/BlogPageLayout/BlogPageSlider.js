import React from "react";
import OurService from "../../Components/Common/OurService/OurService";
import Slider from "react-slick";
import { Card, Col, Container, Row } from "react-bootstrap";
import { popularPostsSlides } from "./../../Constants/popularPostsSlides";
import Heading from "../../Components/Common/PagesHeadings/Heading";
const BlogPageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    arrows: false,
    className: "popular-posts-slider ms-3 me-3 m-auto",
  };

  return (
    <OurService>
      <Container>
        <Row>
          <Col lg={6}>
            <Heading Heading="Popular Posts" MainHeading="OTA" />
          </Col>
          <Col lg={6} className="m-auto text-white text-end">
            <input type="search" className="form-control bg-transparent" />
          </Col>
        </Row>

        <Slider className="" {...settings}>
          {React.Children.toArray(
            popularPostsSlides.map(
              ({ slideImage, slideTitle, subText, details }) => (
                <Card className="bg-transparent px-3 border ">
                  <Row className="align-items-center">
                    <Col lg={3}>
                      <img src={slideImage} />
                    </Col>
                    <Col lg={9}>
                      <Card.Title className="text-light">
                        <h5>{slideTitle}</h5>
                        <p>{subText}</p>
                      </Card.Title>
                      <Card.Body className="text-light">{details}</Card.Body>
                    </Col>
                  </Row>
                </Card>
              )
            )
          )}
        </Slider>
      </Container>
    </OurService>
  );
};

export default BlogPageSlider;
