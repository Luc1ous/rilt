import { Toaster } from '@/Components/ui/toaster'
import React from 'react'

export default function Auth({ children }) {
  return (
    <div className='w-full min-h-screen bg-gray-50 flex justify-center items-center'>
      <div className='w-full max-w-lg px-6 md:px-0'>
        {children}
        <Toaster />
      </div>
    </div>
  )
}
