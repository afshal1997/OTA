import React from 'react'
import './HomePage.css'
import BannerImg01 from '../../Assets/HomeAssets/bannerImg01.png'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomePageMainBnanner() {
    return (
        <div>
            <div className="homeMainBanner">
                <div className="circleImg">
                    <Container>
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
                                <Link href="/"><i className="fas fa-mouse text-white opaCity-md"></i><br></br><i className="fas fa-arrow-down"></i></Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default HomePageMainBnanner
