import React from 'react'
import Default from '@/Layout/Default'
import { Card, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import ArticleCard from '@/Components/ArticleCard'
import Pagination from '@/Components/Pagination'

export default function CategoryDetail({ articles, category }) {
  return (
    <Default>
      <Card className='shadow-md'>
        <CardHeader>
          <div className='flex items-center gap-6'>
            <img src={category.image} className='w-10' alt="" />
            <div>
              <CardTitle>Article with category : {category.name}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {articles.data.length == 0 && (
        <div className='max-w-sm mx-auto my-8'>
          <img src={'/assets/empty.png'} alt="" />
          <p className='text-center'>There is no article with category : {category.name}</p>
        </div>
      )}

      {articles.data.length > 0 && (
        <>
          <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
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
