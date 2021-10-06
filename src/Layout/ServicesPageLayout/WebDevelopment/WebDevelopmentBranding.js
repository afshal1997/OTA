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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Branding</text>
                                    </g>
                                </svg>
                                <h1>Web Development</h1>
                                <p>A Creative Branding Idea</p>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5><i><b>Just Like Your House; Your Website Requires Renovation</b></i></h5>
                                <h6>
                                    <b>
                                        Website is the place to grab that attention of the online shoppers, creating a scenery for your brand; developing the environment that welcome all with the open arms; at ota, we make sure things never go wrong. After listening to your every need and a thousands of changes – we deliver a bug-free, smooth running, eye soothing website from the comfort of your pocket and at the front of your table, our valuable web design outsourcing includes
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
