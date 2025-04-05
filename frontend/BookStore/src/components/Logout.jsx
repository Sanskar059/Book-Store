import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthProvider';


function Logout() {
    const[authUser , setAuthuser] = useAuth();
   const navigate = useNavigate();

   function handleClick() {
    setAuthuser({
        ...authUser,
        user: null
    })
    localStorage.removeItem("user")
    alert("logout sucess")
        navigate("/"); 
        window.location.reload()
    }

   return (
      <div>
         <button 
            onClick={handleClick} 
            className="btn bg-red-500 text-white rounded-4xl hover:bg-slate-800 duration-300 px-3 mx-3"
         >
            Logout
         </button>
      </div>
   )
}

export default Logout
