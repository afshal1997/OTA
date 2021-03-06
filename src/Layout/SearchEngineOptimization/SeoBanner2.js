import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import { Bounce, Fade } from 'react-reveal'
import banner2 from '../../Assets/Services/SEO/banner2.png'
const SeoBanner2 = () => {
   return (
      <>
         <div className="OutsourcingBusiness">
            <Container>
               <Row>
                  <Col lg={6}>
                     <Bounce right cascade>
                        <div className="Business">
                           <svg width="100%">
                              <defs>
                                 <linearGradient id="gradient" y1="0" y2="1">
                                    <stop stopColor="#054084" offset="0" />
                                    <stop stopColor="#054084" offset="1" />
                                 </linearGradient>
                              </defs>
                              <g>
                                 <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Creative</text>
                              </g>
                           </svg>
                           <h2>Lead Generation</h2>
                        </div>
                     </Bounce>
                  </Col>
                  <Col lg={6} className="m-auto text-white">
                     <Bounce left cascade>
                        <div className="Business">
                           <h5><i>Your App-Our Tabs</i></h5>
                           <h6>
                              <b>
                                 Lorem ipsum may be used as a placeholder before the final copy is available.<strong>Creating a brand identity</strong> is crucial to how and what we communicate with clients, engaging them and converting them into buyers and admirers.
                              </b>
                           </h6>
                        </div>
                     </Bounce>
                  </Col>
               </Row>

               <Row className="mt-5 pt-2">
                  <Col lg={4} className="m-auto text-white">
                     <div className="RocketUlOne">
                        <Fade left>
                           <ul>
                              <li>
                                 Key Word Optimization
                              </li>
                              <li>
                                 On Page Optimization
                              </li>
                              <li>
                                 Content Writing
                              </li>
                           </ul>
                        </Fade>
                     </div>
                  </Col>
                  <Col lg={3} className="m-auto">
                     <Bounce bottom>
                        <img className="w-100" src={banner2} alt="banner2 lead generation"></img>
                     </Bounce>
                  </Col>
                  <Col lg={4} className="m-auto text-white">
                     <div className="RocketUlTwo">
                        <Fade right>
                           <ul>
                              <li>
                                 Link Building
                              </li>
                              <li>
                                 Local Optimization
                              </li>
                              <li>
                                 Video Optimization
                              </li>
                           </ul>
                        </Fade>
                     </div>
                  </Col>
               </Row>

            </Container>
         </div>
      </>
   )

};

export default SeoBanner2;
