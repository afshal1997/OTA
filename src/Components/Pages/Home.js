import React from "react";
import HomePageBannerTwo from "../../Layout/HomePageLayout/HomePageBannerTwo";
import HomePageMainBnanner from '../../Layout/HomePageLayout/HomePageMainBnanner'
import MainSliderConatiner from "../Common/VerticalSlider";
import HomePageBannerThree from "../../Layout/HomePageLayout/HomePageBannerThree";
import HomePageBannerFour from "../../Layout/HomePageLayout/HomePageBannerFour";
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from "../Common/Testmonials/TestmonialsSlider";
import Consultation from "../../Layout/HomePageLayout/Consultation";
import './home.scss';
import { testimonialSliderData } from "../../Constants/testimonialSliderData";


export default function Home() {
    return (
        <div>
            <HomePageMainBnanner />
            <HomePageBannerTwo />
            <MainSliderConatiner />
            <HomePageBannerThree />
            <HomePageBannerFour />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}