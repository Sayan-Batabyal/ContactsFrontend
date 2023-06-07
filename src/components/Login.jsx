import axios from 'axios'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const email=useRef(null)
    const pass=useRef(null)
    const nav=useNavigate()
    const handleLogin= async(e)=>{
    e.preventDefault();
    const data={
        email:email.current.value,
        pass:pass.current.value
    }
    try{
        const res=await axios.post("https://vast-gray-cheetah-sari.cyclic.app/api/auth/login",data)
        if(!res.data.token)
        {
            alert(res.data.status)
            return;
        }
        
        const name=data.email.split('@')[0]
        localStorage.setItem('userName',name)
        localStorage.setItem("userToken",res.data.token)
        nav("/")
        
    }
    catch(err){
        throw(err)
    }

    }
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
    <form onSubmit={handleLogin} className='flex flex-col gap-6 p-10 bg-slate-200 rounded-2xl '>
    <h1 className='text-3xl '>Login</h1>    
    <div className='flex flex-col gap-1'>
    <label className='text-md'>Email</label>
    <input className=' p-2  text-lg border-b-2 border-slate-400 focus:outline-none focus:border-black  rounded-sm ' ref={email} type="email"  required/>
    </div>
    <div className='flex flex-col gap-1'>
    <label className='text-md' >Password</label>
    <input className=' p-2 text-lg border-b-2 border-slate-400 focus:outline-none focus:border-black' ref={pass} type="password"  required/>
    </div>
    <button className='px-6 bg-blue-200 rounded-lg font-bold py-2' type='submit'>Login</button>
    <span className='text-center' >Are You New? <Link to={"/register"} className='text-blue-700'>Register Now.</Link></span>
    
    </form>   
    </div>
  )
}

export default Login