import React from 'react'
import Admin from '@/Layout/Admin'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Button } from '@/Components/ui/button'
import { CheckCircledIcon, Pencil2Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import { Card, CardContent } from '@/Components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog'
import { Alert, AlertDescription, AlertTitle } from '@/Components/ui/alert'
import Empty from '@/Components/Empty'
import { Inertia } from '@inertiajs/inertia'

export default function Index({ categories }) {
  const { flash } = usePage().props

  const handleDelete = async (category) => {
    Inertia.delete(`/dashboard/categories/${category}`)
  }
  return (
    <Admin>
      <Admin.Title>Categories</Admin.Title>
      <Admin.Description>Here is you can create, update, and delete categories</Admin.Description>

      <Link href='/dashboard/categories/create'>
        <Button className='flex gap-2 my-2'>
          <PlusIcon />
          Create new category
        </Button>
      </Link>

      {flash.success && (
        <Alert className='text-green-600'>
          <CheckCircledIcon />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{flash.success}</AlertDescription>
        </Alert>
      )}

      <Card className='my-4'>
        <CardContent className='p-6'>
          <Table>
            <TableCaption>Categories total {categories.length}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.length < 1 &&
                <TableRow>
                  <Empty></Empty>
                </TableRow>
              }
              {categories.map((category, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.slug}</TableCell>
                  <TableCell className='flex gap-2'>
                    <Button asChild>
                      <Link href={`/dashboard/categories/${category.slug}/edit`}>
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
                          <DialogDescription>Want to delete category <b>{category.name}</b></DialogDescription>
                        </DialogHeader>
                        <DialogFooter className='sm:justify-start'>
                          <DialogClose asChild>
                            <Button onClick={() => handleDelete(category.slug)} variant='destructive'>Delete</Button>
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
      </Card>
    </Admin>
  )
}
