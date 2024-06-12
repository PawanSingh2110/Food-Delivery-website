import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h1 className="mt-5 text-3xl font-semibold">Top Dish Near You </h1>
      <div className="grid grid-cols-3 gap-10 sm:grid-cols-2 items-center lg:grid-cols-3">
        {
          food_list.map((item ,index)=>{
            {console.log(category,item.category);}
            if (category==="All" || category===item.category) {
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            }
          })
        }
      </div>
    </div>
  );
};

export default Fooddisplay;
