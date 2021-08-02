import React from 'react'
import BannerImg01 from '../../Assets/HomeAssets/bannerImg01.png'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import servicesLine from '../../Assets/HomeAssets/servicesLine.png'

function HomePageMainBnanner() {
    return (
        <div>
            <div className="homeMainBanner">
                <div className="circleImg">
                    <Container>
                        <div className="mainBannerServices">
                            <Row>
                                <Col lg={3}></Col>
                                <Col lg={3}>
                                    <div className="servicesBox text-light position-relative">
                                        <h5>Web Development</h5>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col lg={8} className="m-auto">
                                <div className="mainBanner">
                                    <img src={BannerImg01}></img>
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
                                    <h1>Lets Have a <span>Digital Startup</span></h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum <br></br> has been the industry's standard dummy text ever since the 1500s,</p>
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
                <Container fluid>
                    <div className="mainBannerSocialMediaIcons">
                        <ul>
                            <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="/"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                    <div className="mainBannerContact">
                        <ul>
                            <li>
                                <a href="tel:+16312506471"><i class="fas fa-phone-alt"></i> +1 631-250-6471</a>
                            </li>

                            <li>
                                <a href="mailto:info@outsourcetoasia.co"><i class="fas fa-envelope-open"></i>info@outsourcetoasia.co</a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default HomePageMainBnanner
