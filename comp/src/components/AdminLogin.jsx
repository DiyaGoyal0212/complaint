import React from 'react';
import "./Login.css";

export default function AdminLogin() {
  return (
  <>
  <div className='w-full h-screen flex items-start'>
    <div className='relative w-1/2 h-full flex flex-col '>  
    <img src='../images/login_admin.jpg' className='w-full h-full object-cover'/>

    </div>
    <div className='w-1/2 h-full bg-[#DCEBF7] flex flex-col p-14 justify-between'>
      <h1 className='text-xl text-[#060606] font-semibold'>UComplaint</h1>

      <div className='w-full flex flex-col max-w-[500px]'>
        <div className='flex flex-col w-full mb-1'>
        <h3 className='text-3xl font-semibold mb-1'>Login</h3>
      <p className='text-base mb-1'>Welcome Back! Please enter your details</p>
      </div>
      <div className='w-full flex flex-col'>
        <input type='email' placeholder='Email'className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
        <input type='password' placeholder='Password'className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>

      </div>
      <div className='w-full flex items-center justify-between'>
        <div className=' w-full flex items-center '>
          <input type='checkbox' className='w-4 h-4 mr-2 my-1' />
          <p className='text-sm '>Remember Me</p>
        </div>
        <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline-offset-2'>Forget Password ?</p>
      </div>
      <div className='w-full flex flex-col my-4'> 
        <button className='w-full h-5  my-2 text-white bg-[#060606] rounded-md p-4 text-center flex items-center justify-center' >Log in</button>
        
      </div>
      <div className='w-full flex items-center justify-center relative py-2'>
        <div className='w-full h-[1px] bg-black'>
          {/* <p className='absolute tex-black/80 bg-white text-center'></p> */}

        </div> </div>
        <div>
        <div className='w-full h-5 my-2 text-[#060606] bg-white rounded-md p-4 text-center flex items-center justify-center' >Sign in with google</div>

        </div>

     
      </div>
      <div className='w-full flex items-center justify-center'>
        <p className='text-sm font-normal text--[#060606] '>Don't have an account?<span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up</span>  </p>
         
      </div>
     
      

    </div>

  </div>
  


  </>
        
      
   
  )
}

