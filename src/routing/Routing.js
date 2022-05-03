import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import InventoriesPage from '../pages/InventoriesPage'
import InventoryDetailsPage from '../pages/InventoryDetailsPage'
import LoginPage from '../pages/LoginPage'
import NewInventoryPage from '../pages/NewInventoryPage'
import NotFound from '../pages/NotFound'
import RegistrationPage from '../pages/RegistrationPage'

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newInventory' element={<NewInventoryPage />} />
        <Route path='/manageInventory' element={<InventoriesPage />} />
        <Route path='/inventory/:id' element={<InventoryDetailsPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>

    </>
  )
}
