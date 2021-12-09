import React from 'react'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row } from 'react-bootstrap';
import Rocket from '../../../Assets/PlansAssets/DigitalStartup/DigitalStartupImg01.png'

const ServicesProvidingBanner = () => {
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Startups</text>
                                    </g>
                                </svg>
                                <h1>Services Providing Unique</h1>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5><i><b>For Digital Startups</b></i></h5>
                                <h6>
                                    <b>
                                        Digital practices have gone global and there is no way you can operate your business successfully without it. We provide well-strategized digital services to startups struggling to gain reach and conversion within the shortest time period. Our aim is to provide our clients with full commitment and a growth-oriented approach.
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
                                        Affordable and reliable services
                                    </li>
                                    <li>
                                        Great returns
                                    </li>
                                    <li>
                                        Improved conversions
                                    </li>
                                    <li>
                                        No barriers to communication
                                    </li>
                                    <li>
                                        Fast delivery
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </Col>
                    <Col lg={3} className="m-auto">
                        <Bounce bottom>
                            <img className="w-100" src={Rocket} alt="Rocket"></img>
                        </Bounce>
                    </Col>
                    <Col lg={4} className="m-auto text-white">
                        <div className="RocketUlTwo">
                            <Fade right>
                                <ul>
                                    <li>
                                        24/7 customer support
                                    </li>
                                    <li>
                                        Improved brand performance
                                    </li>
                                    <li>
                                        No room for errors
                                    </li>
                                    <li>
                                        Top-notch quality
                                    </li>
                                    <li>
                                        End-to-end services
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

export default ServicesProvidingBanner
