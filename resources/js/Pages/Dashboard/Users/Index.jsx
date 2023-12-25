import React from 'react'
import Admin from '@/Layout/Admin'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Card, CardContent } from '@/Components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu'
import { Button } from '@/Components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/Components/ui/alert'
import { CheckCircledIcon } from '@radix-ui/react-icons'

export default function Index({ users, roles }) {
  const { flash } = usePage().props
  return (
    <Admin>
      <Admin.Title>Users</Admin.Title>
      <Admin.Description>Here you can manage users role</Admin.Description>

      {flash.success && (
        <Alert className='text-green-600'>
          <CheckCircledIcon />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{flash.success}</AlertDescription>
        </Alert>
      )}

      <Card className='my-4'>
        <CardContent>
          <Table>
            <TableCaption>Users total {users.data.length}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.data.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant='secondary'>Change role</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {roles.map(role => (
                          <Link key={role.id} href={`/dashboard/users/${user.id}/assign/${role.id}`}>
                            <DropdownMenuItem className='cursor-pointer'>
                              {role.name}
                            </DropdownMenuItem>
                          </Link>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
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
