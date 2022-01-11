import React from 'react'
import '../../Layout/AboutUsPageLayout/AboutPage.css'
import AboutUsMainBanner from '../../Layout/AboutUsPageLayout/AboutUsMainBanner'
import HomePageBannerFour from "../../Layout/HomePageLayout/HomePageBannerFour";
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from '../Common/Testmonials/TestmonialsSlider'
import Consultation from "../../Layout/HomePageLayout/Consultation";
import '../../Layout/AboutUsPageLayout/AboutUsMediaQuery.css'
import { testimonialSliderData } from '../../Constants/testimonialSliderData'
const AboutUS = () => {

    return (
        <div>
            <AboutUsMainBanner />
            <HomePageBannerFour />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default AboutUS
