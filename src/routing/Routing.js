import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogPage from '../pages/BlogPage'
import Home from '../pages/Home'
import InventoriesPage from '../pages/InventoriesPage'
import InventoryDetailsPage from '../pages/InventoryDetailsPage'
import LoginPage from '../pages/LoginPage'
import NewInventoryPage from '../pages/NewInventoryPage'
import NotFound from '../pages/NotFound'
import RegistrationPage from '../pages/RegistrationPage'
import UserProductPage from '../pages/UserProductPage'
import PrivateRoute from './PrivateRoute'

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/newInventory' element={<PrivateRoute><NewInventoryPage /></PrivateRoute>} />
        <Route path='/manageInventory' element={<PrivateRoute><InventoriesPage /></PrivateRoute>} />
        <Route path='/inventory/:id' element={<PrivateRoute><InventoryDetailsPage /></PrivateRoute>} />
        <Route path='/userProduct' element={<PrivateRoute><UserProductPage /></PrivateRoute>} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>

    </>
  )
}
