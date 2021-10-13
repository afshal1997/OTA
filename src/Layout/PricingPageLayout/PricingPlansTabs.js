import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import CreativeDesigningImg01 from '../../Assets/Services/CreativeDesign/CreativeDesigningImg01.png'

const PricingPlansTabs = () => {
    return (
        <div className="OutsourcingBusiness">
            <Container>
                <Row>
                    <Col lg={6}>
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Plans</text>
                                    </g>
                                </svg>
                                <h1>Our Pricing</h1>
                                <h5>Most Affordable</h5>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5><i><b>Introducing Outsource to asia new pricing packages.</b></i></h5>
                                <h6>
                                    <b>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </b>
                                </h6>
                            </div>
                        </Bounce>
                    </Col>
                </Row>

                <Row className="mt-5 pt-2">
                    <Col lg={4} className="m-auto text-white">
                        <div className="RocketUlOne">
                            <Fade left>
                                <ul>
                                    <li>
                                        Logo Design
                                    </li>
                                    <li>
                                        UI Designs
                                    </li>
                                    <li>
                                        Social Media Design
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </Col>
                    <Col lg={3} className="m-auto">
                        <Bounce bottom>
                            <img className="w-100" src={CreativeDesigningImg01} alt=""></img>
                        </Bounce>
                    </Col>
                    <Col lg={4} className="m-auto text-white">
                        <div className="RocketUlTwo">
                            <Fade right>
                                <ul>
                                    <li>
                                        Promotional Design
                                    </li>
                                    <li>
                                        Video Design
                                    </li>
                                    <li>
                                        Web Design
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default PricingPlansTabs
