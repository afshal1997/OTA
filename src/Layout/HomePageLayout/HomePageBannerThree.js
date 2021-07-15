import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import line1 from '../../Assets/HomeAssets/line-1.png'

const HomePageBannerThree = () => {
    return (
        <div>
            <div className="howWeWork">
                <Container fluid>
                    <div className="howWeWorkBanner">
                        <img className="w-100 lines" src={line1}></img>
                        <Row>
                            <Col lg={1}></Col>
                            <Col lg={6}>
                                <div className="process">
                                    <span className="spanProcess">Process</span>
                                    <h1><span><i class="fas fa-long-arrow-alt-right text-primary"></i></span> How We Works<span>?</span></h1>
                                    <h6>Our Process the structure</h6>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default HomePageBannerThree
