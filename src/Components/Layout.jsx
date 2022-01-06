import React from 'react'
import Footer from './Common/Footer'
import Header from './Common/Header'

const Layout = ({ children }) => {
   return (
      <>

         <Header />
         <main>
            {children}
         </main>
         <Footer />
      </>
   )
}
export default Layout
