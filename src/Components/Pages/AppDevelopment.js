import React from 'react'
import AppDevelopmentApps from '../../Layout/ServicesPageLayout/AppDevelopment/AppDevelopmentApps'
import AppDevelopmentFacebook from '../../Layout/ServicesPageLayout/AppDevelopment/AppDevelopmentFacebook'
import AppDevelopmentIOSApp from '../../Layout/ServicesPageLayout/AppDevelopment/AppDevelopmentIOSApp'
import AppDevelopmentMainBanner from '../../Layout/ServicesPageLayout/AppDevelopment/AppDevelopmentMainBanner'
import AppDevelopmentOtaExclusive from '../../Layout/ServicesPageLayout/AppDevelopment/AppDevelopmentOtaExclusive'
import AppDevelopmentPlansPricing from '../../Layout/ServicesPageLayout/AppDevelopment/AppDevelopmentPlansPricing'
import AppDevelopmentProcess from '../../Layout/ServicesPageLayout/AppDevelopment/AppDevelopmentProcess'
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from '../Common/Testmonials/TestmonialsSlider'
import Consultation from '../../Layout/HomePageLayout/Consultation'
import { testimonialSliderData } from '../../Constants/testimonialSliderData'
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
const AppDevelopment = () => {
    return (
        <div>
            <AppDevelopmentMainBanner />
            <AppDevelopmentApps />
            <AppDevelopmentProcess />
            <AppDevelopmentOtaExclusive />
            <AppDevelopmentIOSApp />
            <AppDevelopmentFacebook />
            <AppDevelopmentPlansPricing />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default AppDevelopment
