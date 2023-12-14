import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Link } from '@inertiajs/inertia-react'
import { Badge } from './ui/badge'

export default function ArticleCard({ article }) {

  return (
    <Card className='overflow-hidden'>
      <img className='w-full' src="https://images.unsplash.com/photo-1701962541409-e2c1256a8574?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
      <CardHeader>
        <CardTitle className='text-xl capitalize line-clamp-2 hover:text-blue-600 hover:underline'>
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </CardTitle>
        <CardDescription className='line-clamp-3'>{article.body}</CardDescription>
        <Link href={`/categories/${article.category.slug}`} className='inline-flex mt-2'>
          <span className='px-2 py-1 rounded-full text-xs text-fuchsia-900 bg-fuchsia-300 hover:bg-fuchsia-400 border border-fuchsia-700'>{article.category.name}</span>
        </Link>
      </CardHeader>
    </Card>
  )
}
