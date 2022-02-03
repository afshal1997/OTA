import { Redirect } from "react-router-dom";
import Loadable from 'react-loadable'
import Loader from "./Components/Common/Loader/Loader";
import SearchEngineOptimization from "./Layout/SearchEngineOptimization/SearchEngineOptimization";
const Home = Loadable({
  loader: async () => {
    const fileToLoad = await import(/*webpackChunkName:"Home"*/ "./Components/Pages/Home")
    return fileToLoad
  },
  loading: () => <Loader />,
});
const AboutUS = Loadable({
  loader: () => import(/* webpackChunkName:"About Us"*/ "./Components/Pages/AboutUS"),
  loading: () => <Loader />,
});
const WhiteLabelling = Loadable({
  loader: () => import(/*webpackChunkName:"WhiteLabelling"*/ "./Components/Pages/WhiteLabelling"),
  loading: () => <Loader />,
});
const DigitalStartup = Loadable({
  loader: () => import(/*webpackChunkName:"DigitalStartup"*/ "./Components/Pages/DigitalStartup"),
  loading: () => <Loader />,
});

const ResourcesOutsourcing = Loadable({
  loader: () => import(/*webpackChunkName:"ResourcesOutsourcing"*/ "./Components/Pages/ResourceOutsourcing"),
  loading: () => <Loader />,
});
const CallCenter = Loadable({
  loader: () => import(/*webpackChunkName:"CallCenter"*/ "./Components/Pages/CallCenter"),
  loading: () => <Loader />,
});
const CreativeDesign = Loadable({
  loader: () => import(/*webpackChunkName:"CreativeDesign"*/ "./Components/Pages/CreativeDesign"),
  loading: () => <Loader />,
});
const WebDevelopment = Loadable({
  loader: () => import(/*webpackChunkName:"WebDevelopment"*/ "./Components/Pages/WebDevelopment"),
  loading: () => <Loader />,
});
const DigitalMarketing = Loadable({
  loader: () => import(/*webpackChunkName:"WhiteLabelling"*/ "./Components/Pages/DigitalMarketing"),
  loading: () => <Loader />,
});
const AppDevelopment = Loadable({
  loader: () => import(/*webpackChunkName:"AppDevelopment"*/ "./Components/Pages/AppDevelopment"),
  loading: () => <Loader />,
});
const VideoDevelopment = Loadable({
  loader: () => import(/*webpackChunkName:"VideoDevelopment"*/ "./Components/Pages/VideoDevelopment"),
  loading: () => <Loader />,
});
const ContentWriting = Loadable({
  loader: () => import(/*webpackChunkName:"ContentWriting"*/ "./Components/Pages/ContentWritting"),
  loading: () => <Loader />,
});
const CyberSecurity = Loadable({
  loader: () => import(/*webpackChunkName:"WhiteLabelling"*/ "./Components/Pages/CyberSecurity"),
  loading: () => <Loader />,
});
const CaseStudy = Loadable({
  loader: () => import(/*webpackChunkName:"CyberSecurity"*/ "./Components/Pages/CaseStudy"),
  loading: () => <Loader />,
});
const Pricing = Loadable({
  loader: () => import(/*webpackChunkName:"Pricing"*/ "./Components/Pages/Pricing"),
  loading: () => <Loader />,
});
const Portfolio = Loadable({
  loader: () => import(/*webpackChunkName:"Portfolio"*/ "./Components/Pages/Portfolio"),
  loading: () => <Loader />,
});
const Blog = Loadable({
  loader: () => import(/*webpackChunkName:"Blog"*/ "./Components/Pages/Blog"),
  loading: () => <Loader />,
});
const Contact = Loadable({
  loader: () => import(/*webpackChunkName:"Contact"*/ "./Components/Pages/Contact"),
  loading: () => <Loader />,
});
const PrivacyPolicy = Loadable({
  loader: () => import(/*webpackChunkName:"PrivacyPolicy"*/ "./Components/Pages/PrivacyPolicy"),
  loading: () => <Loader />,
});
const RefundPolicy = Loadable({
  loader: () => import(/*webpackChunkName:"RefundPolicy"*/ "./Components/Pages/RefundPolicy"),
  loading: () => <Loader />,
});
const TermAndConditions = Loadable({
  loader: () => import(/*webpackChunkName:"TermAndConditions"*/ "./Components/Pages/TermAndConditions"),
  loading: () => <Loader />,
});
const ThankYou = Loadable({
  loader: () => import(/*webpackChunkName:"ThankYou"*/ "./Layout/ThankYou/ThankYou"),
  loading: () => <Loader />,
});
const SocialMediaMarketing = Loadable({
  loader: () => import(/*webpackChunkName:"ThankYou"*/ "./Layout/SocialMediaMarketing"),
  loading: () => <Loader />,
});
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
    path: "/call-center-outsourcing",
    exact: true,
    component: CallCenter,
  },
  {
    path: "/outsource-human-resources",
    exact: true,
    component: ResourcesOutsourcing,
  },
  {
    path: "/digital-startup",
    exact: true,
    component: DigitalStartup,
  },
  {
    path: "/white-label-agency",
    exact: true,
    component: WhiteLabelling,
  },
  {
    path: "/creative-design-packages",
    exact: true,
    component: CreativeDesign,
  },
  {
    path: "/cyber-security-services",
    exact: true,
    component: CyberSecurity,
  },
  {
    path: "/content-writing-services",
    exact: true,
    component: ContentWriting,
  },
  {
    path: "/web-development-services",
    exact: true,
    component: WebDevelopment,
  },
  {
    path: "/seo-digital-marketing",
    exact: true,
    component: DigitalMarketing,
  },
  {
    path: "/ios-android-app-development",
    exact: true,
    component: AppDevelopment,
  },
  {
    path: "/corporate-video-production",
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
    path: "/social-media-marketing",
    exact: true,
    component: SocialMediaMarketing,
  },
  {
    path: "/search-engine-optimization",
    exact: true,
    component: SearchEngineOptimization,
  },
  {
    path: "/thank-you",
    exact: true,
    component: ThankYou,
  },
];
export default routes;
