import React, { useState } from 'react'
import './App.css'
import Home from './component/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Allproduct from './component/Allproduct/Allproduct'
import AddToCart from './component/AddToCart/AddToCart'
import { createContext } from 'react'

const Context = createContext()

const App = () => {
  const [navItem, setNavItem] = useState('')
  const navbarItemFun = (item) => {
    setNavItem(item)
  }

  return (
    <>
      <Navbar navbarItemFun={navbarItemFun} />
      <Context.Provider value={navItem}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproduct" element={<Allproduct />} />
          <Route path="/addtocart" element={<AddToCart />} />
        </Routes>
      </Context.Provider>
    </>
  )
}

export default App
export { Context }
