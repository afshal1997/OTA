import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import OurService from '../../../Components/Common/OurService/OurService'
import Heading from '../../../Components/Common/PagesHeadings/Heading'
import VideoTestimonal from '../../../Components/Common/VideoTestimonal/VideoTestimonal'
import WhyChooseUs from '../../../Assets/PlansAssets/CallCenter/CallCenterWhyChooseUsBg.jpg'
import { importAll } from '../../../Constants/functions'
const CallCenterChooseUs = () => {
    const callCenter = ['Saving On Operational Costs', 'Efficiency And Time Saving', 'Flexibility And Diversity', 'Experienced Staff', 'Increased ROI']
    return (
        <div>
            <OurService>
                <Container>
                    <Heading Heading="Why Choose Us?" tagline="With us you will get multiple benefits such as :" MainHeading="Choose" />

                    <div className="WhyChooseUs">
                        <img className="w-100 processImg" src={WhyChooseUs} alt=""></img>
                        <Row className="mobile-view">
                            {Object.values(importAll(require.context('../../../Assets/PlansAssets/CallCenter/icons', false, /\.(png|jpe?g|svg)$/))).map((path, id) => {
                                return (
                                    <Col className="for-mobile">
                                        <Card className="WhyChooseUSCards">
                                            <Col lg={8} className="m-auto text-center p-0">
                                                <img className="w-50 position-relative mb-4" src={path.default} alt="CallCenterIcon01"></img>
                                                <p><b>{callCenter[id]}</b></p>
                                            </Col>
                                        </Card>
                                    </Col>
                                )
                            })}
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
