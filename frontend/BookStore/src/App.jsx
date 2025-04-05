import { useState } from 'react'
import{ Navigate, Route, Routes } from "react-router-dom"
import Home from './Home/Home'
import Courses from './Course/Courses'
import Signup from './components/Signup'
import { useAuth } from './components/context/AuthProvider'

import Cont from './Contect/Cont'
import About from './About/About'


function App() {
   const [authUser , setAuthuser] = useAuth();
  return (
<div className=' dark:bg-slate-900 dark:text-white '>
<Routes>
  <Route path='/' element = {<Home/>}/>
  <Route path='/course' element = {authUser?<Courses/>:<Navigate to ={"/signup"}/>}/>
  <Route path='/signup' element = {<Signup/>}/>
  <Route path='/contact' element = {authUser?<Cont/>:<Navigate to ={"/signup"}/>}/>
  <Route path='/about' element = {<About/>}/>
 </Routes>
</div>
  )
}

export default App
