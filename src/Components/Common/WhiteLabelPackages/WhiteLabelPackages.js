import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Slider from 'react-slick'
import { CHANGE_MODAL } from '../../../Store/Action'
import OurService from '../OurService/OurService'
import Heading from '../PagesHeadings/Heading'

const WhiteLabelPackages = () => {
    const dispatch = useDispatch()
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        centerPadding: '0px',
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        appendDots: (dots) => (
            <div className="bg-primary">
                <ul> {dots} </ul>
            </div>
        ),
        customPaging: (i) => <div className="video-pagination-dots">{""}</div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                    centerPadding: '0px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    centerPadding: '0px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px'
                }
            }
        ]
    };
    return (
        <div>
            <div className="DigitalStartupPricing">
                <OurService>
                    <Container>
                        <Row>
                            <Col lg={12} className="m-auto text-center">
                                <Heading
                                    Heading="Starting Prices"
                                    tagline="With us you will get multiple benefits such as :"
                                    MainHeading="Pricing"
                                />


                            </Col>
                        </Row>
                        <div className="whitelabeling-price-category">
                            <Slider {...settings}>
                                <div>plan 1 </div>
                                <div>plan 2 </div>
                                <div>plan 3 </div>
                                <div>plan 4</div>
                                <div>plan 5</div>
                            </Slider>
                        </div>
                        <Col className="m-auto my-5" lg={2}>
                            <Button className="getStarted" onClick={() => dispatch(CHANGE_MODAL(true))}>
                                Get Started
                            </Button>
                        </Col>
                    </Container>
                </OurService>
            </div>
        </div>
    )
}

export default WhiteLabelPackages
