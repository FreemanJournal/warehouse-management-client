import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ManageInventories from '../components/Products/ManageInventories'

export default function InventoriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>

      <Navbar />
      <ManageInventories />
      <Footer />
    </>
  )
}
