import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import DigitalMarketingImg01 from '../../../Assets/Services/DigitalMarketing/DigitalMarketingImg01.png'
import { Link } from 'react-router-dom';

const DigitalMarketingOnline = () => {
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Custom</text>
                                    </g>
                                </svg>
                                <h2>Online Marketing</h2>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5><i>Target clients at the ideal time on the ideal platform</i></h5>
                                <h6>
                                    At <strong><Link to='/' className='text-decoration-none'>OTA</Link></strong> we comprehend that every one of our customers is unique and requires diverse marketing plans. Hence, we give a wide scope of <strong>digital marketing services</strong> to meet your requirements. In light of your requirements, we will foster a custom internet marketing plan and execute it to assist with further development. We need to guarantee that your business is effective, thus, we put a huge amount of effort into crafting a unique marketing package.
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
                                        Social Media Marketing
                                    </li>
                                    <li>
                                        Search Engine Optimization
                                    </li>
                                    <li>
                                        Pay-Per-Click Advertising
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </Col>
                    <Col lg={3} className="m-auto">
                        <Bounce bottom>
                            <img className="w-100" src={DigitalMarketingImg01} alt="DigitalMarketingImg01"></img>
                        </Bounce>
                    </Col>
                    <Col lg={4} className="m-auto text-white">
                        <div className="RocketUlTwo">
                            <Fade right>
                                <ul>
                                    <li>
                                        Content Marketing.
                                    </li>
                                    <li>
                                        Email Marketing
                                    </li>
                                    <li>
                                        Lead Generation
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

export default DigitalMarketingOnline
