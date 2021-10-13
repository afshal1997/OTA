import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import './TabsStyle.css'
import PricingCardImg01 from '../../../Assets/Pricing/PricingCardImg01.png'
import PricingCardImg02 from '../../../Assets/Pricing/PricingCardImg02.png'
import PricingCardImg03 from '../../../Assets/Pricing/PricingCardImg03.png'

const VerticalTabs = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>
                        <p>Branding & Design</p>
                    </Tab>
                    <Tab>
                        <p>Web Development</p>
                    </Tab>
                    <Tab>
                        <p>App Development</p>
                    </Tab>
                    <Tab>
                        <p>Content Writing</p>
                    </Tab>
                    <Tab>
                        <p>Social Media Marketing</p>
                    </Tab>
                    <Tab>
                        <p>Video Animation</p>
                    </Tab>
                    <Tab>
                        <p>Lead Generation</p>
                    </Tab>
                    <Tab>
                        <p>Search Engine Optimization</p>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div>
                        <h2>Any content 1</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h2>Any content 2</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="pt-5 pb-5">
                        <Row>
                            <Col lg={4}>
                                <Card className="TabsCard text-center">
                                    <Card.Body className="p-0">
                                        <div className="PricingCardImg">
                                            <Col lg={10} className="m-auto p-3">
                                                <Card.Title>
                                                    <img className="w-100" src={PricingCardImg01}></img>
                                                </Card.Title>
                                            </Col>
                                        </div>
                                        <div className="cardText pt-5 pb-5">
                                            <h4>USD $8-12<span>/hour</span></h4>
                                            <h5>Android Development</h5>
                                            <a class="PricingApplyNowBtn w-100 p-2" href="abc">Outsource Now</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="TabsCard TabsCardCenter text-center">
                                    <Card.Body className="p-0">
                                        <div className="PricingCardImg">
                                            <Col lg={10} className="m-auto p-3">
                                                <Card.Title>
                                                    <img className="w-100" src={PricingCardImg02}></img>
                                                </Card.Title>
                                            </Col>
                                        </div>
                                        <div className="cardText pt-5 pb-5">
                                            <h4>USD $8-12<span>/hour</span></h4>
                                            <h5>Android Development</h5>
                                            <a class="PricingApplyNowBtn w-100 p-2" href="abc">Outsource Now</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="TabsCard text-center">
                                    <Card.Body className="p-0">
                                        <div className="PricingCardImg">
                                            <Col lg={10} className="m-auto p-3">
                                                <Card.Title>
                                                    <img className="w-100" src={PricingCardImg03}></img>
                                                </Card.Title>
                                            </Col>
                                        </div>
                                        <div className="cardText pt-5 pb-5">
                                            <h4>USD $8-12<span>/hour</span></h4>
                                            <h5>Android Development</h5>
                                            <a class="PricingApplyNowBtn w-100 p-2" href="abc">Outsource Now</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h2>Any content 4</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h2>Any content 5</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h2>Any content 6</h2>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div>
                        <h2>Any content 7</h2>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div>
                        <h2>Any content 8</h2>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default VerticalTabs
