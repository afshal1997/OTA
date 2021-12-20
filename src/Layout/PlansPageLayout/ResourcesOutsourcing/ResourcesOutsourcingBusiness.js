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
                                <h1>Resource Outsourcing</h1>
                                <p>
                                    Every company either SME’s or large enterprises focuses on getting the maximum output from a minimum input which involves cost cutting and good infrastructure and a controlled environment. Well, we know how hard it is to manage the infrastructure while keeping the departments in check therefore we offer companies an amazing opportunity to outsource these resources and you choose the resources you want us to do or manage and we take the opportunity to grow your business providing you with clear cut solutions and detailed guidelines.
                                </p>
                                <p>
                                    <b><i>
                                        With our vast portfolio of high end clients, we ensure that our resources fit your guidelines either you're a startup with minimum resources or an organization with extensive budgets
                                    </i></b>
                                </p>
                                <Row>
                                    <Col lg={6}>
                                        <Row>
                                            <Col className="col-3 mb-3">
                                                <img className="w-100" src={ResourcesOutsourcingBusinessIcon01} alt="ResourcesOutsourcing"></img>
                                            </Col>
                                            <Col className="col-9 m-auto">
                                                <h5><b>Low on Budget</b></h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={6}>
                                        <Row>
                                            <Col className="col-3 mb-3">
                                                <img className="w-100" src={ResourcesOutsourcingBusinessIcon02} alt="ResourcesOutsourcing"></img>
                                            </Col>
                                            <Col lg={9} className="col-9 m-auto">
                                                <h5><b>High on Evaluations</b></h5>
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
