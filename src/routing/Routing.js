import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import InventoryDetails from '../pages/InventoryDetails'

export default function Routing() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/inventory/:id' element={<InventoryDetails/>}/>
        </Routes>
    </>
  )
}
