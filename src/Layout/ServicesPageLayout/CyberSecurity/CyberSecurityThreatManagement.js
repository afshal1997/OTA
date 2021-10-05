import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { ThreatManagementService } from '../../../Constants/CyberSecurityServicesDiscription'

const CyberSecurityThreatManagement = () => {
    return (
        <div className="mt-5 pt-5">
            <Container>
                <Row>
                    <Col lg={7} className="m-auto">
                        <Bounce right cascade>
                            <div className="StartUp pt-5 mt-5">
                                <span class="BgText">{ThreatManagementService.heading}</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <Zoom right cascade>
                                            <h1>{ThreatManagementService.title}</h1>
                                        </Zoom>
                                        <Fade>
                                            <p>
                                                <b>
                                                    {ThreatManagementService.description1}
                                                </b>
                                            </p>
                                            <p>
                                                <b>
                                                    {ThreatManagementService.description2}
                                                </b>
                                            </p>
                                            <Row>
                                                {ThreatManagementService.list.map((li, id) => {
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
                                            <a href="" class={`${ThreatManagementService.button[1]}`}>{ThreatManagementService.button[0]}</a>
                                        </Col>
                                    </ul>
                                </div>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={5} className="m-auto">
                        <Bounce right cascade>
                            <img className="w-100" src={ThreatManagementService.ThreatManagementServiceImagePath} alt=""></img>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CyberSecurityThreatManagement
