import { createContext,  useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [cartitem ,setCartItem] = useState({})

  const addtocart =(itemId)=>{

    if(!cartitem[itemId]){
      setCartItem((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    } 

  }

  const removefromcart =(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))

  }

  const getTotalSum =()=>{
    let Total = 0;
    for(const item in cartitem){
      if (cartitem[item] > 0 ) {
        let info = food_list.find((product)=>product._id === item)
      Total += info.price * cartitem[item]
      }
      
    }
    return Total;
  }




  const contextValue = {
    food_list,
    cartitem,
    setCartItem,
    addtocart,
    removefromcart,
    getTotalSum
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
