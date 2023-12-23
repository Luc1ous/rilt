import React from 'react'
import Default from '@/Layout/Default'
import ArticleCard from '@/Components/ArticleCard'
import Pagination from '@/Components/Pagination'

export default function Articles({ articles }) {
  return (
    <Default>
      <h3 className='text-3xl font-semibold'>Articles page</h3>
      <p className='text-base text-gray-600 leading-loose'>Here is you can read articles about laravel and it's ecosystem.</p>

      {articles.data.length == 0 && (
        <div className='max-w-sm mx-auto'>
          <img src={`/assets/empty.png`} alt="" />
          <p className='text-center'>There is no articles right now</p>
        </div>
      )}

      {articles.data.length > 0 && (
        <>
          <div className='w-full my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {articles.data.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>

          <div className='w-full my-8'>
            <Pagination data={articles} />
          </div>
        </>
      )}
    </Default>
  )
}
