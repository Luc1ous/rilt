import React from 'react'
import Default from '@/Layout/Default'
import { Head, Link } from '@inertiajs/inertia-react'
import parse from 'html-react-parser'

export default function Article({ article }) {
  return (
    <Default>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className='max-w-3xl mx-auto md:p-6'>
        <div className='flex items-center mb-6 text-gray-500 hover:text-gray-700 transition-all ease-in-out space-x-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
          <Link href='/articles'>Back to articles</Link>
        </div>
        <h2 className='capitalize text-2xl md:text-4xl font-bold'>{article.title}</h2>
        <p className='my-8 flex justify-between text-sm md:text-base font-normal text-gray-600'>
          {article.created_at}
          <div>
            Author : <Link href={`/user/${article.author.nickname}`} className='hover:text-blue-500 hover:underline'>@{article.author.nickname}</Link>
          </div>
        </p>
        <img className='w-full mx-auto aspect-video rounded-2xl' src={article.thumbnail} alt="" />

        <p className='whitespace-pre-line prose leading-loose text-justify text-lg text-gray-700 mt-10'>
          {parse(article.body)}
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
