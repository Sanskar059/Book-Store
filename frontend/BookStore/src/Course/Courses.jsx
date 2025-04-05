import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Couse from '../components/Couse'

function Courses() {
  return (
    <div>
        <Navbar/>
       <div className='min-h-screen'>
       <Couse/>
       </div>
        <Footer/>
    </div>
  )
}

export default Courses
