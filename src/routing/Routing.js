import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import InventoriesPage from '../pages/InventoriesPage'
import InventoryDetailsPage from '../pages/InventoryDetailsPage'
import NewInventoryPage from '../pages/NewInventoryPage'

export default function Routing() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/newInventory' element={<NewInventoryPage/>}/>
            <Route path='/manageInventory' element={<InventoriesPage/>}/>
            <Route path='/inventory/:id' element={<InventoryDetailsPage/>}/>
        </Routes>
    </>
  )
}
