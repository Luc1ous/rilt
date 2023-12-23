import React from 'react'
import Admin from '@/Layout/Admin'
import { Card, CardContent, CardHeader } from '@/Components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'

export default function Index({ roles }) {
  return (
    <Admin>
      <Admin.Title>Roles</Admin.Title>
      <Admin.Description>Here is you can manage roles for every users</Admin.Description>

      <div className='my-8'>
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
                {roles.map(role => (
                  <TableRow key={role.id}>
                    <TableCell>{role.id}</TableCell>
                    <TableCell>{role.name}</TableCell>
                    <TableCell></TableCell>
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
