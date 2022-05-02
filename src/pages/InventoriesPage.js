import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ManageInventories from '../components/Products/ManageInventories'

export default function InventoriesPage() {
  return (
    <>
           
            <Navbar />
            <ManageInventories/>
            <Footer />
        </>
  )
}
