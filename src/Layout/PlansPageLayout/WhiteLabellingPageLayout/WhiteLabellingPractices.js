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
                                <h5><i><b>And Best Practices </b></i></h5>
                                <h5><i><b>To Always Remains Your First Choice.</b></i></h5>
                                <h6>
                                    <b>
                                        If you are a digital marketing agency owner or the head of business, you know exactly what it takes to acquire one account and to deliver optimum level services while keeping long term relationship. Reducing costs and the ability to focus on core business goals is the need of every organization. As you already know that the digital marketing industry is growing at an exponential rate due to rapid growth and there are three core challenges that your agency is facing.
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
