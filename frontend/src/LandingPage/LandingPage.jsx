import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from './Herosection'
import AboutUs from './AboutUs'
import Footer from '../components/Footer'
import Bottom_LP from './Bottom_LP'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <AboutUs/>
      <Bottom_LP/>
      <Footer/>
    </div>
  )
}

export default LandingPage
