import React from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Testimonial from '../components/Testimonial'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
    
    <div className="p-4">
     <Hero/>
     <Menu/>
     <Testimonial/>
     <AboutSection/>
    
    </div>
     <Footer/>
    </>
  )
}

export default Home