import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Products/Products'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Products/>
    </div>
  )
}
