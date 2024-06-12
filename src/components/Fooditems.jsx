import React from 'react'
import { assets } from '../assets/assets'

const Fooditems = ( { id , name,description,price,image}) => {
  return (
    <div>
      <div className="food-item">
        <div className="food-image">
          <img src={image} alt='' />
        </div>
        <div className="food-details">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>Rs.{price}</p>
        </div>
      </div>
    </div>
  )
}

export default Fooditems
