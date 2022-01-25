import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Practices from '../../../Assets/PlansAssets/WhiteLabelling/WhiteLabellingimg01.png'

const WhiteLabellingPractices = () => {
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Practices</text>
                                    </g>
                                </svg>
                                <h2 className='text-light'>We Have Developed Easy Ways</h2>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5><i>
                                    White-labeling
                                </i></h5>
                                <h5><i>Your secret weapon for exponential growth.!</i></h5>
                                <h6>
                                    Enhance customers' experience with <strong>higher-quality</strong>, <strong>affordable services</strong> by augmenting revenue generation opportunities through OTA's <strong>White labeling services</strong>. The <strong>digital marketing industry</strong> is growing at an exponential rate and being more competitive at each passing second. Reducing operational costs and instead focusing on core business goals is the need of every organization.
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
                                        Working with 1,000+ clients
                                    </li>
                                    <li>
                                        No joining fees
                                    </li>
                                    <li>
                                        High quality white labelling services
                                    </li>
                                    <li>
                                        Customized packages
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
                            <img className="w-100" src={Practices} alt="Practices"></img>
                        </Bounce>
                    </Col>
                    <Col lg={4} className="m-auto text-white">
                        <div className="RocketUlTwo">
                            <Fade right>
                                <ul>
                                    <li>
                                        Dedicated support
                                    </li>
                                    <li>
                                        Quick response rate
                                    </li>
                                    <li>
                                        Quick turnaround time
                                    </li>
                                    <li>
                                        Highly Creative Work
                                    </li>
                                    <li>
                                        Customer Satisfaction Guaranteed
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

export default WhiteLabellingPractices
