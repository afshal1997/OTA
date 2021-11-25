import React from 'react'
import Consultation from '../../Layout/HomePageLayout/Consultation'
import HomePageBannerThree from '../../Layout/HomePageLayout/HomePageBannerThree'
import CyberSecurityAcknowledgements from '../../Layout/ServicesPageLayout/CyberSecurity/CyberSecurityAcknowledgements'
import CyberSecurityMainBanner from '../../Layout/ServicesPageLayout/CyberSecurity/CyberSecurityMainBanner'
import CyberSecurityMalwareAnalysis from '../../Layout/ServicesPageLayout/CyberSecurity/CyberSecurityMalwareAnalysis'
import CyberSecurityPenetrationTesting from '../../Layout/ServicesPageLayout/CyberSecurity/CyberSecurityPenetrationTesting'
import CyberSecurityStrategyAndRiskManagement from '../../Layout/ServicesPageLayout/CyberSecurity/CyberSecurityStrategyAndRiskManagement'
import CyberSecurityThreatManagement from '../../Layout/ServicesPageLayout/CyberSecurity/CyberSecurityThreatManagement'
import SafeCyberSecurity from '../../Layout/ServicesPageLayout/CyberSecurity/SafeCyberSecurity'
import ClientSlider from '../Common/ClientSlider/ClientSlider'
import TestmonialsSlider from '../Common/Testmonials/TestmonialsSlider'



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

}


const CyberSecurity = () => {
    return (
        <div>
            <CyberSecurityMainBanner />
            <SafeCyberSecurity />
            <HomePageBannerThree />
            <CyberSecurityPenetrationTesting />
            <CyberSecurityThreatManagement />
            <CyberSecurityMalwareAnalysis />
            <CyberSecurityStrategyAndRiskManagement />
            <CyberSecurityAcknowledgements />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testmonialsSliderData} />
            <Consultation />
        </div>
    )
}

export default CyberSecurity
