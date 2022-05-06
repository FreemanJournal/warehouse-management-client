import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import useSWR from 'swr'
import Articles from '../components/Articles/Articles'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Loader from '../utilities/Loader'
const fetcher = url => axios.get(url).then(res => res.data)

export default function BlogPage() {
  const { data, error } = useSWR(`${process.env.REACT_APP_uri}/blogs`, fetcher)
  console.log('isLoading', !data && !error);
  if (!data && !error) {
    return <Loader isLoading={!data && !error} />
  }
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Navbar />
      <Articles data={data} />
      <Footer />
    </>
  )
}
