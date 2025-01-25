import { useState } from 'react'

import './App.css'
import Navbar from './components/LandingPage/Navbar'
import Herosection from './components/LandingPage/Herosection'
import AboutUs from './components/LandingPage/AboutUs'
import Footer from './components/LandingPage/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Herosection/>
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default App
