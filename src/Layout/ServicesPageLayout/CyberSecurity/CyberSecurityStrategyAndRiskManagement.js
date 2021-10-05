import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { StrategyAndRiskManagement } from '../../../Constants/CyberSecurityServicesDiscription';


const CyberSecurityStrategyAndRiskManagement = () => {
    return (
        <div className="mt-5 pt-5">
            <Container>
                <Row>
                    <Col lg={7} className="m-auto">
                        <Bounce right cascade>
                            <div className="StartUp pt-5 mt-5">
                                <span class="BgText">{StrategyAndRiskManagement.heading}</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <Zoom right cascade>
                                            <h1>{StrategyAndRiskManagement.title}</h1>
                                        </Zoom>
                                        <Fade>
                                            <p>
                                                <b>
                                                    {StrategyAndRiskManagement.description}
                                                </b>
                                            </p>
                                            <Row>
                                                {StrategyAndRiskManagement.list.map((li, id) => {
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
                                            <a href="" class={`${StrategyAndRiskManagement.button[1]}`}>{StrategyAndRiskManagement.button[0]}</a>
                                        </Col>
                                    </ul>
                                </div>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={5} className="m-auto">
                        <Bounce right cascade>
                            <img className="w-100" src={StrategyAndRiskManagement.StrategyAndRiskManagementImagePath} alt=""></img>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CyberSecurityStrategyAndRiskManagement
