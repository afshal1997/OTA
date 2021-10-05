import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import CyberSecurityimg01 from '../../../Assets/Services/CyberSecurity/CyberSecurityimg01.png'

const SafeCyberSecurity = () => {
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Safe</text>
                                    </g>
                                </svg>
                                <h1>Cyber Security</h1>
                                <p>Secure your Data</p>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5><i><b>A Multilayer cybersecurity approach to keep your data safe and sound.</b></i></h5>
                                <h6>
                                    <b>
                                        Cyber attacks are available in all shapes and sizes. While some are overt ransomware attacks and others are covert operations; the only target is to hijack your valuable data or tools in exchange for money or to infiltrate your system. We secure your data from:
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
                                        Malware
                                    </li>
                                    <li>
                                        Phishing
                                    </li>
                                    <li>
                                        Social Engineering
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </Col>
                    <Col lg={3} className="m-auto">
                        <Bounce bottom>
                            <img className="w-100" src={CyberSecurityimg01} alt=""></img>
                        </Bounce>
                    </Col>
                    <Col lg={4} className="m-auto text-white">
                        <div className="RocketUlTwo">
                            <Fade right>
                                <ul>
                                    <li>
                                        Man-in-the-Middle (MitM) Attack
                                    </li>
                                    <li>
                                        Zero-day attack
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

export default SafeCyberSecurity
