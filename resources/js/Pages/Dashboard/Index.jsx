import React from 'react'
import Admin from '@/Layout/Admin'
import { Card, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'

export default function Index() {
  return (
    <Admin>
      <div className='max-w-xl'>
        <Admin.Title>Dashboard page</Admin.Title>
        <Admin.Description>Here is dashboard admin page. It's only for admin, superadmin and developer</Admin.Description>
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
