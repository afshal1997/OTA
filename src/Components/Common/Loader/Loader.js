import React from 'react'

const Loader = () => {
   return (
      <div className="d-flex justify-content-center align-items-center h100 bg-secondary">
         <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
         </div>
      </div>
   )
}

export default Loader