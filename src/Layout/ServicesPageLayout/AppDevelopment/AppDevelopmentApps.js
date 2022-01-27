import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import AppDevelopmentImg01 from '../../../Assets/Services/AppDevelopment/AppDevelopmenimg01.png'
import { Link } from 'react-router-dom'

const AppDevelopmentApps = () => {
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Custom</text>
                                    </g>
                                </svg>
                                <h2>Application Development</h2>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5>
                                    <i>
                                        Assisting you to find mobility with innovation.
                                    </i>
                                </h5>
                                <h6>
                                    Without a doubt, app development has the potential to determine the fate of your business. From <strong><Link to='/web-development-services' className='text-decoration-none'>development to optimization</Link></strong>, OTA is your all-in-one <strong> outsourcing app development</strong> partner. We design and create your adaptable application from concept to completion, integrating the new product into your framework and scaling up as needed.
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
                                        Android Apps
                                    </li>
                                    <li>
                                        iOS Apps
                                    </li>
                                    <li>
                                        Web Apps
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </Col>
                    <Col lg={3} className="m-auto">
                        <Bounce bottom>
                            <img className="w-100" src={AppDevelopmentImg01} alt="AppDevelopmentImg01"></img>
                        </Bounce>
                    </Col>
                    <Col lg={4} className="m-auto text-white">
                        <div className="RocketUlTwo">
                            <Fade right>
                                <ul>
                                    <li>
                                        Facebook Apps
                                    </li>
                                    <li>
                                        Game Apps
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

export default AppDevelopmentApps
