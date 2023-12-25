import React, { useState } from 'react'
import Admin from '@/Layout/Admin'
import { Card, CardContent } from '@/Components/ui/card'
import { Label } from '@/Components/ui/label'
import { Input } from '@/Components/ui/input'
import { Button } from '@/Components/ui/button'
import { Inertia } from '@inertiajs/inertia'

export default function Edit({ role }) {
  const [values, setValues] = useState({
    name: role.name
  })

  function handleChange(e) {
    setValues(values => ({
      ...values, 
      [e.target.id]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    Inertia.put(`/dashboard/roles/${role.id}`, values)
  }

  return (
    <Admin>
      <Admin.Title>Edit role</Admin.Title>
      <Admin.Description>Here you can edit role</Admin.Description>

      <Card className='my-4'>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <Label>Name</Label>
              <Input type='text' id='name' value={values.name} onChange={handleChange} />
            </div>
            <Button>Update</Button>
          </form>
        </CardContent>
      </Card>
    </Admin>
  )
}
