import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Button = ({children}) => {
  return (
    <button className='border-2 text-xl rounded-3xl px-6 py-2 border-[#412d269a] uppercase text-white hover:bg-[#382822]]'>{children}</button>
  )
}

export default Button