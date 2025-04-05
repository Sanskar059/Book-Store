import React from 'react'
import Front from "../assets/Front.jpg"
function Banner() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-22 px-4 flex flex-col md:flex-row my-10  dark:bg-slate-900 dark:text-white '>
    <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1' >
   <div  className="space-y-6">
   <h1 className='text-4xl font-bold'>
      Hello welcome here to Learn something <span className="text-pink-500">new everyday</span>
      </h1>
      <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ut doloremque quam,
         eligendi laborum doloribus ab nam asperiores,
          molestias, earum hic?</p>

          <label className="input validator bg-white text-black border-black rounded-4xl  dark:bg-slate-900 dark:text-white dark:border-white">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  <input  type="text"  placeholder="Email" className='grow  dark:text-white' required/>
</label>
<div className="validator-hint hidden ">Enter valid email address</div>
   </div>
   <button className="btn btn-secondary mt-5">Secondary</button>
      </div>
    <div className='order-1 w-full md:w-1/2' >
    <img src= {Front}  className= "h-120 w-120 ml-20 mt-20"alt="img not found" />
    </div>
   </div>
   </>
  )
}

export default Banner
