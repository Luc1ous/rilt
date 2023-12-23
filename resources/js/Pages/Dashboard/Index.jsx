import React from 'react'
import Admin from '@/Layout/Admin'
import { Card, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'

export default function Index({ articles }) {
  return (
    <Admin>
      <div className='max-w-xl'>
        <Admin.Title>Dashboard page</Admin.Title>
        <Admin.Description>Here is dashboard admin page. It's only for admin, superadmin and developer</Admin.Description>
      </div>

      <div className='mt-6 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <Card>
          <CardHeader>
            <CardTitle>Your Total {articles > 1 ? 'Articles' : 'Article'}</CardTitle>
            <CardDescription>{articles}</CardDescription>
          </CardHeader>
        </Card>
      </div>

    </Admin>
  )
}
