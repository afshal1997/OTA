import React from 'react'
import Header from './Common/Header'
import OTAMeTagsAndDescriptions from './Common/MetaTag/MetaTag'
import WebSchema from './Common/Schema/Schema'
import ScrollToTop from './Common/ScrollToTop'
import { lazy } from 'react';
import { Suspense } from 'react';
import Loader from './Common/Loader/Loader';
const Footer = lazy(() => import('./Common/Footer'))

const Layout = ({ children }) => {
   return (
      <Suspense fallback={<Loader/>}>
         <OTAMeTagsAndDescriptions />
         <WebSchema />
         <ScrollToTop />
         <Header />
         <main>
            {children}
         </main>
         <Footer />
      </Suspense>
   )
}
export default Layout
