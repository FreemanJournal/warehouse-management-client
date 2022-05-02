import React, { useContext, useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ManageInventories from '../components/Products/ManageInventories'
import { GlobalContext } from '../context/GlobalContext'
import Loader from '../utilities/Loader'

export default function InventoriesPage() {
  const { isLoading } = useContext(GlobalContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  console.log('isLoading',isLoading);
  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }
  return (
    <>

      <Navbar />
      <ManageInventories />
      <Footer />
    </>
  )
}
