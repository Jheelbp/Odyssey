import React from 'react'
import HeroSection from "./HeroSection"
import Features from './Features'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features/>
      <Footer/>
    </>
  )
}

export default Home
