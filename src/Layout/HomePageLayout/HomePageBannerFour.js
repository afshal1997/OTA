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
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import OurService from '../../Components/Common/OurService/OurService'
import Heading from '../../Components/Common/PagesHeadings/Heading'
import VideoTestimonal from '../../Components/Common/VideoTestimonal/VideoTestimonal'
const HomePageBannerFour = () => {
    const servicesCards = [
        { icon: Icon1, title: 'Creative & Design', details: "Lorem Ipsum is simply dummy text of the printing and typesetting", href: "/creative-design" },
        { icon: Icon2, title: 'Web Development', details: "Lorem Ipsum is simply dummy text of the printing and typesetting", href: '/web-development' },
        { icon: Icon3, title: 'Digital Marketing', details: "Lorem Ipsum is simply dummy text of the printing and typesetting", href: '/digital-marketing' },
        { icon: Icon4, title: 'Content Writing', details: "Lorem Ipsum is simply dummy text of the printing and typesetting", href: '/content-writting' },
        { icon: Icon5, title: 'App Development', details: "Lorem Ipsum is simply dummy text of the printing and typesetting", href: '/app-development' },
        { icon: Icon6, title: 'Video Animation', details: "Lorem Ipsum is simply dummy text of the printing and typesetting", href: '/video-development' },
        { icon: Icon7, title: 'Business Solutions', details: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
        { icon: Icon8, title: 'Ecommerce', details: "Lorem Ipsum is simply dummy text of the printing and typesetting" },

    ]
    const [image, setImage] = useState(0)
    return (
        <OurService>
            <div>
                <Container>
                    <Heading Heading="Our Services" Tagline="Outsource Any Of Your Project To Us. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry" MainHeading="Expertise" />
                    <Row className="mt-5">
                        {React.Children.toArray(
                            servicesCards.map(({ icon, title, details, href }) => (
                                <Col lg={3}>
                                    <Zoom>
                                        <ServicesCards image={icon} title={title} details={details} href={href} />
                                    </Zoom>
                                </Col>
                            ))
                        )}
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col lg={2}>
                            <Bounce><Link href="/" className="readToLearn">Read to Learn</Link></Bounce>
                        </Col>
                        <Col lg={2}>
                            <Bounce><Link href="/" className="getStarted">Get Started</Link></Bounce>
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
                    <VideoTestimonal />
                </Container>
            </div>
        </OurService>
    )
}

export default HomePageBannerFour
