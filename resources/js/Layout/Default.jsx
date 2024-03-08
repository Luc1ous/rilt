import React from 'react'
import Navbar from '@/Components/Navbar'
import { Toaster } from '@/Components/ui/toaster'

export default function Default({children}) {
  return (
    <>
      <Navbar />
      <div className='container mt-8'>
        {children}
        <Toaster />
      </div>
    </>
  )
}
