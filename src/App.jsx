import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import CampSchedule from './components/CampSchedule'
import './App.css'
import Coaches from './components/Coaches'
import Gallery from './components/Gallery'
import Testimonial from './components/Testimonial'
import Sponsors from './components/Sponsors'
import Appointment from './components/Appointment'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <CampSchedule />
      <Coaches />
      <Gallery />
      <Testimonial />
      <Sponsors />
      <Appointment />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App