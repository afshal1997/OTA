import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutUsFrom from '../../../Components/Common/AboutUsForm/AboutUsFrom'
import SocialMediaContact from '../../../Components/Common/SocialMediaContact'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const CyberSecurityMainBanner = () => {
    return (
        <div className="CyberSecurityMainBanner">
            <div className="DigitalStartupMainBanner">
                <Container>
                    <Row>
                        <Col lg={6} className="m-auto">
                            <div className="Outsource mt-5 mb-5">
                                <svg width="100%">
                                    <defs>
                                        <linearGradient id="gradient" y1="0" y2="1">
                                            <stop stopColor="#054084" offset="0" />
                                            <stop stopColor="#054084" offset="1" />
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Security</text>
                                    </g>
                                </svg>
                                <h1><Fade top cascade>Cyber Security</Fade></h1>
                                <p>
                                    <Bounce left cascade>
                                        Today, mainstream usage of "hacker" mostly refers to computer criminals, due to the mass media usage of the word since the 1980s. The controversy is usually based on the assertion that the term originally.
                                    </Bounce>
                                </p>
                                <Row>
                                    <Col lg={4}>
                                        <a href="" class="getStarted-btn">Get Started</a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} className="pt-5">
                            <AboutUsFrom />
                        </Col>
                    </Row>
                </Container>
            </div>
            <SocialMediaContact />
        </div>
    )
}

export default CyberSecurityMainBanner
