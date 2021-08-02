import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HomePage.css'
const Consultation = () => {
    return (
        <div>
            <div className="consultation">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="consultationContent">
                                <svg width="100%">
                                    <defs>
                                        <linearGradient id="gradient" y1="0" y2="1">
                                            <stop stopColor="#054084" offset="0" />
                                            <stop stopColor="#054084" offset="1" />
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Consultation</text>
                                    </g>
                                </svg>
                                <h1>Free Consultation</h1>
                                <h5>How We Can Partner</h5>
                                <h6>
                                    Our experts will understand your business requirements and will develop services and pricing strategy for your agency.
                                    Watch how we help our clients walk through the world wide web directly from their perspective.
                                </h6>
                            </div>
                        </Col>
                        <Col lg={4} className="m-auto">
                            <Link href="/" className="getStarted w-75">Schedule a Call</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Consultation
