import React from 'react'
import Navbar from '@/Components/Navbar'

export default function Default({children}) {
  return (
    <>
      <Navbar />
      <div className='container mt-8'>
        {children}
      </div>
    </>
  )
}
