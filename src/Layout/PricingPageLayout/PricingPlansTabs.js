import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import CreativeDesigningImg01 from '../../Assets/Services/CreativeDesign/CreativeDesigningImg01.png'
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
                                <h1>Our Pricing</h1>
                                <h5 id="tst-id">Most Affordable</h5>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        <Bounce left cascade>
                            <div className="Business">
                                <h5><i><b>Introducing Outsource to asia new pricing packages.</b></i></h5>
                                <h6>
                                    <b>
                                        We are driven by our passion for our work and by our inquisitiveness to explore the use of tools and techniques that work best in the digital world. Many companies may be initially inexpensive, but they are not affordable throughout the course of your project! When you add up all of the features and services we provide, you get a bargain that none of our rivals can match.
                                    </b>
                                </h6>
                            </div>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="p-0">
                <Row>
                    <Col lg={9} className="me-0 m-auto">
                        <VerticalTabs />
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default PricingPlansTabs
