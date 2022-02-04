import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce, Zoom, Fade } from 'react-reveal';
import GetStarted from '../../Components/Common/Buttons/GetStarted';
import { BasicSEO, OptimizedSEO1, OptimizedSEO2, OptimizedSEO3, OptimizedSEO4 } from '../../Constants/SEOServices';

const AllAboutSeo = () => {
   return <Container className='searchengineoptimization'>
      <Row>
         <Col lg={4} className="m-auto ">
            <Bounce right cascade>
               <div className="StartUp">
                  <span class="BgText">{"OTA"}</span>
                  <Row className="OurServicesHeading">
                     <Col className="col-1"></Col>
                     <Col className="col-1 m-auto">
                        <i class="fas fa-long-arrow-alt-right text-primary"></i>
                     </Col>
                     <Col className="col-10">
                        <Zoom right cascade>
                           <h4 className='font-weight-bolder'>{"Search Engine Optimization"}</h4>
                        </Zoom>
                     </Col>
                  </Row>
               </div>
            </Bounce>
         </Col>
         <Col lg={7} className="m-auto">
            <Bounce right>
               <h6>
                  <b>{"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."}</b>
               </h6>
            </Bounce>
         </Col>
      </Row>
      <Row className='my-5'>
         <Col lg={5} className="m-auto">
            <Bounce left cascade>
               <img
                  className="w-100"
                  src={BasicSEO.BasicWebsiteImagePath}
                  alt="BasicWebsite.BasicWebsiteImagePath"
               ></img>
            </Bounce>
         </Col>
         <Col lg={7} className="m-auto">
            <Bounce right cascade>
               <div className="StartUp pt-5 mt-5">
                  <span class="BgText">{"Android"}</span>
                  <div className="OurServicesHeadingUl">
                     <ul>
                        <Zoom right cascade>
                           <h1>Keyword Optimization</h1>
                        </Zoom>
                        <Fade>
                           <h6>
                              Keyword research is where it all starts. It draws a roadmap on which keywords you should target for your desired audience.
                           </h6>
                           <Row>
                              {React.Children.toArray(
                                 BasicSEO.list.map((li, id) => {
                                    if (id < 4) {
                                       return (
                                          <Col lg={6}>
                                             <li>
                                                <b>{li}</b>
                                             </li>
                                          </Col>
                                       );
                                    }
                                    return (
                                       <Col lg={6}>
                                          <li>
                                             <b>{li}</b>
                                          </li>
                                       </Col>
                                    );
                                 })
                              )}
                           </Row>
                        </Fade>
                        <Col lg="3">
                           <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                        </Col>
                     </ul>
                  </div>
               </div>
            </Bounce>
         </Col>
      </Row>
      <Row className='my-5'>

         <Col lg={7} className="m-auto">
            <Bounce right cascade>
               <div className="StartUp pt-5 mt-5">
                  <span class="BgText">IOS</span>
                  <div className="OurServicesHeadingUl">
                     <ul>
                        <Zoom right cascade>
                           <h1>On Page Optimization</h1>
                        </Zoom>
                        <Fade>
                           <h6>
                              We write and modify your website's content and a few technical elements to optimize your website for search engines.
                           </h6>
                           <Row>
                              {React.Children.toArray(
                                 OptimizedSEO1.list.map((li, id) => {
                                    if (id < 4) {
                                       return (
                                          <Col lg={6}>
                                             <li>
                                                <b>{li}</b>
                                             </li>
                                          </Col>
                                       );
                                    }
                                    return (
                                       <Col lg={6}>
                                          <li>
                                             <b>{li}</b>
                                          </li>
                                       </Col>
                                    );
                                 })
                              )}
                           </Row>
                        </Fade>
                        <Col lg="3">
                           <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                        </Col>
                     </ul>
                  </div>
               </div>
            </Bounce>
         </Col>
         <Col lg={5} className="m-auto">
            <Bounce left cascade>
               <img
                  className="w-100"
                  src={OptimizedSEO1.OptimizeEcommerceWebsiteImagePath}
                  alt="BasicWebsite.BasicWebsiteImagePath"
               ></img>
            </Bounce>
         </Col>
      </Row>
      <Row className='my-5'>
         <Col lg={5} className="m-auto">
            <Bounce left cascade>
               <img
                  className="w-100"
                  src={OptimizedSEO2.OptimizeEcommerceWebsiteImagePath}
                  alt="BasicWebsite.BasicWebsiteImagePath"
               ></img>
            </Bounce>
         </Col>
         <Col lg={7} className="m-auto">
            <Bounce right cascade>
               <div className="StartUp pt-5 mt-5">
                  <span class="BgText">{OptimizedSEO2.heading}</span>
                  <div className="OurServicesHeadingUl">
                     <ul>
                        <Zoom right cascade>
                           <h1>{OptimizedSEO2.title}</h1>
                        </Zoom>
                        <Fade>
                           <h6>
                              Link building emphasizes increasing the rankings of your website and the actions directed at expanding the number of inbound links.
                           </h6>
                           <Row>
                              {React.Children.toArray(
                                 OptimizedSEO2.list.map((li, id) => {
                                    if (id < 4) {
                                       return (
                                          <Col lg={6}>
                                             <li>
                                                <b>{li}</b>
                                             </li>
                                          </Col>
                                       );
                                    }
                                    return (
                                       <Col lg={6}>
                                          <li>
                                             <b>{li}</b>
                                          </li>
                                       </Col>
                                    );
                                 })
                              )}
                           </Row>
                        </Fade>
                        <Col lg="3">
                           <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                        </Col>
                     </ul>
                  </div>
               </div>
            </Bounce>
         </Col>

      </Row>
      <Row className='my-5'>

         <Col lg={7} className="m-auto">
            <Bounce right cascade>
               <div className="StartUp pt-5 mt-5">
                  <span class="BgText">{OptimizedSEO3.heading}</span>
                  <div className="OurServicesHeadingUl">
                     <ul>
                        <Zoom right cascade>
                           <h1>{OptimizedSEO3.title}</h1>
                        </Zoom>
                        <Fade>
                           <h6>
                              Improve your business standing with <strong>highly responsive web designs</strong> . Whether you want to generate leads, contact prospective clients, or advertise your business, our basic <strong>website development package</strong> is the perfect match, by being:
                           </h6>
                           <Row>
                              {React.Children.toArray(
                                 OptimizedSEO3.list.map((li, id) => {
                                    if (id < 4) {
                                       return (
                                          <Col lg={6}>
                                             <li>
                                                <b>{li}</b>
                                             </li>
                                          </Col>
                                       );
                                    }
                                    return (
                                       <Col lg={6}>
                                          <li>
                                             <b>{li}</b>
                                          </li>
                                       </Col>
                                    );
                                 })
                              )}
                           </Row>
                        </Fade>
                        <Col lg="3">
                           <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                        </Col>
                     </ul>
                  </div>
               </div>
            </Bounce>
         </Col>
         <Col lg={5} className="m-auto">
            <Bounce left cascade>
               <img
                  className="w-100"
                  src={OptimizedSEO3.OptimizeEcommerceWebsiteImagePath}
                  alt="BasicWebsite.BasicWebsiteImagePath"
               ></img>
            </Bounce>
         </Col>

      </Row>
      <Row className='my-5'>
         <Col lg={5} className="m-auto">
            <Bounce left cascade>
               <img
                  className="w-100"
                  src={OptimizedSEO4.OptimizeEcommerceWebsiteImagePath}
                  alt="BasicWebsite.BasicWebsiteImagePath"
               ></img>
            </Bounce>
         </Col>
         <Col lg={7} className="m-auto">
            <Bounce right cascade>
               <div className="StartUp pt-5 mt-5">
                  <span class="BgText">{OptimizedSEO4.heading}</span>
                  <div className="OurServicesHeadingUl">
                     <ul>
                        <Zoom right cascade>
                           <h1>{OptimizedSEO4.title}</h1>
                        </Zoom>
                        <Fade>
                           <h6>
                              Improve your business standing with <strong>highly responsive web designs</strong> . Whether you want to generate leads, contact prospective clients, or advertise your business, our basic <strong>website development package</strong> is the perfect match, by being:
                           </h6>
                           <Row>
                              {React.Children.toArray(
                                 OptimizedSEO4.list.map((li, id) => {
                                    if (id < 4) {
                                       return (
                                          <Col lg={6}>
                                             <li>
                                                <b>{li}</b>
                                             </li>
                                          </Col>
                                       );
                                    }
                                    return (
                                       <Col lg={6}>
                                          <li>
                                             <b>{li}</b>
                                          </li>
                                       </Col>
                                    );
                                 })
                              )}
                           </Row>
                        </Fade>
                        <Col lg="3">
                           <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                        </Col>
                     </ul>
                  </div>
               </div>
            </Bounce>
         </Col>

      </Row>
   </Container>
      ;
};

export default AllAboutSeo;
