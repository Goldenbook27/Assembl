import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from './Herosection'
import AboutUs from './AboutUs'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default LandingPage
