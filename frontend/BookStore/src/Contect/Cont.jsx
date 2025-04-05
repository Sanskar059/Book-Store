import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contect from '../components/Contect'

function Cont() {
  return (
    <div>
     
       <div className='min-h-screen'>
        <Navbar />
       <Contect />
       </div>
        <Footer/>
    </div>
  )
}

export default Cont
