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
                                <h2>Better Business</h2>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5><i>
                                    Words that leave a mark on one’s soul</i></h5>
                                <h6>
                                    Words are the instrumental mechanisms of human expression and the primal conveyors of substance for search engines. <strong>We're a digital marketing agency</strong> that knows the significance of great quality content all through your marketing strategy. Our team of <strong>professional content writers</strong> guarantees each piece of content that we dispatch is of outstanding quality and gives the outcomes you desire.
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
