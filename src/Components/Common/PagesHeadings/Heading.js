import React from 'react'
import { Col } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import SectionMainHeadings from '../SectionMainHeadings/SectionMainHeadings';

const Heading = ({ Heading, tagline, MainHeading }) => {
    return (
        <Col lg={5} className="text-center m-auto">
            <div className="HomePageBannerFourHeading">
                <Zoom right>
                    <SectionMainHeadings text={MainHeading} />
                    <h2 className='text-light font-size-36'>{Heading}</h2>
                </Zoom>
                <Bounce left>
                    <p>{tagline}</p>
                </Bounce>
            </div>
        </Col>
    )
}

export default Heading
