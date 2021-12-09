import React from 'react'
import Slider from "react-slick";
import { Card, Col, Container, Row } from 'react-bootstrap'
import client_1 from '../../../Assets/Icons/client-img-1.png'
import client_2 from '../../../Assets/Icons/client-img-2.png'
import client_3 from '../../../Assets/Icons/client-img-3.png'
import client_4 from '../../../Assets/Icons/client-img-4.jpeg'
import client_5 from '../../../Assets/Icons/client-img-5.jpg'
import client_6 from '../../../Assets/Icons/client-img-6.jpg'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { TestmonialsSliderSettings } from '../Settings/Settings'
const TestmonialsSlider = (props) => {


    return (
        <div>
            <div className="testmonialsSlider">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col lg={3} className="m-auto text-center">
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
                            <Zoom right><h2><strong>Testimonials</strong></h2></Zoom>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col lg={7} className="mt-5 text-center m-auto">
                            <Bounce right>
                                <p>
                                We’ve been the buzz of the town lately. Find out what people are saying about us.
                                </p>
                            </Bounce>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Slider className="TestmonialsSlider" {...TestmonialsSliderSettings}>
                                <div>
                                    <Card className="TestmonialsSliderCards">
                                        <p>{props.testmonialTitle.Paragraph1}</p>
                                        <div className="TestmonialsSliderCardsContent">
                                            <Row>
                                                <Col lg={3} className="m-auto col-2">
                                                    <img className="w-100" src={client_1} alt="client_1"></img>
                                                </Col>
                                                <Col lg={9} className="col-10 m-auto">
                                                    <h3>{props.testmonialTitle.Client1}</h3>
                                                    <h5>{props.testmonialTitle.ClientDesignation1}</h5>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="TestmonialsSliderCards">
                                        <p>{props.testmonialTitle.Paragraph2}</p>
                                        <div className="TestmonialsSliderCardsContent">
                                            <Row>
                                                <Col lg={3} className="m-auto col-2">
                                                    <img className="w-100" src={client_2} alt="client_2"></img>
                                                </Col>
                                                <Col lg={9} className="col-10 m-auto">
                                                    <h3>{props.testmonialTitle.Client2}</h3>
                                                    <h5>{props.testmonialTitle.ClientDesignation2}</h5>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="TestmonialsSliderCards">
                                        <p>{props.testmonialTitle.Paragraph3}</p>
                                        <div className="TestmonialsSliderCardsContent">
                                            <Row>
                                                <Col lg={3} className="m-auto col-2">
                                                    <img className="w-100" src={client_3} alt="client_3"></img>
                                                </Col>
                                                <Col lg={9} className="col-10 m-auto">
                                                    <h3>{props.testmonialTitle.Client3}</h3>
                                                    <h5>{props.testmonialTitle.ClientDesignation3}</h5>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="TestmonialsSliderCards">
                                        <p>{props.testmonialTitle.Paragraph4}</p>
                                        <div className="TestmonialsSliderCardsContent">
                                            <Row>
                                                <Col lg={3} className="testmonialImg m-auto col-2">
                                                    <img className="w-100" src={client_4} alt="client_4"></img>
                                                </Col>
                                                <Col lg={9} className="col-10 m-auto">
                                                    <h3>{props.testmonialTitle.Client4}</h3>
                                                    <h5>{props.testmonialTitle.ClientDesignation4}</h5>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="TestmonialsSliderCards">
                                        <p>{props.testmonialTitle.Paragraph5}</p>
                                        <div className="TestmonialsSliderCardsContent">
                                            <Row>
                                                <Col lg={3} className="testmonialImg m-auto col-2">
                                                    <img className="w-100" src={client_5} alt="client_5"></img>
                                                </Col>
                                                <Col lg={9} className="col-10 m-auto">
                                                    <h3>{props.testmonialTitle.Client5}</h3>
                                                    <h5>{props.testmonialTitle.ClientDesignation5}</h5>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="TestmonialsSliderCards">
                                        <p>{props.testmonialTitle.Paragraph6}</p>
                                        <div className="TestmonialsSliderCardsContent">
                                            <Row>
                                                <Col lg={3} className="testmonialImg m-auto col-2">
                                                    <img className="w-100" src={client_6} alt="client_6"></img>
                                                </Col>
                                                <Col lg={9} className="col-10 m-auto">
                                                    <h3>{props.testmonialTitle.Client6}</h3>
                                                    <h5>{props.testmonialTitle.ClientDesignation6}</h5>
                                                </Col>
                                            </Row>
                                        </div>
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
