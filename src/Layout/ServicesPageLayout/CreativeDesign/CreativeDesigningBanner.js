import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import CreativeDesigningImg01 from '../../../Assets/Services/CreativeDesign/CreativeDesigningImg01.png'

const CreativeDesigningBanner = () => {
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Creative</text>
                                    </g>
                                </svg>
                                <h1>Creative Designing</h1>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5><i><b>Design That Leads To Undivided Attention</b></i></h5>
                                <h6>
                                    <b>
                                        Our creative designs don't need words to describe how phenomenon they are; being a mixed culture outsourcing agency, we drive every business towards success – either a small scale organization or a veteran company; we always come up with the out of the box ideas tailored to your consumer needs so your customers get hooked to your services/products in the matter of seconds.
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
                                        Logo Design
                                    </li>
                                    <li>
                                        UI Designs
                                    </li>
                                    <li>
                                        Social Media Design
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </Col>
                    <Col lg={3} className="m-auto">
                        <Bounce bottom>
                            <img className="w-100" src={CreativeDesigningImg01} alt=""></img>
                        </Bounce>
                    </Col>
                    <Col lg={4} className="m-auto text-white">
                        <div className="RocketUlTwo">
                            <Fade right>
                                <ul>
                                    <li>
                                        Promotional Design
                                    </li>
                                    <li>
                                        Video Design
                                    </li>
                                    <li>
                                        Web Design
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

export default CreativeDesigningBanner
