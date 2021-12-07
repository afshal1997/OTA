import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OurService from '../../../Components/Common/OurService/OurService'
import Heading from '../../../Components/Common/PagesHeadings/Heading'
import VideoTestimonal from '../../../Components/Common/VideoTestimonal/VideoTestimonal'

const WhiteLabellingPackages = () => {
    return (
        <div>
            <OurService>
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

export default WhiteLabellingPackages
