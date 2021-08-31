import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutUsForm from '../../Components/Common/AboutUsForm/AboutUsFrom'
import SocialMediaContact from '../../Components/Common/SocialMediaContact'

const AboutUsMainBanner = () => {
    return (
        <div>
            <div className="aboutUsPageBanner">
                <div className="aboutUsMainBanner">
                    <Container>
                        <Row>
                            <Col lg={6} className="m-auto">
                                <div className="smartWork mt-5 mb-5">
                                    <svg width="100%">
                                        <defs>
                                            <linearGradient id="gradient" y1="0" y2="1">
                                                <stop stopColor="#054084" offset="0" />
                                                <stop stopColor="#054084" offset="1" />
                                            </linearGradient>
                                        </defs>
                                        <g>
                                            <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">About Us</text>
                                        </g>
                                    </svg>
                                    <h1>Only Smart Work; </h1>
                                    <h3>Because It's Better Than Hard Work</h3>
                                    <p>
                                        We make sure you wake up with the meaningful insights, a greater reach and greater brand awareness every day.
                                    </p>
                                    <Row>
                                        <Col lg={4}>
                                            <a href="" class="getStarted-btn">Get Started</a>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={6} className="pt-5">
                                <AboutUsForm />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <SocialMediaContact />
            </div>
        </div>
    )
}

export default AboutUsMainBanner
