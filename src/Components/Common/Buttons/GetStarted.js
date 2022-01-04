import React from 'react'
import { useDispatch } from 'react-redux'
import { CHANGE_MODAL } from '../../../Store/Action'

const GetStarted = ({ buttonClass, buttonText }) => {
   const dispatch = useDispatch()

   return (
      <div>
         <button className={buttonClass} onClick={() => dispatch(CHANGE_MODAL(true))}>
            {buttonText}
         </button>
      </div>
   )
}

export default GetStarted
