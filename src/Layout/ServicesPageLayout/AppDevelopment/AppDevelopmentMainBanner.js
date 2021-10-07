import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutUsFrom from '../../../Components/Common/AboutUsForm/AboutUsFrom'
import SocialMediaContact from '../../../Components/Common/SocialMediaContact'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const AppDevelopmentMainBanner = () => {
    return (
        <div className="AppDevelopmentMainBanner">
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Mobile</text>
                                    </g>
                                </svg>
                                <h1><Fade top cascade>App Development</Fade></h1>
                                <p>
                                    <Bounce left cascade>
                                        With advanced technology in the world where mobile phones have become a total necessity and new softwares taking the world by storm; you don’t have to worry a thing about it!
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

export default AppDevelopmentMainBanner
