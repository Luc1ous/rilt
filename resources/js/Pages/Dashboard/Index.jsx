import React from 'react'
import Admin from '@/Layout/Admin'
import { Card, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'

export default function Index() {
  return (
    <Admin>
      <div className='max-w-xl'>
        <h2 className='text-2xl font-bold'>Dashboard page</h2>
        <p className='text-sm text-gray-600 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa aliquam modi id facere sint necessitatibus earum cum. Laudantium tempora.</p>
      </div>

      <div className='mt-6 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <Card>
          <CardHeader>
            <CardTitle>Total Articles</CardTitle>
            <CardDescription>20</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Articles</CardTitle>
            <CardDescription>20</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Articles</CardTitle>
            <CardDescription>20</CardDescription>
          </CardHeader>
        </Card>
      </div>

    </Admin>
  )
}
