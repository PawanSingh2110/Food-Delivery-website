import React from 'react'
import { menu_list } from '../assets/assets'


const Menu = ({category , setCategory}) => {
  return (
    <div className='explore-menu ' id='explore-menu'>
        <div className='sm:text-xl'>
            <h1 className='text-3xl font-light '>Explore  our Menu</h1>
            <p className='font-light mt-3 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='list  sm: grid grid-cols-4 p-10 lg:grid-cols-8'>
            {
                menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='list-item'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.name} />
                            <h3 className=' mt-3 cursor-pointer'>{item.menu_name}</h3>
                            
                        </div>
                    )
                })
            }
        </div>
        <hr className='w-full border border-black mt-5'/>

    </div>
  )
}

export default Menu
