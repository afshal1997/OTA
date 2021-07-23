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
                </div>
            </Card>
        </div>
    )
}

export default ServicesCards
