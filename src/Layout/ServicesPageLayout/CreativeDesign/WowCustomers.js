import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import { BrandLogoDesign, MakeCustomersGo } from '../../../Constants/CreativeDesignWowCustomers';

const WowCustomers = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={4} className="m-auto">
                        <Bounce right cascade>
                            <div className="StartUp">
                                <span class="BgText">{MakeCustomersGo.heading}</span>
                                <Row className="OurServicesHeading">
                                    <Col className="col-1"></Col>
                                    <Col className="col-1 m-auto">
                                        <i class="fas fa-long-arrow-alt-right text-primary"></i>
                                    </Col>
                                    <Col className="col-10">
                                        <Zoom right cascade>
                                            <h1>{MakeCustomersGo.title}</h1>
                                        </Zoom>
                                    </Col>
                                </Row>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={7} className="m-auto">
                        <Bounce right>
                            <h6>
                                <b>
                                    {MakeCustomersGo.description}
                                </b>
                            </h6>
                        </Bounce>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className="m-auto">
                        <Bounce left cascade>
                            <img className="w-100" src={BrandLogoDesign.DevelopBrandPersonaImagePath} alt=""></img>
                        </Bounce>
                    </Col>
                    <Col lg={7} className="m-auto">
                        <Bounce right cascade>
                            <div className="StartUp pt-5 mt-5">
                                <span class="BgText">{BrandLogoDesign.heading}</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <Zoom right cascade>
                                            <h1>{BrandLogoDesign.title}</h1>
                                        </Zoom>
                                        <Fade>
                                            <h6>
                                                <b>
                                                    {BrandLogoDesign.description}
                                                </b>
                                            </h6>
                                            <Row>
                                                {BrandLogoDesign.list.map((li,id) => {
                                                    if (id < 4) {
                                                        return (
                                                            <Col lg={6}>
                                                                <li>
                                                                    <b>{li}</b>
                                                                </li>
                                                            </Col>

                                                        )
                                                    } return (
                                                        <Col lg={6}>
                                                            <li>
                                                                <b>{li}</b>
                                                            </li>
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        </Fade>
                                        <Col lg="3">
                                            <a href="" class={`${BrandLogoDesign.button[1]}`}>{BrandLogoDesign.button[0]}</a>
                                        </Col>
                                    </ul>
                                </div>

                            </div>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WowCustomers