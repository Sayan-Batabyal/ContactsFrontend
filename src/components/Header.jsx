import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
    const userName=localStorage.getItem('userName').toUpperCase()
    const handleLogOut=()=>{
        localStorage.removeItem('userToken')
        localStorage.removeItem('userName')
        window.location.reload()
    }
  return (
    <div className='flex items-center justify-between py-7 px-20 bg-slate-200'>
      <h1 className='text-3xl text-blue-700 font-bold  '>Welcome <span className='text-sm'>{userName}</span></h1>
      <div className='w-1/4 flex justify-between'>
       <Link to={"/add"} className='font-bold text-blue-700'>+ New Contact</Link>
      <button className='font-bold text-blue-700 ' onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  )
}

export default Header