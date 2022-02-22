import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Zoom, Bounce } from 'react-reveal';

const InnerSLide = ({ context1, context2, context3, text, sideImage }) => {
   return (
      <Row>
         <Col lg={6} className="p-0 slideImgBg">
            <Zoom>
               <img className="w-75" src={sideImage} alt="Slide_1"></img>
            </Zoom>
         </Col>
         <Col lg={6} className="m-auto">
            <svg width="100%">
               <defs>
                  <linearGradient id="gradient" y1="0" y2="1">
                     <stop stopColor="#696368" offset="0" />
                     <stop stopColor="#76485f" offset="1" />
                  </linearGradient>
               </defs>
               <g>
                  <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">{context3}</text>
               </g>
            </svg>
            <div className="verticalSettingsContent">
               <Bounce>
                  <h2 className="mb-0">{context1}</h2>
                  <h2><strong>{context2}</strong></h2>
                  <p>
                     {text}
                  </p>
               </Bounce>
            </div>
         </Col>
      </Row>
   );
}
export default InnerSLide