import React from 'react'
import BlogMainBanner from '../../Layout/BlogPageLayout/BlogMainBanner'
import BlogPageAIIntelligence from '../../Layout/BlogPageLayout/BlogPageAIIntelligence'
import BlogPageOutsourceImportance from '../../Layout/BlogPageLayout/BlogPageOutsourceImportance'
import BlogPageSlider from '../../Layout/BlogPageLayout/BlogPageSlider'
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from '../Common/Testmonials/TestmonialsSlider'
import Consultation from '../../Layout/HomePageLayout/Consultation'
import WatchVides from '../../Layout/BlogPageLayout/WatchVides'
import '../../Layout/AboutUsPageLayout/AboutPage.css'
import '../../Layout/AboutUsPageLayout/AboutUsMediaQuery.css'
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from '../../Constants/testimonialSliderData'


const Blog = () => {
    return (
        <div>
            <BlogMainBanner />
            <BlogPageSlider />
            <BlogPageAIIntelligence />
            <BlogPageOutsourceImportance />
            <WatchVides />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default Blog
