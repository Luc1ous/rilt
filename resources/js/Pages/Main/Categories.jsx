import React from 'react'
import Default from '@/Layout/Default'
import { Card, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import { Link } from '@inertiajs/inertia-react'

export default function Categories({ categories }) {
  return (
    <Default>
      <h3 className='text-3xl font-semibold'>Categories page</h3>
      <p className='text-base text-gray-600 leading-loose'>Here is list of categories that exist in this website.</p>

      <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) =>(
          <Card key={index} className='hover:bg-gray-50'>
            <Link href={`/categories/${category.slug}`}>
              <CardHeader>
                <CardTitle className='capitalize'>{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>

    </Default>
  )
}
