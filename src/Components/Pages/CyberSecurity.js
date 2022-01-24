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
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from '../../Constants/testimonialSliderData'
import CyberSecurityProcess from '../../Layout/ServicesPageLayout/CyberSecurity/CyberSecurityProcess'
const CyberSecurity = () => {
    return (
        <div>
            <CyberSecurityMainBanner />
            <SafeCyberSecurity />
            <CyberSecurityProcess />
            <CyberSecurityPenetrationTesting />
            <CyberSecurityThreatManagement />
            <CyberSecurityMalwareAnalysis />
            <CyberSecurityStrategyAndRiskManagement />
            <CyberSecurityAcknowledgements />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default CyberSecurity
