import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutUsFrom from '../../../Components/Common/AboutUsForm/AboutUsFrom'
import SocialMediaContact from '../../../Components/Common/SocialMediaContact'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const MainBannerResourcesOutsourcing = () => {
    return (
        <div>
            <div className="plansPageResourcesOutsourcingMainBanner">
                <div className="ResourcesOutsourcingMainBanner">
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
                                            <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Outsource</text>
                                        </g>
                                    </svg>
                                    <h1><Fade top cascade>Your Essentials</Fade></h1>
                                    <h3><Bounce right cascade>To lift the burden off your shoulders!</Bounce></h3>
                                    <p>
                                        <Bounce left cascade>
                                            We treat resources like an asset helping your organization achieve goals in a minimum capacity - both time and infrastructure cost.
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
        </div>
    )
}

export default MainBannerResourcesOutsourcing
