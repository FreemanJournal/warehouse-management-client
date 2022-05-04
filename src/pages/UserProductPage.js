import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ManageInventories from '../components/Products/ManageInventories'
import { GlobalContext } from '../context/GlobalContext'
import auth from '../utilities/firebase.init'
import Loader from '../utilities/Loader'

export default function UserProductPage() {
  const { userProducts, isLoading, getMyProducts } = useContext(GlobalContext)
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    window.scrollTo(0, 0)
    getMyProducts(user?.email)
  }, [user])


  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }

  return (
    <div className=''>
      <Navbar />
      <ManageInventories products={userProducts} />
      <Footer />
    </div>
  )
}
