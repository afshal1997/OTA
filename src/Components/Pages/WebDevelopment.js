import React from 'react'
import WebDevelopmentMainBanner from '../../Layout/ServicesPageLayout/WebDevelopment/WebDevelopmentMainBanner'
import WebDevelopmentBranding from '../../Layout/ServicesPageLayout/WebDevelopment/WebDevelopmentBranding'
import WebDevelopmentProcess from '../../Layout/ServicesPageLayout/WebDevelopment/WebDevelopmentProcess'
import WebDevelopmentRenownedOutsourceWeb from '../../Layout/ServicesPageLayout/WebDevelopment/WebDevelopmentRenownedOutsourceWeb'
import WebDevelopmentDesignCustomWebsite from '../../Layout/ServicesPageLayout/WebDevelopment/WebDevelopmentDesignCustomWebsite'
import WebDevelopmentOptimizeEcommerceWebsite from '../../Layout/ServicesPageLayout/WebDevelopment/WebDevelopmentOptimizeEcommerceWebsite'
import WebDevelopmentPlans from '../../Layout/ServicesPageLayout/WebDevelopment/WebDevelopmentPlans'
import ClientSlider from '../Common/ClientSlider/ClientSlider'
import TestmonialsSlider from '../Common/Testmonials/TestmonialsSlider'
import Consultation from '../../Layout/HomePageLayout/Consultation'


const testmonialsSliderData = {
    Paragraph1:
        "Beyondant has been pleased to have entered into a joint venture with Outsource To Asia. The JV provides offshore resources as an augmentation to our U.S back office departments.",
    Client1: "Marc Rubin",
    ClientDesignation1: "CEO of Beyondant",
    Paragraph2:
        "My digital marketing business as grown faster than expected causing me troubles finding quality employees supporting our growth. When I found out about OTA I had to give them a shot in supporting my team. They have met every expectation and been there every step of the way. Quality work and Quality service 24/7!",
    Client2: "William Harris",
    ClientDesignation2: "Founder of The Hustle Marketing And Design",
    Paragraph3:
        "Our Journey started with small projects and after seeing their skills and dedication, I felt I can  do more work with them. They have a great team and provide amazing work on time. Their Project Managers are always very concerned about delivery and quality of work, and they are easy to reach and communicate with. It feels as though they are sitting next to me. I highly recommend their services to anyone looking to outsource and scale their business. I have also provided a Video Testimony to them.",
    Client3: " Jensen ",
    ClientDesignation3: " Founder of Adzum, LLC. ",
    Paragraph4:
        "I was struggling to get a website done for my business “Millenial Business Services” and then I came across “Outsource to Asia” on Instagram. After contacting them and discussing what I needed, they quickly provided a mock up for my site that literally needed little revision. They worked fast to get it completed, and their rates were very affordable for the quality of work they provided. The customer service experience was exceptional, and they never said no to any request which is amazing! They get the job done no matter how small, large, or challenging. I will always recommend their services to others.",
    Client4: "Maylela Moran",
    ClientDesignation4: " Founder of Millenial Business Services ",
    Paragraph5:
        " “I searched for more than just help with my website and scaling my business.I searched for and found a partner in growth and success.After interviewing other candidates it became obvious that Outsource To Asia was the perfect fit.” They are a one stop solution for multiple dimensions of online success.",
    Client5: "Rick Lamanna",
    ClientDesignation5: " Founder of Proform 360 ",
    Paragraph6:
        " They did a great job with my logo. They are creative and hard working. Would definitely recommend.",
    Client6: "Stanley Julien",
    ClientDesignation6: " Founder of Fitness Core Shop ",

}


const WebDevelopment = () => {
    return (
        <div>
            <WebDevelopmentMainBanner />
            <WebDevelopmentBranding />
            <WebDevelopmentProcess />
            <WebDevelopmentRenownedOutsourceWeb />
            <WebDevelopmentDesignCustomWebsite />
            <WebDevelopmentOptimizeEcommerceWebsite />
            <WebDevelopmentPlans />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testmonialsSliderData} />
            <Consultation />
        </div>
    )
}

export default WebDevelopment
