import axios from 'axios'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ManageInventories from '../components/Products/ManageInventories'
import Loader from '../utilities/Loader'

const getProducts = (uri) => axios.get(uri).then(res => res.data);
export default function InventoriesPage() {
  const { data, error } = useSWR(`${process.env.REACT_APP_uri}/items`, getProducts)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!data) {
    return <Loader isLoading={!data} />
  }
  return (
    <>
      <Navbar />
      <ManageInventories products={data}/>
      <Footer />
    </>
  )
}
