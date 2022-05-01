import React from 'react'
import FAQ from '../components/FAQ/FAQ'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Products/Products'
import Testimonial from '../components/Testimonial/Testimonial'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Products/>
      <Testimonial/>
      <FAQ/>
    </div>
  )
}
