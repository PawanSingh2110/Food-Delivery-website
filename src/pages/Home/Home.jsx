import React, { useState } from 'react'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Fooddisplay from '../../components/Fooddisplay'
import Appdown from '../../components/Appdown'

const Home = () => {
  const [category , setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <Menu  category={category} setCategory={setCategory} />
      <Fooddisplay category={category} />
      <Appdown/>
      
    </div>
  )
}

export default Home
