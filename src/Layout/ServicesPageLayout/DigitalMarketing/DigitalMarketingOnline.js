import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import DigitalMarketingImg01 from '../../../Assets/Services/DigitalMarketing/DigitalMarketingImg01.png'

const DigitalMarketingOnline = () => {
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Online</text>
                                    </g>
                                </svg>
                                <h1>Digital Marketing</h1>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5><i><b>OPPORTUNITY YOU NEVER WANT TO MISS</b></i></h5>
                                <h6>
                                    <b>
                                        We are trees that’s clearing the online marketing air for you. Our team of digital heroes design and enhance your online identity with a silver lining creating its spotlight which helps your products/services shine and stay out of the crowd. Our deliverables are focused around publishing your brand on digital profits and become the headlines through the gossip gals! Let's be more specific about our services;
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
                                        Social Media Marketing
                                    </li>
                                    <li>
                                        Search Engine Optimization
                                    </li>
                                    <li>
                                        Pay-Per-Click Advertising
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </Col>
                    <Col lg={3} className="m-auto">
                        <Bounce bottom>
                            <img className="w-100" src={DigitalMarketingImg01} alt="DigitalMarketingImg01"></img>
                        </Bounce>
                    </Col>
                    <Col lg={4} className="m-auto text-white">
                        <div className="RocketUlTwo">
                            <Fade right>
                                <ul>
                                    <li>
                                        Content Marketing.
                                    </li>
                                    <li>
                                        Email Marketing
                                    </li>
                                    <li>
                                        Lead Generation
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

export default DigitalMarketingOnline
