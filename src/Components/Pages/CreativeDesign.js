import React from 'react'
import Consultation from '../../Layout/HomePageLayout/Consultation'
import CreativeAndDesign from '../../Layout/ServicesPageLayout/CreativeDesign/CreativeAndDesign'
import CreativeDesigningBanner from '../../Layout/ServicesPageLayout/CreativeDesign/CreativeDesigningBanner'
import CreativeDesigningProcess from '../../Layout/ServicesPageLayout/CreativeDesign/CreativeDesigningProcess'
import CreativeDesignPricingPackages from '../../Layout/ServicesPageLayout/CreativeDesign/CreativeDesignPricingPackages'
import CreativeDesignSocialMedia from '../../Layout/ServicesPageLayout/CreativeDesign/CreativeDesignSocialMedia'
import CreativeDesignUIUX from '../../Layout/ServicesPageLayout/CreativeDesign/CreativeDesignUIUX'
import WowCustomers from '../../Layout/ServicesPageLayout/CreativeDesign/WowCustomers'
import ClientSlider from '../Common/ClientSlider/ClientSlider'
import TestmonialsSlider from '../Common/Testmonials/TestmonialsSlider'
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from '../../Constants/testimonialSliderData'

const CreativeDesign = () => {
    return (
        <div>
            <CreativeAndDesign />
            <CreativeDesigningBanner />
            <CreativeDesigningProcess />
            <WowCustomers />
            <CreativeDesignUIUX />
            <CreativeDesignSocialMedia />
            <CreativeDesignPricingPackages />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default CreativeDesign
