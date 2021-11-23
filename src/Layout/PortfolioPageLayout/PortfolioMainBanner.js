import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import SocialMediaContact from '../../Components/Common/SocialMediaContact'
import AboutUsFrom from '../../Components/Common/AboutUsForm/AboutUsFrom';
import './PortfolioPageLayout.css'

const PortfolioMainBanner = () => {
    return (
        <div className="PortfolioMainBanner">
            <div className="PortfolioBanner">
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
                                            <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Portfolio</text>
                                        </g>
                                    </svg>
                                    <h1>Guaranteeing</h1>
                                    <h3>Supreme Quality Services and an Optimal Experience Always and Forever</h3>
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

export default PortfolioMainBanner
