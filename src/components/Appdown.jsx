import React from 'react'
import { assets } from '../assets/assets'

const Appdown = () => {
  return (
    <div className='mt-28 text-center '>
        <h1 className='text-4xl sm:text-2xl text-center lg:text-4xl  '>For Better Experience Download <br /> <span>Tomato App</span> </h1>
        <div className='flex justify-center mt-20 sm: flex-shrink-0 items-center '>
            <img className='w-34 h-16 ml-5 cursor-pointer hover:p-3 ' src={assets.app_store} alt="" />
            <img className='w-34 h-16 ml-5 cursor-pointer hover:p-3' src={assets.play_store} alt="" />
        </div>
      
    </div>
  )
}

export default Appdown
