import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios';
function Signup() {
   const navigate = useNavigate();
      const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit =async (data) =>{
   
        const userInfo = {
          name: data.name,
         email: data.email,
         password : data.password
   
        }
        console.log(userInfo)
   
       await axios.post("http://localhost:8003/user/signup" , userInfo).then((res)=>{
        console.log("res",res);
         console.log("res.data",res.data);


         if(res.data.message =="user created sucessfully"){
          alert("user created sucessfully")
          localStorage.setItem("user" , JSON.stringify(res.data.user))
          navigate("/"); 
        window.location.reload()
         
        }
         else if (res.data.message ==="user already exists") {
           alert("fuck off")
           
         }
        
         
        }).catch((error)=>{
         alert("error in login");
        })
      }
  return (
  <>
  <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div>
      <div className="flex justify-center align-middle items-center h-screen ">
  <div className=" bg-white text-black dark:bg-slate-900 dark:text-white border-1 m-2 p-5 hover:shadow-2xl">
   
<div className='flex justify-between  '>
   
      {/* if there is a button in form, it will close the modal */}
      <h3 className="font-bold text-lg">Signup</h3>
      <Link  to={"/"} className="btn btn-sm btn-circle btn-ghost ">✕</Link>
    
   
    
 
    </div>
   <div>
   <p className='m-1 p-1'>Username</p>
   <input {...register("name", { required: true })} className='m-1 p-1' type="text" name='name' placeholder='Enter your FullName' />
   {errors.name && <span>This field is required</span>}
   <br/>
   <p className='m-1 p-1'>Email</p>
   <input {...register("email", { required: true })} className='m-1 p-1' type="text" name='email' placeholder='Enter your email' />
   {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
   <br/>
   

   <p className='m-1 p-1'>Password</p>
   
   <label className=" bg-white  dark:bg-slate-900 dark:text-white">
  <svg className="h-[0.2em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" ><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5"></circle></g></svg>
  <input {...register("password", { required: true })} className="m-1 p-1 border-1 outline-none" type="password" required placeholder="Password"  />
</label>
<div className='flex  justify-between gap-6 mt-5'>
<button className='bg-pink-800 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer mx-5'>Signup</button>
<p className='px-5'>Already Registered? <button  onClick={()=>document.getElementById("my_modal_3").showModal()}  className=" text-blue-400 underline">Login</button></p>
</div>
<Login/>
   
   </div>
  </div>
</div>

    </div>
    </form>
</>
  )
}

export default Signup
