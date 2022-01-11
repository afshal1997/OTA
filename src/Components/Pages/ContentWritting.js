import React from 'react'
import Consultation from '../../Layout/HomePageLayout/Consultation'
import ContentWrittingArticleWriting from '../../Layout/ServicesPageLayout/ContentWritting/ContentWrittingArticleWriting'
import ContentWrittingBetterBusiness from '../../Layout/ServicesPageLayout/ContentWritting/ContentWrittingBetterBusiness'
import ContentWrittingMainBanner from '../../Layout/ServicesPageLayout/ContentWritting/ContentWrittingMainBanner'
import ContentWrittingOTAWriting from '../../Layout/ServicesPageLayout/ContentWritting/ContentWrittingOTAWriting'
import ContentWrittingPlans from '../../Layout/ServicesPageLayout/ContentWritting/ContentWrittingPlans'
import ContentWrittingProcess from '../../Layout/ServicesPageLayout/ContentWritting/ContentWrittingProcess'
import ContentWrittingWebPageCopy from '../../Layout/ServicesPageLayout/ContentWritting/ContentWrittingWebPageCopy'
import ClientSlider from '../Common/ClientSlider/ClientSlider'
import TestmonialsSlider from '../Common/Testmonials/TestmonialsSlider'
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from '../../Constants/testimonialSliderData'
const ContentWritting = () => {
    return (
        <div>
            <ContentWrittingMainBanner />
            <ContentWrittingBetterBusiness />
            <ContentWrittingProcess />
            <ContentWrittingOTAWriting />
            <ContentWrittingArticleWriting />
            <ContentWrittingWebPageCopy />
            <ContentWrittingPlans />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default ContentWritting
