import React from 'react'
import Default from '@/Layout/Default'
import { Head, Link } from '@inertiajs/inertia-react'

export default function Article({ article }) {
  return (
    <Default>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className='max-w-3xl mx-auto md:p-6'>
        <h2 className='capitalize text-2xl md:text-4xl font-bold'>{article.title}</h2>
        <p className='my-8 text-sm md:text-base font-normal text-gray-600'>
          {article.created_at} | Author : <Link href={`/user/${article.author.username}`} className='hover:text-blue-500 hover:underline'>@{article.author.username}</Link>
        </p>
        <img className='w-full mx-auto aspect-auto rounded-2xl' src="https://images.unsplash.com/photo-1701962541409-e2c1256a8574?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />

        <p className='whitespace-pre-line text-lg text-gray-700 mt-10'>
          {article.body}
        </p>

        <div className='my-8'>
          <Link href={`/categories/${article.category.slug}`} className='py-1 px-5 rounded-full text-fuchsia-800 bg-fuchsia-300 hover:bg-fuchsia-400 border border-fuchsia-700 inline-flex'>
            {article.category.name}
          </Link>
        </div>
      </div>
    </Default>
  )
}
