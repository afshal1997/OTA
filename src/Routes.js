import { Redirect } from 'react-router-dom'
import AboutUS from './Components/Pages/AboutUS'
import CallCenter from './Components/Pages/CallCenter'
import ResourcesOutsourcing from './Components/Pages/ResourceOutsourcing'
import Home from './Components/Pages/Home'
import DigitalStartup from './Components/Pages/DigitalStartup'
import WhiteLabelling from './Components/Pages/WhiteLabelling'
import CreativeDesign from './Components/Pages/CreativeDesign'
import CyberSecurity from './Components/Pages/CyberSecurity'
import ContentWritting from './Components/Pages/ContentWritting'
const routes = [
    {
        path: '/', exact: true, component: () => <Redirect to='/home' />
    },
    {
        path: "/home", exact: true, component: Home,
    }
    ,
    {
        path: "/about-us", exact: true, component: AboutUS,

    },
    {
        path: "/call-center", exact: true, component: CallCenter,

    },
    {
        path: "/resource-outsourcing", exact: true, component: ResourcesOutsourcing,

    },
    {
        path: "/digital-startup", exact: true, component: DigitalStartup,

    },
    {
        path: "/white-labelling", exact: true, component: WhiteLabelling,

    },
    {
        path: "/creative-design", exact: true, component: CreativeDesign,

    },
    {
        path: "/cyber-security", exact: true, component: CyberSecurity,

    },
    {
        path: "/content-writting", exact: true, component: ContentWritting,

    }

]
export default routes