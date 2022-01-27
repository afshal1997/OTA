import Icon1 from "../Assets/HomeAssets/icon.png";
import Icon2 from "../Assets/HomeAssets/icon2.png";
import Icon3 from "../Assets/HomeAssets/icon3.png";
import Icon4 from "../Assets/HomeAssets/icon4.png";
import Icon5 from "../Assets/HomeAssets/icon5.png";
import Icon6 from "../Assets/HomeAssets/icon6.png";
import Icon7 from "../Assets/HomeAssets/icon7.png";
import Icon8 from "../Assets/HomeAssets/icon8.png";
import ServiceTest from "../Components/Common/ServiceTest";
import { CyberSecurityServiceLink } from "../Components/Common/ServiceTest/CyberSecurityServiceLink";
import AppDevelopmentServiceLink from "../Components/Common/ServiceTest/AppDevelopmentServiceLink";
export const servicesCards = [
   {
      icon: Icon1,
      title: "Creative & Design",
      details:
         "Make a statement in the market with the aid of innovative and high-quality, immersive, and mesmerizing designs.",
      href: "/creative-design-packages",
   },
   {
      icon: Icon2,
      title: "Web Development",
      details:
         "Building websites that provide a digital pathway to clients- driving traffic and sales alike, getting you the results you are after.",
      href: "/web-development-services",
   },
   {
      icon: Icon3,
      title: "Digital Marketing",
      details:
         "Elevate your brand through innovative marketing solutions, custom strategies, market insights, and immaculate execution.",
      href: "/seo-digital-marketing",
   },
   {
      icon: Icon4,
      title: "Content Writing",
      details: <ServiceTest />,
      href: "/content-writing-services",
   },
   {
      icon: Icon5,
      title: "App Development",
      details: <AppDevelopmentServiceLink />,
      href: "/ios-android-app-development",
   },
   {
      icon: Icon6,
      title: "Video Animation",
      details:
         "Dive right into the sea of imagination, creativity, innovation, and brilliance with both 2D & 3D animation involving explainer videos, product demos, and character designs.",
      href: "/corporate-video-production",
   },
   {
      icon: Icon7,
      title: "Cyber Security",
      details: <CyberSecurityServiceLink />,
      href: '/cyber-security-services'
   },
   {
      icon: Icon8,
      title: "Ecommerce",
      details:
         "An appealing E-Commerce web development is the essence of your business. An exceptional website is more than just a beautiful store. It takes the data and delivers you the information, provides user comfort and builds your brand stronger than ever.",
      href: "/web-development-services"
   },
];