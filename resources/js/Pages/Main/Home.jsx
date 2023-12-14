import React from 'react'
import Default from '@/Layout/Default'
import { Alert, AlertDescription, AlertTitle } from '@/Components/ui/alert'
import { RocketIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <Default>
      <div className='max-w-3xl mx-auto mt-16 md:text-center'>
        <Alert variant="destructive" className='text-left'>
          <RocketIcon className='h-4 w-4' />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>This is a pre launch website, so that some features may not be work.</AlertDescription>
        </Alert>
        <h2 className='text-3xl my-4 md:text-6xl font-semibold'>Introducing to You <span className='text-fuchsia-800'>RILT</span> Website</h2>
        <p className='text-sm md:text-base my-3 text-gray-600 leading-loose'>This webiste is part of my experimental that mixing PHP and JavaScript technology. This website is build using React Inertia Laravel Tailwind css stack (thats why I called it RILT). Also for database I using MySQL as commonly.</p>
      </div>
    </Default>
  )
}
