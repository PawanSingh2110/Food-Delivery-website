import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Placeorder = () => {
  const {getTotalSum}=useContext(StoreContext)
  return (
    <div className='flex justify-between mt-10'>
      <div className=" w-96 ">
      <div>
        <h1 className='text-2xl font-medium'>Delivery Detail </h1>
      </div>
      <div  className='flex gap-5 mt-5'>
        <input type="text" placeholder=' First Name ' required  className='outline-0'/>
        <input type="text" placeholder='Last Name' required className='outline-0' />
      </div>
      <input className='mt-5 outline-0' type="EmailId" placeholder='Email id ' required  />
      <input className='mt-5 outline-0' type="Address" placeholder='Street' required  />

    <div className='flex mt-5'>
      <input type="text" placeholder='City' required  className='outline-0'/>
      <input type="text" placeholder='State' required className='outline-0' />
      <input type="text" placeholder='Pincode' required  className='outline-0'/>
    </div>
    
      <input className='mt-5 outline-0' type="text" placeholder='Landmark' required  />
      <input className='mt-5 outline-0' type="text" placeholder='Contact Number' required  />
      </div>

      <div>
      <div>
            <h1 className="text-2xl font-medium" >Cart Total</h1>
            <div className=" w-96">
              <div className="flex justify-between p-2">
                <p className="font-light" >SubTotal</p>
                <p>{getTotalSum()}</p>
              </div>
              <hr />
              <div className="flex justify-between p-2">
                <p className="font-light" >Delivery Fees</p>
                <p>${getTotalSum()===0?0:2}</p>
              </div>
              <hr />
              <div className="flex justify-between p-2">
                <p className="font-medium text-xl">Total</p>
                <b>${getTotalSum()===0?0:getTotalSum() +2}</b>
              </div>
              <button className="border-2 border-red-600 bg-red-600 px-6 py-2 rounded-full mt-5" >Procced To Payment</button>
            </div>
          
          </div>
      </div>



      
      
    </div>
  )
}

export default Placeorder
