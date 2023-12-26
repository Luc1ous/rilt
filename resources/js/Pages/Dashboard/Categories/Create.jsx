import React, { useState } from 'react'
import Admin from '@/Layout/Admin'
import { Card, CardContent } from '@/Components/ui/card'
import { Label } from '@/Components/ui/label'
import { Input } from '@/Components/ui/input'
import { Textarea } from '@/Components/ui/textarea'
import { Button } from '@/Components/ui/button'
import { Inertia } from '@inertiajs/inertia'

export default function Create() {
  const [values, setValues] = useState({
    name: '',
    description: ''
  })

  function handleChange(e) {
    setValues(values => ({
      ...values,
      [e.target.id]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    Inertia.post('/dashboard/categories', values)
  }
  return (
    <Admin>
      <Admin.Title>Create Category</Admin.Title>
      <Admin.Description>Here you can create category</Admin.Description>

      <Card className='my-4'>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='my-4'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' value={values.name} onChange={handleChange} placeholder='Laravel' />
            </div>
            <div className='my-4'>
              <Label htmlFor='description'>Description</Label>
              <Textarea id='description' value={values.description} onChange={handleChange} placeholder='lorem'></Textarea>
            </div>
            <Button type='submit'>Create</Button>
          </form>
        </CardContent>
      </Card>
    </Admin>
  )
}
