import React from "react";
import OurService from "../../Components/Common/OurService/OurService";
import Slider from "react-slick";
import { Card, Col, Container, Row } from "react-bootstrap";
import { popularPostsSlides } from "./../../Constants/popularPostsSlides";
import Bounce from 'react-reveal/Bounce';
const BlogPageSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    className: "popular-posts-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="OutsourcingBusiness">
      <Container>
        <Row>
          <Col lg={4} className="m-auto text-center">
            <Bounce right cascade>
              <div className="Business">
                <svg width="100%">
                  <defs>
                    <linearGradient id="gradient" y1="0" y2="1">
                      <stop stopColor="#054084" offset="0" />
                      <stop stopColor="#054084" offset="1" />
                    </linearGradient>
                  </defs>
                  <g>
                    <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">OTA</text>
                  </g>
                </svg>
                <h2 className="text-light">Popular Posts</h2>
              </div>
            </Bounce>
          </Col>
        </Row>

        <Slider className="" {...settings}>
          {React.Children.toArray(
            popularPostsSlides.map(
              ({ slideImage, slideTitle, subText, details }) => (
                <Card className="itemSlider">
                  <Row className="align-items-center">
                    <Col lg={5} className="col-5">
                      <img className="w-100" src={slideImage} alt='slideImage' />
                    </Col>
                    <Col lg={7} className="col-7 p-0">
                      <Card.Title className="text-light">
                        <h5 className="mb-0">{slideTitle}</h5>
                        <h6>{subText}</h6>
                      </Card.Title>
                      <div><span>{details}</span></div>
                    </Col>
                  </Row>
                </Card>
              )
            )
          )}
        </Slider>
      </Container>
    </div>
  );
};

export default BlogPageSlider;
