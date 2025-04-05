import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
 
   const onSubmit =async (data) =>{
   
     const userInfo = {
      email: data.email,
      password : data.password

     }
     console.log(userInfo)

    await axios.post("http://localhost:8003/user/login" , userInfo).then((res)=>{
      console.log(res.data);
      if (res.data.message ==="user log in") {
        alert("signup sucessful")
        localStorage.setItem("user" , JSON.stringify(res.data.user))
        window.location.reload();
      }
      else if(res.data.message ==="invalid  password"){
        alert("Invalid password")
      }
      else{
        alert("invalid email");
      }
     }).catch((error)=>{
      alert("error in login");
     })
   }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
     
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >X</button>
    </form>

    <form action=""  onSubmit={handleSubmit(onSubmit)}>
    <h3 className="font-bold text-lg">Login</h3>
   <div>
   <p className='m-1 p-1'>Email</p>
   <input {...register("email", { required: true })} className='m-1 p-1' type="text" name='email' placeholder='Enter your email' />
   {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
   <br/>
   

   <p className='m-1 p-1'>Password</p>
   
   <label className=" bg-white dark:bg-slate-900 dark:text-white">
  <svg className="h-[0.2em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" ><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5"></circle></g></svg>
  <input name='password' {...register("password", { required: true })} className="m-1 p-1 border-1 outline-none " type="password" required placeholder="Password" />

</label>
<div className='flex  justify-around mt-3'>
<button className='bg-pink-800 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer'>Login</button>
<p>Not registered? <Link to={"/signup"} className="text-blue-400 underline">Signup</Link></p>
</div>
   
   </div>
   </form>
  </div>
</dialog>

    </div>
  )
}

export default Login
