import React from 'react'

const Contact = () => {
  return (
    <div className='flex  justify-center'>
        <div>
        <h1 className='text-3xl font-medium ml-32'>Contact Us</h1>
        <div className='mt-5'>
            <input type="text " placeholder='first Name' className='outline-0  border-b-2 border-black'  />
            <input type="text " placeholder='last Name'  className='outline-0  border-b-2 border-black ml-9' />

        </div>
        <input type="Email" placeholder='email id' className='outline-0  border-b-2 border-black mt-5' />
        <input type="Phone No " placeholder='+91...........' className='outline-0  border-b-2 border-black mt-5 ml-9' />
        <br />
        <textarea cols={55} rows={6} placeholder='how may i help you' className='mt-5 border-2 border-black outline-0'></textarea>
        <br />
        <button className="px-10 py-1.5 mt-5  border-solid border-2  rounded-3xl ml-36  hover:bg-orange-500 hover:text-white hover: border-red-600">Submit</button>
        </div>
      
    </div>
  )
}

export default Contact
