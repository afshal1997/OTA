import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import WebDevelopmentImage01 from '../../../Assets/Services/WebDevelopment/WebDevelopmentImage01.png'

const WebDevelopmentBranding = () => {
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
                                <h2>Web Development</h2>
                                <p>A Creative Branding Idea</p>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5>
                                    <i>
                                        We don’t just build a website; We mold brands from the ground up.
                                    </i>
                                </h5>
                                <h6>

                                    We provide customer-centric end-to-end online solutions based on our vast domain experience, technical skills, in-depth understanding of current market trends, and quality-driven delivery strategy. Our <strong>custom web design services and packages</strong> will launch your brand in the limelight, strengthening your brand identity and perception. Being a leading <strong>offshore web development</strong> firm catering with result-oriented and cost-competitive solutions across the globe, Outsource to Asia LLC offers a wide array of <strong>web-based digital solutions</strong> to enterprises-big or small, including:

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
                                        Basic Website
                                    </li>
                                    <li>
                                        Custom website
                                    </li>
                                    <li>
                                        E-commerce
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </Col>
                    <Col lg={3} className="m-auto">
                        <Bounce bottom>
                            <img className="w-100" src={WebDevelopmentImage01} alt=""></img>
                        </Bounce>
                    </Col>
                    <Col lg={4} className="m-auto text-white">
                        <div className="RocketUlTwo">
                            <Fade right>
                                <ul>
                                    <li>
                                        Marketplace
                                    </li>
                                    <li>
                                        Responsive Website
                                    </li>
                                    <li>
                                        B2B & B2C Portal
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

export default WebDevelopmentBranding
