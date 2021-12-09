import React from 'react'
import { useDispatch } from 'react-redux'
import { CHANGE_MODAL } from '../../../Store/Action'

const GetStarted = ({ buttonClass, buttonText }) => {
   const dispatch = useDispatch()

   return (
      <div>
         <a
            className={buttonClass}
            onClick={() => dispatch(CHANGE_MODAL(true))}
            href="javascript:void(0)"
         >
            {buttonText}
         </a>
      </div>
   )
}

export default GetStarted