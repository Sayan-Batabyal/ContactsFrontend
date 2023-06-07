import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AddContact = () => {
    const nav=useNavigate()
    const phone=useRef()
    const name=useRef()
    const address=useRef()
    const handleSubmit= async (e)=>{
        e.preventDefault()
        const data={
            name:name.current.value,
            phone:phone.current.value,
            address:address.current.value
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`
        await axios.post("https://vast-gray-cheetah-sari.cyclic.app/api/contact",data)
        nav('/')
        
    }

  return (
    <div className='flex flex-col w-full min-h-screen bg-slate-100'>
        <div className='h-1/5 px-20 py-10 bg-slate-200'>
            <h1 className='text-2xl font-bold'>Add New Contact</h1>
        </div>
        <div className='h-4/5 flex items-center justify-center '>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 rounded-2xl '>
          <div className='flex flex-col gap-1'>
           <label className='text-md'>Name</label>
           <input className=' p-2  text-xl border-b-2 border-slate-400 focus:outline-none focus:border-black  rounded-sm ' ref={name} type="text" required/>
          </div>
          <div className='flex flex-col gap-1'>
           <label className='text-md'>Phone</label>
           <input className=' p-2  text-xl border-b-2 border-slate-400 focus:outline-none focus:border-black  rounded-sm ' ref={phone} type="phone" required/>
          </div>
          <div className='flex flex-col gap-1'>
           <label className='text-md'>Address</label>
           <textarea className=' p-2  text-xl border-b-2 border-slate-400 focus:outline-none focus:border-black  rounded-sm ' ref={address} rows="4" cols="50" type="text" required/>
          </div>
          <button className='px-6 bg-blue-200 rounded-lg font-bold py-3' type='submit'> Add Contact </button>
          </form>
        </div>
    </div>
  )
}

export default AddContact