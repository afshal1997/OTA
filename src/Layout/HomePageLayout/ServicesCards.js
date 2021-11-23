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
                    <div className="readMore">
                        <a className="btn" href={props.href}>
                            <svg viewBox="0 0 180 60" className="">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
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
