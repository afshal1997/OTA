import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import VideoAnimationImg01 from '../../../Assets/Services/VideoDevelopment/VideoAnimationImg01.png'

const VideoDevelopmentOnline = () => {
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Creative</text>
                                    </g>
                                </svg>
                                <h2>Video Animation</h2>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5>
                                    <i>
                                        Your Emotions In Motion
                                    </i>
                                </h5>
                                <h6>
                                    <strong>
                                        Everybody has a story to tell. Yours is considerably more remarkable than you know. Your purchasers need to know you. They need to see your excellence. Our animators connect you with endless possibilities and transform them into moving and breathing masterpieces!
                                    </strong>
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
                            <img className="w-100" src={VideoAnimationImg01} alt="VideoAnimationImg01"></img>
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

export default VideoDevelopmentOnline
