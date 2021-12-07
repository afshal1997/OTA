import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import OurService from '../../../Components/Common/OurService/OurService'
import Heading from '../../../Components/Common/PagesHeadings/Heading'
import VideoTestimonal from '../../../Components/Common/VideoTestimonal/VideoTestimonal'
import WhyChooseUs from '../../../Assets/PlansAssets/CallCenter/CallCenterWhyChooseUsBg.jpg'
import CallCenterIcon01 from '../../../Assets/PlansAssets/CallCenter/CallCenterIcon01.png'
import CallCenterIcon02 from '../../../Assets/PlansAssets/CallCenter/CallCenterIcon02.png'
import CallCenterIcon03 from '../../../Assets/PlansAssets/CallCenter/CallCenterIcon03.png'
import CallCenterIcon04 from '../../../Assets/PlansAssets/CallCenter/CallCenterIcon04.png'
import CallCenterIcon05 from '../../../Assets/PlansAssets/CallCenter/CallCenterIcon05.png'

const CallCenterChooseUs = () => {
    return (
        <div>
            <OurService>
                <Container>
                    <Heading Heading="Why Choose Us?" tagline="With us you will get multiple benefits such as :" MainHeading="Choose" />

                    <div className="WhyChooseUs">
                        <img className="w-100 processImg" src={WhyChooseUs} alt=""></img>
                        <Row className="mobile-view">
                            <Col className="for-mobile">
                                <Card className="WhyChooseUSCards">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={CallCenterIcon01} alt=""></img>
                                        <p><b>Saving On Operational Costs</b></p>
                                    </Col>
                                </Card>
                            </Col>
                            <Col className="for-mobile">
                                <Card className="WhyChooseUSCards">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <p><b>Efficiency And Time Saving</b></p>
                                        <img className="w-50 position-relative mb-4" src={CallCenterIcon02} alt=""></img>
                                    </Col>
                                </Card>
                            </Col>

                            <Col className="for-mobile">
                                <Card className="WhyChooseUSCards">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={CallCenterIcon03} alt=""></img>
                                        <p><b>Flexibility And Diversity</b></p>
                                    </Col>
                                </Card>
                            </Col>
                            <Col className="for-mobile">
                                <Card className="WhyChooseUSCards">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <p><b>Experienced <br></br> Staff</b></p>
                                        <img className="w-50 position-relative mb-4" src={CallCenterIcon04} alt=""></img>
                                    </Col>
                                </Card>
                            </Col>
                            <Col className="for-mobile">
                                <Card className="WhyChooseUSCards">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={CallCenterIcon05} alt=""></img>
                                        <p><b>Increased <br></br> ROI</b></p>
                                    </Col>
                                </Card>
                            </Col>
                        </Row>
                    </div>


                </Container>
                <Container>
                    <Row>
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
        </div>
    )
}

export default CallCenterChooseUs
