import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, image, name, description, price }) => {
   
    const {cartitem,addtocart ,removefromcart}= useContext(StoreContext)
  return (
    <div className="mt-7 shadow-lg rounded-lg cursor-pointer">
      
      <div className="relative">
        <img className="rounded-t-lg" src={image} alt="" />
        {
            !cartitem[id]
            ? <img className="border-2 rounded-full border-red-500 absolute bottom-5 right-5" onClick={()=>addtocart(id)} src={assets.add_icon_white} alt="" />
            : <div className="flex absolute bottom-5 right-5 border-2 border-red-500 bg-white text-center rounded-full ">
                <img className="p-2" onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="" />
                <p className=" text-black p-2 mt-1">{cartitem[id]}</p>
                <img className="p-2" onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
        
        </div>
        <div className="p-5">
          <div className="flex justify-between ">
            <h3 className="text-xl font-medium ">{name}</h3>
            <img className="p-2" src={assets.rating_starts} alt="" />
          </div>
          <p className="text-md  font-light ">{description}</p>
          <p className="px-3 py-2 text-red-600  text-xl">${price}</p>
        </div>
      
      
    </div>
  );
};

export default FoodItem;
