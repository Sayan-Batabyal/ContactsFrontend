import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const EditContact = () => {
        const nav=useNavigate()
        const params=useParams()
        const phone=useRef()
        const name=useRef()
        const address=useRef()
        const {loading,data}=useFetch(`https://contactsapi.cyclic.app/api/contact/${params.id}`)
        
        useEffect(() => {
           if(!loading){
            phone.current.value=data.phone
            name.current.value=data.name
            address.current.value=data.address
           }
        }, [data,loading])
        

        const handleSubmit= async (e)=>{
            e.preventDefault()
            const dataNew={
                name:name.current.value,
                phone:phone.current.value,
                address:address.current.value
            }
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`
            await axios.put(`https://contactsapi.cyclic.app/api/contact/${params.id}`,dataNew)
            nav('/')
            
        }
    
      return (
        <div className='flex flex-col w-full min-h-screen bg-slate-100'>
            <div className='h-1/5 px-20 py-10 bg-slate-200'>
                <h1 className='text-2xl font-bold'>Edit Contact</h1>
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
              <button className='px-6 bg-blue-200 rounded-lg font-bold py-3' type='submit'> Confirm Edit </button>
              </form>
            </div>
        </div>
      )
    }

export default EditContact