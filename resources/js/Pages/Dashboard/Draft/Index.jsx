import Empty from '@/Components/Empty'
import Pagination from '@/Components/Pagination'
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardFooter } from '@/Components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'
import { useToast } from '@/Components/ui/use-toast'
import Admin from '@/Layout/Admin'
import { Inertia } from '@inertiajs/inertia'
import React from 'react'

export default function Index({ articles }) {
  const { toast } = useToast()
  const handlePublish = async (article) => {
    Inertia.patch(`/dashboard/draft/publish/${article}`, {
      onSuccess: toast({ title: "Success", description: "Article published" })
    })
  }
  return (
    <Admin>
      <Admin.Title>Draft Index</Admin.Title>
      <Admin.Description>Here is the list of unpublished articles. Don't forget to published it :).</Admin.Description>

      <div className='mt-4 mb-10'>
        <Card>
          <CardContent className='p-6'>
            <Table>
              <TableCaption>Article draft</TableCaption>
              <TableHeader className='bg-gray-50'>
                <TableRow>
                  <TableHead>No</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.data.length < 1 &&
                  <Empty colSpan={5}></Empty>
                }
                {articles.data.map((article, index) => (
                  <TableRow key={index}>
                    <TableCell>{(articles.current_page - 1) * articles.per_page + index + 1}</TableCell>
                    <TableCell>{article.title}</TableCell>
                    <TableCell>{article.slug}</TableCell>
                    <TableCell>{article.author.email}</TableCell>
                    <TableCell>
                      <Button onClick={() => handlePublish(article.slug)}>Publish</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Pagination data={articles}></Pagination>
          </CardFooter>
        </Card>
      </div>
    </Admin>
  )
}
