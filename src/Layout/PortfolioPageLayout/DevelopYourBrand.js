import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Akaria from '../../Assets/Portfolio/WebDevelopment/Akaria.jpg'
import './PortfolioPageLayout.css'

const DevelopYourBrand = () => {
    return (
        <div className="DevelopYourBrand">
            <Container>
                <div className="portfolioTabs">
                    <Tabs>
                        <TabList>
                            <Tab>WEB DEVELOPMENT</Tab>
                            <Tab>BRANDING & CREATIVE</Tab>
                            <Tab>MOBILE APPS</Tab>
                            <Tab>SOCIAL MEDIA</Tab>
                            <Tab>VIDEO DEVELOPMENT</Tab>
                        </TabList>
                        <TabPanel>
                            <Row>
                                <Col lg={4}>
                                    <div className="portfolioTabsCards">
                                        <img className="w-100" src={Akaria} alt=""></img>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="portfolioTabsCards">
                                        <img className="w-100" src={Akaria} alt=""></img>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="portfolioTabsCards">
                                        <img className="w-100" src={Akaria} alt=""></img>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <div className="portfolioTabsCards">
                                        <img className="w-100" src={Akaria} alt=""></img>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="portfolioTabsCards">
                                        <img className="w-100" src={Akaria} alt=""></img>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="portfolioTabsCards">
                                        <img className="w-100" src={Akaria} alt=""></img>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <div className="portfolioTabsCards">
                                        <img className="w-100" src={Akaria} alt=""></img>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="portfolioTabsCards">
                                        <img className="w-100" src={Akaria} alt=""></img>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="portfolioTabsCards">
                                        <img className="w-100" src={Akaria} alt=""></img>
                                    </div>
                                </Col>
                            </Row>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </Container>
        </div>
    )
}

export default DevelopYourBrand
