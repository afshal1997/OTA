import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ServicesCards from './ServicesCards'
import Icon1 from '../../Assets/HomeAssets/icon.png'
import Icon2 from '../../Assets/HomeAssets/icon2.png'
import Icon3 from '../../Assets/HomeAssets/icon3.png'
import Icon4 from '../../Assets/HomeAssets/icon4.png'
import Icon5 from '../../Assets/HomeAssets/icon5.png'
import Icon6 from '../../Assets/HomeAssets/icon6.png'
import Icon7 from '../../Assets/HomeAssets/icon7.png'
import Icon8 from '../../Assets/HomeAssets/icon8.png'
import { Link } from 'react-router-dom'
import Video from '../../Components/Common/Videos/Video'


const HomePageBannerFour = () => {
    const servicesCards = [
        { icon: Icon1, title: 'Creative & Design', details: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
        { icon: Icon2, title: 'Web Development', details: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
        { icon: Icon3, title: 'Digital Marketing', details: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
        { icon: Icon4, title: 'Content Writing', details: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
        { icon: Icon5, title: 'App Development', details: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
        { icon: Icon6, title: 'Video Animation', details: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
        { icon: Icon7, title: 'Business Solutions', details: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
        { icon: Icon8, title: 'Ecommerce', details: "Lorem Ipsum is simply dummy text of the printing and typesetting" },

    ]
    const [image, setImage] = useState(0)
    return (
        <div>
            <div className="HomePageBannerFour">
                <Container>
                    <Col lg={4} className="text-center m-auto">
                        <div className="HomePageBannerFourHeading">
                            <svg width="100%">
                                <defs>
                                    <linearGradient id="gradient" y1="0" y2="1">
                                        <stop stopColor="#696368" offset="0" />
                                        <stop stopColor="#76485f" offset="1" />
                                    </linearGradient>
                                </defs>
                                <g>
                                    <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Expertise</text>
                                </g>
                            </svg>
                            <h1>Our Services</h1>
                            <p>
                                Outsource Any Of Your Project To Us. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                            </p>
                        </div>
                    </Col>
                    <Row className="mt-5">
                        {React.Children.toArray(
                            servicesCards.map(({ icon, title, details }) => (
                                <Col lg={3}>
                                    <ServicesCards image={icon} title={title} details={details} />
                                </Col>
                            ))
                        )}
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col lg={2}>
                            <Link href="/" className="readToLearn">Read to Learn</Link>
                        </Col>
                        <Col lg={2}>
                            <Link href="/" className="getStarted">Get Started</Link>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col lg={4}></Col>
                        <Col lg={6} className="m-auto">
                            <div className="watch">
                                <svg width="100%">
                                    <defs>
                                        <linearGradient id="gradient" y1="0" y2="1">
                                            <stop stopColor="#054084" offset="0" />
                                            <stop stopColor="#054084" offset="1" />
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Watch</text>
                                    </g>
                                </svg>
                            </div>
                        </Col>
                    </Row>
                    <Row className="videoSection">  
                        <Col lg={6} className="p-0 position-relative">
                            <div className="laptop-wrapper">
                                <Video />
                            </div>
                        </Col>
                        <Col lg={5} className="p-0">
                            <div className="watchContent position-relative mt-4">
                                <h4>
                                    What Our
                                </h4>
                                <h2>
                                    Clients Say
                                </h2>
                                <span>Happy clients generate healthy business</span>
                                <p>Watch how we help our clients walk through the world wide web directly from their perspective.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default HomePageBannerFour
