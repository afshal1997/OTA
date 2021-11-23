import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import OurService from '../../../Components/Common/OurService/OurService'
import Heading from '../../../Components/Common/PagesHeadings/Heading'
import VideoTestimonal from '../../../Components/Common/VideoTestimonal/VideoTestimonal'
import WhyChooseUs from '../../../Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessImg03.png'
import ResourcesOutsourcingBusinessIcon03 from '../../../Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessIcon03.png'
import ResourcesOutsourcingBusinessIcon04 from '../../../Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessIcon04.png'
import ResourcesOutsourcingBusinessIcon05 from '../../../Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessIcon05.png'
import ResourcesOutsourcingBusinessIcon06 from '../../../Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessIcon06.png'

const ResourceOutsourcingProcess = () => {
    return (
        <div>
            <OurService>
                <Container>
                    <Heading Heading="How Does It Works?" tagline="It's as simple as we handle your resources!" MainHeading="Process" />

                    <div className="WhyChooseUs">
                        <img className="w-100 processImg" src={WhyChooseUs} alt=""></img>
                        <Row>
                            <Col>
                                <Card className="WhyChooseUSCards">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={ResourcesOutsourcingBusinessIcon03} alt=""></img>
                                        <p><b>Select the Resources You Want Us To Help With!</b></p>
                                    </Col>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="WhyChooseUSCards">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <p><b>Provide Us A Little Detail About Your Organization</b></p>
                                        <img className="w-50 position-relative mb-4" src={ResourcesOutsourcingBusinessIcon04} alt=""></img>
                                    </Col>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="WhyChooseUSCards">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={ResourcesOutsourcingBusinessIcon05} alt=""></img>
                                        <p><b>Schedule A Quick Meeting and Ola! You Are tOnboard!</b></p>
                                    </Col>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="WhyChooseUSCards">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <p><b>Enjoy the Growth of Your Organization</b></p>
                                        <img className="w-50 position-relative mb-4" src={ResourcesOutsourcingBusinessIcon06} alt=""></img>
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

export default ResourceOutsourcingProcess
