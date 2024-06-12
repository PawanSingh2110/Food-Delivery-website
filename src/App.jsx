import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/Placeorder/Placeorder";
import Footer from "./components/Footer";

import { useState } from "react";
import LoginPopUp from "./components/LoginPopUp";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";

function App() {
  const [showlogin, setLogin] = useState(false);
  return (
    <>
      {showlogin ? <LoginPopUp setLogin={setLogin} /> : <></>}
      <div className="app">
        <Navbar setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
          <Route path="/explore-menu" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        
      </div>

      <Footer />
    </>
  );
}

export default App;
