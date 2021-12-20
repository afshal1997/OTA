import React from 'react'
import BannerImg01 from '../../Assets/HomeAssets/bannerImg01.png'
import { Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import SocialMediaContact from '../../Components/Common/SocialMediaContact'

function HomePageMainBnanner() {
    return (
        <div>
            <div className="homeMainBanner">
                <div className="star-field">
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="circleImg">
                        <Container>
                            <div className="mainBannerServices">
                                <Row>
                                    <Col lg={3}></Col>
                                    <Col lg={3} className="col-6">
                                        <div className="servicesBox text-light position-relative">
                                            <h5>Web Development</h5>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="col-6">
                                        <div className="servicesBox1 text-light position-relative">
                                            <h5>Resource Outsourcing</h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="mainBannerServices">
                                <Row>
                                    <Col lg={1}></Col>
                                    <Col lg={3} className="col-6">
                                        <div className="servicesBox2 text-light position-relative">
                                            <h5>Creative &#38; Design</h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Row>
                                <Col lg={8} className="m-auto">
                                    <div className="mainBanner">
                                        <img src={BannerImg01} alt='BannerImg01'></img>
                                        <svg width="100%">
                                            <defs>
                                                <linearGradient id="gradient" y1="0" y2="1">
                                                    <stop stopColor="#696368" offset="0" />
                                                    <stop stopColor="#76485f" offset="1" />
                                                </linearGradient>
                                            </defs>
                                            <g>
                                                <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Digital Startup</text>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="text">
                                        <h1>Offshore Partners For <Zoom right cascade><span>Digital Supremacy</span></Zoom></h1>
                                        <Bounce>
                                            <p>
                                                Crafting ingenious digital experiences that power startups, scale-up corporations <br></br> and bring digital transformation to family businesses.
                                            </p>
                                        </Bounce>
                                    </div>

                                    <div className="mainBannerServices">
                                        <Row>
                                            <Col lg={1}></Col>
                                            <Col lg={5} className="col-12">
                                                <div className="servicesBox3 text-light position-relative">
                                                    <h5>App Development</h5>
                                                </div>
                                            </Col>
                                            <Col lg={5} className="col-12">
                                                <div className="servicesBox4 text-light position-relative">
                                                    <h5>Digital Marketing</h5>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col lg={3} className="m-auto scrollDown">
                                    <a href="#section2"><i className="fas fa-mouse text-white opaCity-md"></i><br></br><i className="fas fa-arrow-down animatedArrow"></i></a>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <SocialMediaContact />
                    <div className="homeMainBannerOverlay"></div>
                </div>
            </div>
        </div>
    )
}

export default HomePageMainBnanner
