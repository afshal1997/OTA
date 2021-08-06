import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AboutUsMainBanner = () => {
    return (
        <div>
            <div className="aboutUsPageBanner">
                <div>
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <div className="smartWork">
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
                                    <h1>Only Smart Work; </h1>
                                    <h3>Because It's Better Than Hard Work</h3>
                                    <p>
                                        We make sure you wake up with the meaningful insights, a greater reach and greater brand awareness every day.
                                        We are one stop digital marketing solution; being at the disposal of pakistan’s rich culture and people working for us all round the world gives us the touch of every culture and mindset of different brands working around the globe - either in usa or asia. We thrive to become the #1, so our clients can stay on the top of, we provide a polished digital experience by providing high-quality and unique solutions to both entrepreneurs and businessmen out in the world.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default AboutUsMainBanner
