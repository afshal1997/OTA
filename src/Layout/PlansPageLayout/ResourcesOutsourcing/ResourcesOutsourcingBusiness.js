import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
import ResourcesOutsourcingBusinessImg01 from '../../../Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessImg01.png'
import ResourcesOutsourcingBusinessIcon01 from '../../../Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessIcon01.png'
import ResourcesOutsourcingBusinessIcon02 from '../../../Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessIcon02.png'


const ResourcesOutsourcingBusiness = () => {
    return (
        <div className="OutsourcingBusiness pt-5 pb-5">
            <Container>
                <Row>
                    <Col lg={6} className="m-auto">
                        <Bounce right cascade>
                            <img className="w-100" src={ResourcesOutsourcingBusinessImg01} alt="ResourcesOutsourcing"></img>
                        </Bounce>
                    </Col>
                    <Col lg={6} className="m-auto">
                        <Bounce left cascade>
                            <div className="Business">
                                <svg width="100%">
                                    <defs>
                                        <linearGradient id="gradient" y1="0" y2="1">
                                            <stop stopColor="#054084" offset="0" />
                                            <stop stopColor="#054084" offset="1" />
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Business</text>
                                    </g>
                                </svg>
                                <h2>Resource Outsourcing</h2>
                                <p>
                                    Every organization, whether small or large, strives to get the most out of the least amount of resources, which includes cost-cutting, strong infrastructure, and a regulated environment. We understand how difficult it is to manage the infrastructure while keeping departments in check. So we provide companies with an incredible opportunity to <strong>outsource human resources</strong>, by choosing the resources you want us to provide and manage. <strong>Grow your business</strong> effortlessly by availing our <strong>Resource Outsourcing services</strong>.
                                </p>
                                <p>
                                    <b><i>
                                        With our vast portfolio of high-end clients, we ensure that our resources fit your guidelines, whether you're a startup with minimal resources or an organization with extensive budgets to dispense.
                                    </i></b>
                                </p>
                                <Row>
                                    <Col lg={6}>
                                        <Row>
                                            <Col className="col-3 mb-3">
                                                <img className="w-100" src={ResourcesOutsourcingBusinessIcon01} alt="ResourcesOutsourcing"></img>
                                            </Col>
                                            <Col className="col-9 m-auto">
                                                <h5><b>Light on Pocket</b></h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={6}>
                                        <Row>
                                            <Col className="col-3 mb-3">
                                                <img className="w-100" src={ResourcesOutsourcingBusinessIcon02} alt="ResourcesOutsourcing"></img>
                                            </Col>
                                            <Col lg={9} className="col-9 m-auto">
                                                <h5><b>Heavy in Performance</b></h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResourcesOutsourcingBusiness
