import React, { useContext, useEffect } from 'react'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import HomeInventories from '../components/Products/HomeInventories'
import Testimonial from '../components/Testimonial/Testimonial'
import { GlobalContext } from '../context/GlobalContext'
import Loader from '../utilities/Loader'


export default function Home() {
  const { isLoading } = useContext(GlobalContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }

  return (
    <div className='relative'>
      <Navbar />
      <HeroSection />
      <HomeInventories />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  )
}
