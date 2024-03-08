import React from 'react'
import Admin from '@/Layout/Admin'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardFooter } from '@/Components/ui/card'
import Pagination from '@/Components/Pagination'
import { Link } from '@inertiajs/inertia-react'
import { Pencil2Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/Components/ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Inertia } from '@inertiajs/inertia'
import Empty from '@/Components/Empty'

export default function Index({ articles }) {
  const handleDelete = async (article) => {
    Inertia.delete(`/dashboard/articles/${article}`)
  }

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

      <div className='mb-10'>
        <Card>
          <CardContent className='p-6'>
            <Table>
              <TableCaption>Articles total {articles.total}</TableCaption>
              <TableHeader className='bg-gray-50'>
                <TableRow>
                  <TableHead>No</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.data.length == 0 &&
                  <TableRow>
                    <Empty colSpan={5}></Empty>
                  </TableRow>
                }
                {articles.data.map((article, index) => (
                  <TableRow key={index}>
                    <TableCell>{(articles.current_page - 1) * articles.per_page + index + 1}</TableCell>
                    <TableCell>{article.title}</TableCell>
                    <TableCell>{article.slug}</TableCell>
                    <TableCell>
                      {article.status == 'published' ? (
                        <p className='inline-flex text-sm px-4 py-1 rounded-full text-green-800 bg-green-300'>{article.status}</p>
                      ) : (
                        <p className='inline-flex text-sm px-4 py-1 rounded-full text-red-800 bg-red-300'>{article.status}</p>
                      )}
                    </TableCell>
                    <TableCell className='flex gap-2'>
                      <Button asChild>
                        <Link href={`/dashboard/articles/${article.slug}/edit`}>
                          <Pencil2Icon />
                        </Link>
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant='destructive'>
                            <TrashIcon />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you sure ?</DialogTitle>
                            <DialogDescription>
                              Wan't to delete article with title <b>{article.title}</b>
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter className='sm:justify-start'>
                            <DialogClose asChild>
                              <Button onClick={() => handleDelete(article.slug)} variant='destructive'>Delete</Button>
                            </DialogClose>
                            <DialogClose asChild>
                              <Button variant='secondary'>Cancel</Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
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
