import { Redirect } from "react-router-dom";
import Loadable from 'react-loadable'
const Home = Loadable({
  loader: () => import(/*webpackChunkName:"Home"*/ "./Components/Pages/Home"),
  loading: () => <div>loading ............</div>,
});
const AboutUS = Loadable({
  loader: () => import(/*webpackChunkName:"About Us"*/ "./Components/Pages/AboutUS"),
  loading: () => <div>loading ............</div>,
});
const WhiteLabelling = Loadable({
  loader: () => import(/*webpackChunkName:"WhiteLabelling"*/ "./Components/Pages/WhiteLabelling"),
  loading: () => <div>loading ............</div>,
});
const DigitalStartup = Loadable({
  loader: () => import(/*webpackChunkName:"DigitalStartup"*/ "./Components/Pages/DigitalStartup"),
  loading: () => <div>loading ............</div>,
});

const ResourcesOutsourcing = Loadable({
  loader: () => import(/*webpackChunkName:"ResourcesOutsourcing"*/ "./Components/Pages/ResourceOutsourcing"),
  loading: () => <div>loading ............</div>,
});
const CallCenter = Loadable({
  loader: () => import(/*webpackChunkName:"CallCenter"*/ "./Components/Pages/CallCenter"),
  loading: () => <div>loading ............</div>,
});
const CreativeDesign = Loadable({
  loader: () => import(/*webpackChunkName:"CreativeDesign"*/ "./Components/Pages/CreativeDesign"),
  loading: () => <div>loading ............</div>,
});
const WebDevelopment = Loadable({
  loader: () => import(/*webpackChunkName:"WebDevelopment"*/ "./Components/Pages/WebDevelopment"),
  loading: () => <div>loading ............</div>,
});
const DigitalMarketing = Loadable({
  loader: () => import(/*webpackChunkName:"WhiteLabelling"*/ "./Components/Pages/DigitalMarketing"),
  loading: () => <div>loading ............</div>,
});
const AppDevelopment = Loadable({
  loader: () => import(/*webpackChunkName:"AppDevelopment"*/ "./Components/Pages/AppDevelopment"),
  loading: () => <div>loading ............</div>,
});
const VideoDevelopment = Loadable({
  loader: () => import(/*webpackChunkName:"VideoDevelopment"*/ "./Components/Pages/VideoDevelopment"),
  loading: () => <div>loading ............</div>,
});
const ContentWriting = Loadable({
  loader: () => import(/*webpackChunkName:"ContentWriting"*/ "./Components/Pages/ContentWritting"),
  loading: () => <div>loading ............</div>,
});
const CyberSecurity = Loadable({
  loader: () => import(/*webpackChunkName:"WhiteLabelling"*/ "./Components/Pages/CyberSecurity"),
  loading: () => <div>loading ............</div>,
});
const CaseStudy = Loadable({
  loader: () => import(/*webpackChunkName:"CyberSecurity"*/ "./Components/Pages/CaseStudy"),
  loading: () => <div>loading ............</div>,
});
const Pricing = Loadable({
  loader: () => import(/*webpackChunkName:"Pricing"*/ "./Components/Pages/Pricing"),
  loading: () => <div>loading ............</div>,
});
const Portfolio = Loadable({
  loader: () => import(/*webpackChunkName:"Portfolio"*/ "./Components/Pages/Portfolio"),
  loading: () => <div>loading ............</div>,
});
const Blog = Loadable({
  loader: () => import(/*webpackChunkName:"Blog"*/ "./Components/Pages/Blog"),
  loading: () => <div>loading ............</div>,
});
const Contact = Loadable({
  loader: () => import(/*webpackChunkName:"Contact"*/ "./Components/Pages/Contact"),
  loading: () => <div>loading ............</div>,
});
const PrivacyPolicy = Loadable({
  loader: () => import(/*webpackChunkName:"PrivacyPolicy"*/ "./Components/Pages/PrivacyPolicy"),
  loading: () => <div>loading ............</div>,
});
const RefundPolicy = Loadable({
  loader: () => import(/*webpackChunkName:"RefundPolicy"*/ "./Components/Pages/RefundPolicy"),
  loading: () => <div>loading ............</div>,
});
const TermAndConditions = Loadable({
  loader: () => import(/*webpackChunkName:"TermAndConditions"*/ "./Components/Pages/TermAndConditions"),
  loading: () => <div>loading ............</div>,
});
const ThankYou = Loadable({
  loader: () => import(/*webpackChunkName:"ThankYou"*/ "./Layout/ThankYou/ThankYou"),
  loading: () => <div>loading ............</div>,
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
    component: ContentWriting,
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
