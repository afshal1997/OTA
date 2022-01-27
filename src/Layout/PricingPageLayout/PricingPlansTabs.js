import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Bounce from 'react-reveal/Bounce';
import VerticalTabs from '../../Components/Common/Tabs/VerticalTabs';

const PricingPlansTabs = () => {
    return (
        <div className="OutsourcingBusiness pb-0">
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Plans</text>
                                    </g>
                                </svg>
                                <h2>Our Pricing</h2>
                                <h5 id="tst-id">Most Affordable</h5>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5>
                                    <strong>
                                        Affordable Outsourcing Packages To Get You Started
                                    </strong>
                                </h5>
                                <h6>
                                    <b>
                                        Driven by our enthusiasm for our work and our inquisitiveness to explore the use of tools and techniques that work best in the digital world, we shape ideas into results. Many companies may be initially inexpensive, but unlike us, they are not affordable throughout the course of your project! When you add up all of the features and services we provide, you get a bargain that none of our rivals can match.
                                    </b>
                                </h6>
                            </div>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="p-0">
                <Row>
                    <Col lg={12} className="me-0 m-auto">
                        <VerticalTabs />
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default PricingPlansTabs
