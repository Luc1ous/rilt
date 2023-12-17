import React from 'react'
import Admin from '@/Layout/Admin'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardFooter } from '@/Components/ui/card'
import Pagination from '@/Components/Pagination'
import { PlusIcon } from '@radix-ui/react-icons'

export default function Index({ articles }) {
  return (
    <Admin>
      <Admin.Title>Articles</Admin.Title>
      <Admin.Description>Here is your articles list. You can create, edit, and delete your articles here</Admin.Description>

      <Button className='my-4 flex gap-2'>
        <PlusIcon />
        Create new article
      </Button>
      
      <div className='mb-10'>
        <Card>
          <CardContent className='p-6'>
            <Table>
              <TableCaption>Articles list</TableCaption>
              <TableHeader className='bg-gray-50'>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.data.map((article, index) => (
                  <TableRow key={index}>
                    <TableCell>{article.id}</TableCell>
                    <TableCell>{article.title}</TableCell>
                    <TableCell>{article.slug}</TableCell>
                    <TableCell className='flex gap-2'>
                      <Button>Edit</Button>
                      <Button variant='destructive'>Delete</Button>
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
