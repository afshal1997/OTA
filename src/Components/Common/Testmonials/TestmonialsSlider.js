import React from 'react'
import Slider from "react-slick";
import { Card, Col, Container, Row } from 'react-bootstrap'

const TestmonialsSlider = () => {
    const TestmonialsSliderSettings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        };
    return (
        <div>
            <div className="testmonialsSlider">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col lg={2} className="m-auto text-center">
                            <svg width="100%">
                                <defs>
                                    <linearGradient id="gradient" y1="0" y2="1">
                                        <stop stopColor="#696368" offset="0" />
                                        <stop stopColor="#76485f" offset="1" />
                                    </linearGradient>
                                </defs>
                                <g>
                                    <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Clients</text>
                                </g>
                            </svg>
                            <h2><strong>Testmonials</strong></h2>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col lg={7} className="mt-5 text-center m-auto">
                            <p>
                                Outsource Any Of Your Project To Us. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Slider className="TestmonialsSlider" {...TestmonialsSliderSettings}>
                                <div>
                                    <Card className="TestmonialsSliderCards">
                                        <p>
                                            Beyondant has been pleased to have entered into a joint venture with Outsource To Asia. The JV provides offshore resources as an augmentation to our U.S back office departments....
                                        </p>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="TestmonialsSliderCards">
                                        <p>
                                            Beyondant has been pleased to have entered into a joint venture with Outsource To Asia. The JV provides offshore resources as an augmentation to our U.S back office departments....
                                        </p>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="TestmonialsSliderCards">
                                        <p>
                                            Beyondant has been pleased to have entered into a joint venture with Outsource To Asia. The JV provides offshore resources as an augmentation to our U.S back office departments....
                                        </p>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="TestmonialsSliderCards">
                                        <p>
                                            Beyondant has been pleased to have entered into a joint venture with Outsource To Asia. The JV provides offshore resources as an augmentation to our U.S back office departments....
                                        </p>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="TestmonialsSliderCards">
                                        <p>
                                            Beyondant has been pleased to have entered into a joint venture with Outsource To Asia. The JV provides offshore resources as an augmentation to our U.S back office departments....
                                        </p>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="TestmonialsSliderCards">
                                        <p>
                                            Beyondant has been pleased to have entered into a joint venture with Outsource To Asia. The JV provides offshore resources as an augmentation to our U.S back office departments....
                                        </p>
                                    </Card>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default TestmonialsSlider
