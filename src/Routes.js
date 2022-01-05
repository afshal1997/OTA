import { lazy } from "react";
import { Redirect } from "react-router-dom";
import AboutUS from "./Components/Pages/AboutUS";
import CallCenter from "./Components/Pages/CallCenter";
import ResourcesOutsourcing from "./Components/Pages/ResourceOutsourcing";
import DigitalStartup from "./Components/Pages/DigitalStartup";
import WhiteLabelling from "./Components/Pages/WhiteLabelling";
import CreativeDesign from "./Components/Pages/CreativeDesign";
import CyberSecurity from "./Components/Pages/CyberSecurity";
import ContentWritting from "./Components/Pages/ContentWritting";
import WebDevelopment from "./Components/Pages/WebDevelopment";
import DigitalMarketing from "./Components/Pages/DigitalMarketing";
import AppDevelopment from "./Components/Pages/AppDevelopment";
import VideoDevelopment from "./Components/Pages/VideoDevelopment";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import RefundPolicy from "./Components/Pages/RefundPolicy";
import TermAndConditions from "./Components/Pages/TermAndConditions";
import Pricing from "./Components/Pages/Pricing";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import Portfolio from "./Components/Pages/Portfolio"
import CaseStudy from "./Components/Pages/CaseStudy"
import Home from "./Components/Pages/Home"
import ThankYou from "./Layout/ThankYou/ThankYou";
const routes = [
  {
    path: "/",
    exact: true,
    component: () => {
      return <Redirect to="/home" />;
    },
  },

  {
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    path: "/about-us",
    exact: true,
    component: AboutUS,
  },
  {
    path: "/contact-us",
    exact: true,
    component: Contact,
  },
  {
    path: "/call-center",
    exact: true,
    component: CallCenter,
  },
  {
    path: "/resource-outsourcing",
    exact: true,
    component: ResourcesOutsourcing,
  },
  {
    path: "/digital-startup",
    exact: true,
    component: DigitalStartup,
  },
  {
    path: "/white-labelling",
    exact: true,
    component: WhiteLabelling,
  },
  {
    path: "/creative-design",
    exact: true,
    component: CreativeDesign,
  },
  {
    path: "/cyber-security",
    exact: true,
    component: CyberSecurity,
  },
  {
    path: "/content-writing",
    exact: true,
    component: ContentWritting,
  },
  {
    path: "/web-development",
    exact: true,
    component: WebDevelopment,
  },
  {
    path: "/digital-marketing",
    exact: true,
    component: DigitalMarketing,
  },
  {
    path: "/app-development",
    exact: true,
    component: AppDevelopment,
  },
  {
    path: "/video-development",
    exact: true,
    component: VideoDevelopment,
  },
  {
    path: "/pricing",
    exact: true,
    component: Pricing,
  },
  {
    path: "/blog",
    exact: true,
    component: Blog,
  },
  {
    path: "/portfolio",
    exact: true,
    component: Portfolio,
  },
  {
    path: "/case-studies",
    exact: true,
    component: CaseStudy,
  },
  {
    path: "/privacy-policy",
    exact: true,
    component: PrivacyPolicy,
  },
  {
    path: "/refund-policy",
    exact: true,
    component: RefundPolicy,
  },
  {
    path: "/terms-and-conditions",
    exact: true,
    component: TermAndConditions,
  },
  {
    path: "/thank-you",
    exact: true,
    component: ThankYou,
  },
];
export default routes;
