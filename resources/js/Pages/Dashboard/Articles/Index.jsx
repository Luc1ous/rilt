import React from 'react'
import Admin from '@/Layout/Admin'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardFooter } from '@/Components/ui/card'
import Pagination from '@/Components/Pagination'
import { Link, usePage } from '@inertiajs/inertia-react'
import { CheckCircledIcon, Cross1Icon, Pencil2Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import { Alert, AlertDescription, AlertTitle } from '@/Components/ui/alert'

export default function Index({ articles }) {
  const { flash } = usePage().props
  return (
    <Admin>
      <Admin.Title>Articles</Admin.Title>
      <Admin.Description>Here is your articles list. You can create, edit, and delete your articles here</Admin.Description>

      <Link className='inline-flex' href='/dashboard/articles/create'>
        <Button className='my-4 flex gap-2'>
          <PlusIcon />
          Create new article
        </Button>
      </Link>

      {flash.success && 
        <Alert className='text-green-600 mb-6'>
          <CheckCircledIcon />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{flash.success}</AlertDescription>
        </Alert>
      }
      
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
                      <Link href={`/dashboard/articles/${article.slug}`}>
                        <Button>
                            <Pencil2Icon />
                        </Button>
                      </Link>
                      <Button variant='destructive'>
                        <TrashIcon />
                      </Button>
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
