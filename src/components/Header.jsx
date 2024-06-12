import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='head sm:shrink-0'>
      <div className='absolute bottom-24 left-14  '>
        <h1 className='text-7xl text-white font-semibold w-8/12  '>order Your <br/> Fav Food From Here</h1>
        <p className='text-md text-white font-normal w-7/12 mt-5 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis numquam soluta voluptas et deserunt. Beatae magnam sint omnis tenetur illo. </p>
        <button className='bg-black text-white px-8 py-2 rounded-3xl mt-3 border-2  border-gray-400 hover:bg-white hover:text-black' >View Menu</button>
      </div>
    </div>
  )
}

export default Header
