import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginPopUp = ({setLogin}) => {
    const [currentstate,setCurrentState] =useState("SignUp")
  return (
    <div className='login-pop'>
      <form  className='login-cont'>
        <div className='flex justify-between'>
            <h2 className='text-xl'>{currentstate}</h2>
            <img onClick={()=>setLogin(false)} className='border-2 border-red-600 p-2 rounded-full cursor-pointer'  src={assets.cross_icon} alt="" />
        </div>
        <div className='login-input'>
            {currentstate === "Login" ?<>
            <input type="Emailid"  placeholder='EmailId' required/>
            <input type="password"  placeholder='Password' required/>
            </>
            :<>
            <input type="text"  placeholder='your name' required/>
            <input type="Emailid"  placeholder='EmailId' required/>
            <input type="password"  placeholder='Password' required/>
            </>}
        </div>
        <button  className='border-2 border-red-600 p-3 rounded-full text-black bg-orange-600'>{currentstate=== "SignUp" ? "Create Account ":"Login"}</button>
        <div className='flex'>
            <input type="checkbox" required className='mb-5 ' />
            <p className='ml-4'>By Continuing ,i agree all term and requriedment </p>
        </div>
        {currentstate==="login"?<p className='item-center'>create acccount <span className='text-black underline cursor-pointer' onClick={()=>setCurrentState("SignUp")} >click here</span> </p> 
        :<p className='item-center'>Already have account?  <span className='text-black underline cursor-pointer' onClick={()=>setCurrentState("Login")} >Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopUp
