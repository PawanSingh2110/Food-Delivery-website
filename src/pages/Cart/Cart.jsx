import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartitem, food_list, removefromcart,getTotalSum } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="">
        <div className="cart-item-title ">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        <div className="">
        {food_list.map((item, index) => {
          if (cartitem[item._id] > 0) {
            return (
              <div>
                <div key={index} className="cart-item-title cart-item">
              <img src={item.image} alt="" className="  w-14"/>
              <p className="" >{item.name}</p>
              <p className="ml-5" >${item.price}</p>
              <p className="ml-10" >{cartitem[item._id]}</p>
              <p className="ml-5" >${item.price * cartitem[item._id]}</p>
              <button className="border-2 border-black rounded-full px-3 hover:bg-red-500 hover:text-white" onClick={()=>removefromcart(item._id)}>Remove </button>
            </div>
            <hr/>
              </div>
            )

            
          }
         
        })}
        
        </div>
        <div className="flex justify-between mt-5">
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
              <button className="border-2 border-red-600 bg-red-600 px-6 py-2 rounded-full mt-5" onClick={()=>navigate("/order")}>Procced To Checheckout</button>
            </div>
          
          </div>
          <div className="px-10 mt-5">
             <p>If you have Promocode please enter here .....</p>
              <div className="w-auto bg-white rounded-full border-black border-2 px-4 py-2 mt-5">
              <input type="text" placeholder="PromoCode......" className=" ml-5  outline-0" />
              <button className="bg-black text-white px-6 py-3 rounded-full ml-8" >Submit</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
