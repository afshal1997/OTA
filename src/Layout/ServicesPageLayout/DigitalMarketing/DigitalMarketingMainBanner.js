import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import AboutUsFrom from "../../../Components/Common/AboutUsForm/AboutUsFrom";
import SocialMediaContact from '../../../Components/Common/SocialMediaContact'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const DigitalMarketingMainBanner = () => {
    return (
        <div className="DigitalMarketingMainBanner">
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Smart</text>
                                    </g>
                                </svg>
                                <h1><Fade top cascade>Digital Marketing</Fade></h1>
                                <p>
                                    <Bounce left cascade>
                                        Outline your brand with exclusive digital marketing that interprets what it’s like to be extraordinary. We help brands that are as smart as they're efficient.
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

export default DigitalMarketingMainBanner
