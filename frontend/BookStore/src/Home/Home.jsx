import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

function Home() {
  return (
    <div >
      {/* style={{backgroundColor:"white", color:"black"}} */}
    <Navbar/>
  <Banner/>
  <Freebook/>
  <Footer/>
    </div>
  )
}

export default Home
