import React from 'react'

const Loader = () => {
   return (
      <div className="d-flex justify-content-center align-items-center h100 bg-dark pre-loader">
         <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
         </div>
      </div>
   )
}

export default Loader
