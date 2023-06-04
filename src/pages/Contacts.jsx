import React from 'react'
import Header from '../components/Header'
import ContactsTable from '../components/ContactsTable'

const Contacts = () => {
  return (
    <div className='w-full min-h-screen '>
      <div className='h-1/5'><Header/></div>
      <div className='h-4/5'><ContactsTable/></div>
    </div>
  )
}

export default Contacts