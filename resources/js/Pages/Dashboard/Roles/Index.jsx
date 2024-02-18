import React from 'react'
import Admin from '@/Layout/Admin'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Card, CardContent, CardHeader } from '@/Components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'
import { Button } from '@/Components/ui/button'
import { CheckCircledIcon, Pencil2Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import { Alert, AlertDescription, AlertTitle } from '@/Components/ui/alert'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog'
import { Inertia } from '@inertiajs/inertia'
import Empty from '@/Components/Empty'

export default function Index({ roles }) {
  const { flash } = usePage().props

  const handleDelete = async (role) => {
    Inertia.delete(`/dashboard/roles/${role}`)
  }

  return (
    <Admin>
      <Admin.Title>Roles</Admin.Title>
      <Admin.Description>Here is you can manage roles for every users</Admin.Description>

      <Link href='/dashboard/roles/create'>
        <Button className='flex gap-2 my-2'>
          <PlusIcon />
          Create new role
        </Button>
      </Link>

      {flash.success &&
        <Alert className='text-green-600 mb-6'>
          <CheckCircledIcon />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{flash.success}</AlertDescription>
        </Alert>
      }

      <div className='my-5'>
        <Card>
          <CardContent className='p-6'>
            <Table>
              <TableCaption>Roles total {roles.length}</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roles.length < 1 &&
                  <Empty colSpan={3}></Empty>
                }
                {roles.map(role => (
                  <TableRow key={role.id}>
                    <TableCell>{role.id}</TableCell>
                    <TableCell>{role.name}</TableCell>
                    <TableCell className='flex gap-2'>
                      <Button asChild>
                        <Link href={`/dashboard/roles/${role.id}/edit`}>
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
                            <DialogDescription>Wan't to delete role <b>{role.name}</b></DialogDescription>
                          </DialogHeader>
                          <DialogFooter className='sm:justify-start'>
                            <DialogClose asChild>
                              <Button onClick={() => handleDelete(role.id)} variant='destructive'>Delete</Button>
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
      </div>
    </Admin>
  )
}
