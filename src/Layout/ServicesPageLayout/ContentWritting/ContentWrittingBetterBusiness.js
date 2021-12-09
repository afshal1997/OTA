import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import ContentWrittingImg01 from '../../../Assets/Services/ContentWritting/ContentWrittingImg01.png'

const ContentWrittingBetterBusiness = () => {
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Online</text>
                                    </g>
                                </svg>
                                <h1>Better Business</h1>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5><i><b>YOU CAN STOP WARS WITH WRITING</b></i></h5>
                                <h6>
                                    <b>
                                        We are professional writers with a weird obsession of making everything creative and huge. We travel towards the authenticity to make sure there is reliability on everything we write; whether it’s just a post or na entire website, we produce high-quality content so you keep coming for more. We crack every code to your customer’s heart and provide you the key to their bank accounts – making sure the writing conquers every battle. Get enlightened from our services in-depth;
                                    </b>
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
                                        Web Page Content
                                    </li>
                                    <li>
                                        Blog Posts
                                    </li>
                                    <li>
                                        Articles
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </Col>
                    <Col lg={3} className="m-auto">
                        <Bounce bottom>
                            <img className="w-100" src={ContentWrittingImg01} alt="ContentWrittingImg01"></img>
                        </Bounce>
                    </Col>
                    <Col lg={4} className="m-auto text-white">
                        <div className="RocketUlTwo">
                            <Fade right>
                                <ul>
                                    <li>
                                        Product Description
                                    </li>
                                    <li>
                                        Guest Blogging
                                    </li>
                                    <li>
                                        Social Media Captions
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

export default ContentWrittingBetterBusiness
