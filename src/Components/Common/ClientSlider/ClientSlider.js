import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LogoSlider from '../LogoSlider'

const ClientSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,

                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div>
            <div className="ClientSlider">
                <Container>
                    <div className="FirmsWe">
                        <Row>
                            <Col lg={3} className="col-4 m-auto">
                                <h4>Firms We</h4>
                                <h1> Served</h1>
                            </Col>
                            <Col lg={8} className="col-8">
                                <LogoSlider settings={settings} className="logoSlider" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default ClientSlider
