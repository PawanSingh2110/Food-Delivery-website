import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='w-full bg-slate-900 mt-20 sm: flex-shrink-0'>
      <div className='flex justify-evenly p-20 '>
      <div >
        <img src={assets.logo} alt="" />
        <p className='w-72 text-white font-light mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore natus adipisci quibusdam repudiandae exercitationem ut.</p>
        <div className='flex mt-5'>
            <img className="ml-3" src={assets.facebook_icon} alt="" />
            <img className="ml-3" src={assets.linkedin_icon} alt="" />
            <img className="ml-3" src={assets.twitter_icon} alt="" />
        </div>
        </div>
        <div>
            <h1 className='text-3xl text-white font-medium'>Company</h1>
            <ul className='text-white cursor-pointer mt-4'>
                <li>Home</li>
                <li>Contact</li>
                <li>Delvrey</li>
                <li>Privacy-plociy</li>
            </ul>
        </div>
        <div className=' sm: ml-10'>
            <h1 className='text-3xl text-white font-medium'>Get In Touch</h1>
            <ul className='text-white cursor-pointer mt-4'>
                <li>022-444-6666-44</li>
                <li>Tamato@gmail.com</li>
            </ul>
        </div>
      </div>

       

      
      <hr className=' w-9/12 border-2 border-white m-auto ' />
      <p className='text-white uppercase text-center p-4 sm:mb-5'>coppy right reservation under the act</p>
    </div>
  )
}

export default Footer
