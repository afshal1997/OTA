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
    Paragraph4:
        "I was struggling to get a website done for my business <b>“Millenial Business Services”</b> and then I came across <b>“Outsource to Asia”</b> on Instagram. After contacting them and discussing what I needed, they quickly provided a mock up for my site that literally needed little revision. They worked fast to get it completed, and their rates were very affordable for the quality of work they provided. The customer service experience was exceptional, and they never said no to any request which is amazing! They get the job done no matter how small, large, or challenging. I will always recommend their services to others.",
    Client4: "Maylela Moran",
    ClientDesignation4: " Founder of Millenial Business Services ",

}

export default function Home() {
    return (
        <div>
            <HomePageMainBnanner />
            <HomePageBannerTwo />
            <MainSliderConatiner />
            <HomePageBannerThree />
            <HomePageBannerFour />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testmonialsSliderData} />
            <Consultation />
        </div>
    )
}