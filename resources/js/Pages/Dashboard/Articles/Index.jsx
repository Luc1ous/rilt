import React from 'react'
import Admin from '@/Layout/Admin'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardFooter } from '@/Components/ui/card'
import Pagination from '@/Components/Pagination'
import { Link, usePage } from '@inertiajs/inertia-react'
import { CheckCircledIcon, Pencil2Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import { Alert, AlertDescription, AlertTitle } from '@/Components/ui/alert'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/Components/ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Inertia } from '@inertiajs/inertia'

export default function Index({ articles }) {
  const { flash } = usePage().props

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
              <TableCaption>Articles total {articles.total}</TableCaption>
              <TableHeader className='bg-gray-50'>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.data.length == 0 && <TableCell colspan='4' className='text-center'>Articles empty</TableCell>}
                {articles.data.map((article, index) => (
                  <TableRow key={index}>
                    <TableCell>{article.id}</TableCell>
                    <TableCell>{article.title}</TableCell>
                    <TableCell>{article.slug}</TableCell>
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
