import React from "react";
import HomePageBannerTwo from "../../Layout/HomePageLayout/HomePageBannerTwo";
import HomePageMainBnanner from '../../Layout/HomePageLayout/HomePageMainBnanner'
import MainSliderConatiner from "../Common/VerticalSlider";
import solutionSliderimg01 from '../../Assets/HomeAssets/solutionSliderimg01.png'
import solutionSliderbg from '../../Assets/HomeAssets/solution_bg.jpg'
import './home.scss';
import HomePageBannerThree from "../../Layout/HomePageLayout/HomePageBannerThree";
import HomePageBannerFour from "../../Layout/HomePageLayout/HomePageBannerFour";
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from "../Common/Testmonials/TestmonialsSlider";
import Consultation from "../../Layout/HomePageLayout/Consultation";

const testmonialsSliderData = {
    Paragraph1:
        "Beyondant has been pleased to have entered into a joint venture with Outsource To Asia. The JV provides offshore resources as an augmentation to our U.S back office departments....",
    Client1: "Marc Rubin",
    ClientDesignation1: "CEO of Beyondant",
    Paragraph2:
        "My digital marketing business as grown faster than expected causing me troubles finding quality employees supporting our growth. When I found out about OTA Ihad to give them a shot in supporting my team. They have met every.....",
    Client2: "William Harris",
    ClientDesignation2: "Founder of The Hustle",
    Paragraph3:
        "Working with Outsource an Asia have been incredible. They have became strong partners helping me to scale my business. Not only do they provide excellent services, they’re always there to...",
    Client3: "Jules Day",
    ClientDesignation3: "CEO of Marketer Foundation",

}

export default function Home() {
    const data = [{
        id: 0,
        header: 'Looking for a ',
        body: 'better solution',
        colour: solutionSliderimg01,
        img: solutionSliderbg
    }, {
        id: 1,
        header: 'ahmed',
        body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
        colour: solutionSliderimg01,
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc2.jpg'
    }, {
        id: 2,
        header: 'warsi',
        body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
        colour: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc4.jpg',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc3.jpg'
    }, {
        id: 3,
        header: 'Vegan hoodie trust fund',
        body: 'Farm-to-table tousled try-hard, normcore ethical tilde iPhone...',
        colour: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc5.jpg',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc4.jpg'
    }, {
        id: 4,
        header: 'cliche craft beer',
        body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
        colour: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc4.jpg',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc5.jpg'
    }];
    return (
        <div>
            <HomePageMainBnanner />
            <HomePageBannerTwo />
            <MainSliderConatiner />
            <HomePageBannerThree/>
            <HomePageBannerFour />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testmonialsSliderData} />
            <Consultation/>
        </div>
    )
}