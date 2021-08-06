import React from 'react'
import { Card } from 'react-bootstrap'

const ServicesCards = (props) => {
    return (
        <div>
            <Card className="ourServicesCards">
                <div className="iconBg"><img src={props.image} /></div>
                <div className="cardContent">
                    <h6>{props.title}</h6>
                    <p>{props.details}</p>
                    <div class="readMore">
                        <a class="btn">
                            <svg viewBox="0 0 180 60" class="">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                            </svg>
                            <span>Read More</span>
                        </a>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ServicesCards
