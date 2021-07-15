import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePageBannerTwo = () => {
    return (
        <div>
            <div className="section2" id="section2">
                <Container>
                    <Row>
                        <Col lg={6} className="ota_Bg">
                            <div className="whyChooseOta">
                                <h1>Why Choose</h1>
                                <h2>Outsource to Asia</h2>
                                <Row>
                                    <Col className="col-1 p-0"><i class="fas fa-long-arrow-alt-right text-primary"></i></Col>
                                    <Col className="col-11 p-0">
                                        <h3>WE ARE GOOD LISTENERS</h3>
                                    </Col>
                                </Row>
                            </div>
                            <div className="whyChoose">
                                <Row>
                                    <Col className="col-1 p-0"><i class="fas fa-long-arrow-alt-right text-primary"></i></Col>
                                    <Col className="col-11 p-0">
                                        <h3>WE ARE ASKING TO YOU TO CHOOSE GOOD</h3>
                                    </Col>
                                </Row>
                                <p>
                                    We are a digital marketing firm; belief in working with brains and a full heart to make sure your brand stays on the top of the google charts,
                                    taking daily feedback from our clients to build a long-lasting relationship while providing you with comfort while we focus on the increased
                                    profits at your disposal.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} className="m-auto">
                            <div className="whyChooseOta">
                                <Row>
                                    <Col className="col-1 p-0"><i class="fas fa-long-arrow-alt-right text-primary"></i></Col>
                                    <Col className="col-11 p-0">
                                        <h3>ONLY SMART WORK; BECAUSE IT'S BETTER THAN HARD WORK</h3>
                                    </Col>
                                </Row>
                                <p>
                                    We are one stop digital marketing solution; being at the disposal of pakistan’s rich culture and people working for us all round the world gives us the touch of every culture and mindset of different brands working around the globe - either in usa or asia. We thrive to become the #1, so our clients can stay on the top of, we provide a polished digital experience by providing high-quality and unique solutions to both entrepreneurs and businessmen out in the world.
                                </p>
                                <p>
                                    We make sure you wake up with the meaningful insights, a greater reach and greater brand awareness every day.
                                </p>

                                <Row>
                                    <Col lg={4} className="m-auto">
                                        <Link href="" className="learn-btn">Read to Learn</Link>
                                    </Col>
                                    <Col lg={4} className="m-auto">
                                        <Link href="" className="getStarted-btn">Read to Learn</Link>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HomePageBannerTwo
