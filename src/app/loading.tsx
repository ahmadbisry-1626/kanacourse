import React from 'react'
import { ImSpinner2 } from 'react-icons/im'

const loading = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <ImSpinner2 className='md:w-12 md:h-12 w-7 h-7 text-blue-600 animate-spin'/>
    </div>
  )
}

export default loading
