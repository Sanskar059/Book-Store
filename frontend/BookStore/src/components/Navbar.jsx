// import React, { useEffect, useState } from 'react'

// import { Link } from 'react-router-dom';
// import Login from './Login';
// import { useAuth } from './context/AuthProvider';
// import Logout from './Logout';


// function Navbar() {
//   const [authUser , setAuthuser] = useAuth();
//   console.log(authUser);

// const [Theme , setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme"): "light"
// );
// const element = document.documentElement;
// useEffect(()=>{
//   if (Theme === "dark") {
//     element.classList.add("dark");
//     localStorage.setItem("theme" , "dark");
//   document.body.classList.add("dark");
//   }

//   else{
//     element.classList.remove("dark");
//     localStorage.setItem("theme" , "light");
//   document.body.classList.remove("dark");

//   }
// },[Theme])


// const [sticky , setsticky] = useState(false);

// useEffect(()=>{
//   const handleScroll =()=>{
//     if (window.scrollY>0) {
//       setsticky(true)
//     }
//     else{
//       setsticky(false);
//     }
//   }
//   window.addEventListener('scroll',handleScroll)
//   return()=>{
//     window.removeEventListener('scroll' , handleScroll)
//   }
// },[])

//     const Navitems = <>
//      <li><Link to={'/'}>Home</Link></li>
      
//      <li><Link to={'/course'}>Courses</Link></li>
//      <li><Link to={'/contact'}>Contact</Link></li>
      
//      <li><Link to={'/about '}>About</Link></li>
      

//     </>
//   return (
//     <div className={`navbar max-w-screen-2xl h-fit dark:bg-slate-900 dark:text-white  container mx-auto md:px-20 px-4 z-50  ${sticky? "text-black fixed top-0 sticky-navbar shadow-2xl bg-gray-700 duration-600 transition-all ease-in-out":""}`} >
//       <div className="navbar">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         {Navitems}
//       </ul>
//     </div>
//     <a className="text-2xl font-bold curser-pointer">BookStore</a>
//   </div>
  
//   <div className="navbar-end">
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
     
//      {Navitems}
     
//     </ul>
//   </div>
//   <div className=" md:block hidden ">
//   <label className="px-3 py-2 border rounded-xl flex items-center gap-2">
//   <input type="text" className=" text-black dark:text-white grow outline-none border-0 h-1.6" placeholder="Search" />
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 16 16"
//     fill="currentColor"
//     className="h-4 w-4 opacity-70">
//     <path
//       fillRule="evenodd"
//       d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//       clipRule="evenodd" />
//   </svg>
// </label>

//   </div>

//   <label className="swap swap-rotate">
//   {/* this hidden checkbox controls the state */}
//   <input type="checkbox" className="theme-controller" value="synthwave" />

//   {/* sun icon */}
//   <svg
//     className="swap-off h-7 w-7 fill-current mx-2"
//     xmlns="http://www.w3.org/2000/svg"
//     onClick={()=>setTheme(Theme ==="light"?"dark": "light" )}
//     viewBox="0 0 24 24">
    
//     <path
//       d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//   </svg>

//   {/* moon icon */}
//   <svg
//     className="swap-on h-7 w-7 fill-current"
//     xmlns="http://www.w3.org/2000/svg"
//     onClick={()=>setTheme(Theme ==="dark"?"light": "dark" )}
//     viewBox="0 0 24 24">
//     <path
//       d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//   </svg>
// </label>
  
//   {
//     authUser?<Logout/>:
//     <div>
//     <button onClick={()=>document.getElementById("my_modal_3").showModal()} className="btn bg-black text-white rounded-4xl hover:bg-slate-800 duration-300 px-3 mx-3">Login</button>
//     <Login/>
//   </div>
//   }
// </div>
// </div>
//     </div>
//   )
// }

// export default Navbar




import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useAuth } from './context/AuthProvider';
import Logout from './Logout';

function Navbar() {
  const [authUser, setAuthuser] = useAuth();
  console.log(authUser);

  const [Theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  
  const element = document.documentElement;
  
  useEffect(() => {
    if (Theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [Theme]);

  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setsticky(true);
      } else {
        setsticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const Navitems = (
    <>
      <li className="group list-none">
        <Link to={'/'} className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          Home
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
        </Link>
      </li>
      <li className="group list-none">
        <Link to={'/course'} className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          Courses
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
        </Link>
      </li>
      <li className="group list-none">
        <Link to={'/contact'} className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          Contact
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
        </Link>
      </li>
      <li className="group list-none">
        <Link to={'/about'} className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          About
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
        </Link>
      </li>
    </>
  );

  return (
    <div className={`w-full ${sticky ? 'fixed top-0 shadow-lg backdrop-blur-lg bg-white/80 dark:bg-slate-900/80' : 'bg-white dark:bg-slate-900'} transition-all duration-300 z-50`}>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="lg:hidden">
              <button
                type="button"
                className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none"
                onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BookStore
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 ">
            {Navitems}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search"
                className="w-64 px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(Theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              {Theme === "light" ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Auth Buttons */}
            {authUser ? (
              <Logout />
            ) : (
              <div>
                <button
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Login
                </button>
                <Login />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="lg:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Navitems}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;