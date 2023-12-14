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
          <CardTitle>Article with category : {category.name}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
      </Card>

      <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {articles.data.map((article, index) =>(
          <ArticleCard key={index} article={article} />
        ))}
      </div>

      <div className='w-full my-8'>
        <Pagination data={articles} />
      </div>
    </Default>
  )
}
