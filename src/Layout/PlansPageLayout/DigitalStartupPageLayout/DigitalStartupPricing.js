import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OurService from '../../../Components/Common/OurService/OurService'
import Heading from '../../../Components/Common/PagesHeadings/Heading'
import VideoTestimonal from '../../../Components/Common/VideoTestimonal/VideoTestimonal'

const DigitalStartupPricing = () => {
    return (
        <div className="DigitalStartupPricing">
            <OurService>
                <Container>
                    <Row>
                        <Col lg={12} className="m-auto text-center">
                            <Heading Heading="Starting Prices" tagline="With us you will get multiple benefits such as :" MainHeading="Pricing" />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg={4} className="text-center">
                            <div className="card PricingCard">
                                <h1>BASIC</h1>
                                <h3><span>USD -</span> $399</h3>
                                <div className="textBox">
                                    <p>
                                        In this plan we are offering you basic services so you can start up your new home based business in very low amount.
                                    </p>
                                </div>
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Brand Website</li>
                                    <li>Social Media Presence</li>
                                    <li>Marketing Material</li>
                                    <li>Operational Support</li>
                                    <li>Dialpad & Zendesk</li>
                                    <li>xxx</li>
                                    <li>xxx</li>
                                    <li>xxx</li>
                                    <li>xxx</li>
                                    <li></li>
                                </ul>
                                <a className="PricingApplyNowBtn w-100" href="javascript:void(0)">Apply Now</a>
                            </div>
                    </Col>
                    <Col lg={4} className="text-center">
                        <div className="card PricingCard ActivePricingCard">
                            <h1>BASIC</h1>
                            <h3><span>USD -</span> $399</h3>
                            <div className="textBox">
                                <p>
                                    In this plan we are offering you basic services so you can start up your new home based business in very low amount.
                                </p>
                                </div>
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Brand Website</li>
                                    <li>Social Media Presence</li>
                                    <li>Marketing Material</li>
                                    <li>Operational Support</li>
                                    <li>Dialpad & Zendesk</li>
                                    <li>xxx</li>
                                    <li>xxx</li>
                                    <li>xxx</li>
                                    <li>xxx</li>
                                    <li></li>
                                </ul>
                                <a className="PricingApplyNowBtn w-100" href="javascript:void(0)">Apply Now</a>
                            </div>
                    </Col>
                    <Col lg={4} className="text-center">
                        <div className="card PricingCard">
                            <h1>BASIC</h1>
                            <h3><span>USD -</span> $399</h3>
                            <div className="textBox">
                                <p>
                                    In this plan we are offering you basic services so you can start up your new home based business in very low amount.
                                </p>
                                </div>
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Brand Website</li>
                                    <li>Social Media Presence</li>
                                    <li>Marketing Material</li>
                                    <li>Operational Support</li>
                                    <li>Dialpad & Zendesk</li>
                                    <li>xxx</li>
                                    <li>xxx</li>
                                    <li>xxx</li>
                                    <li>xxx</li>
                                    <li></li>
                                </ul>
                                <a className="PricingApplyNowBtn w-100" href="javascript:void(0)">Apply Now</a>
                            </div>
                    </Col>
                </Row>
                    <Row className="mt-5">
                        <Col lg={4}></Col>
                        <Col lg={6} className="m-auto">
                            <div className="watch">
                                <svg width="100%">
                                    <defs>
                                        <linearGradient id="gradient" y1="0" y2="1">
                                            <stop stopColor="#054084" offset="0" />
                                            <stop stopColor="#054084" offset="1" />
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Watch</text>
                                    </g>
                                </svg>
                            </div>
                        </Col>
                    </Row>
                    <VideoTestimonal />

            </Container>
        </OurService>
        </div >
    )
}

export default DigitalStartupPricing
