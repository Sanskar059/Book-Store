import React from 'react'
import Abut from '../components/Abut'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <Navbar/>
       <div className='min-h-screen'>
       <Abut/>
       </div>
        <Footer/>
    </div>
  )
}

export default About
