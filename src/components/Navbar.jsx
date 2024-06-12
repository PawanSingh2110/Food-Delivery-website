import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setLogin }) => {
  const {getTotalSum}= useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className="flex justify-between ">
      <div className="mt-10">
        
        <Link to={"/"} ><img src={assets.logo} alt="" /></Link>
      </div>
      <ul className="flex mt-10 ">
        <li className="ml-5 text-xl font-light cursor-pointer hover:underline" onClick={()=>navigate("/")} >
          Home
        </li>
        <li className="ml-5 text-xl font-light cursor-pointer hover:underline" onClick={()=>navigate("/explore-menu")}  >
          About
        </li>
        <li className="ml-5 text-xl font-light cursor-pointer hover:underline" onClick={()=>navigate("/contact")} >
          Contact
        </li>
        <li className="ml-5 text-xl font-light cursor-pointer hover:underline">
          Moblie-app
        </li>
      </ul>
      <div className="flex mr-10 justify-between mt-10">
        <img src={assets.search_icon} alt="" className="mr-10 h-7" />
        <div className="relative">
         
          <Link to={"/cart"}> <img src={assets.basket_icon} alt="" className="h-7" /></Link>

          <div  className={getTotalSum()? "dot" : <></>}></div>
        </div>
        <button
          className="px-5 py-1.5 mb-5 border-solid border-2  rounded-3xl ml-10  hover:bg-orange-500 hover:text-white hover: border-red-600"
          onClick={() => setLogin(true)}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
