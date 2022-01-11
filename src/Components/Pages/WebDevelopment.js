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
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from '../../Constants/testimonialSliderData'

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
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default WebDevelopment
