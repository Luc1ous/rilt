import React, { useState } from 'react'
import Admin from '@/Layout/Admin'
import { Card, CardContent } from '@/Components/ui/card'
import { Label } from '@/Components/ui/label'
import { Input } from '@/Components/ui/input'
import { Button } from '@/Components/ui/button'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'

export default function Create() {
  const { errors } = usePage().props
  const [values, setValues] = useState({
    name: ''
  })

  function handleChange(e) {
    setValues(values => ({
      ...values, 
      [e.target.id]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    Inertia.post('/dashboard/roles', values)
  }
  return (
    <Admin>
      <Admin.Title>Create role</Admin.Title>
      <Admin.Description>Here you can create role</Admin.Description>

      <Card className='my-4'>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='my-4'>
              <Label htmlFor='name'>Name</Label>
              <Input type='text' id='name' value={values.name} onChange={handleChange} className={errors.name ? 'border-red-500' : ''} />
              {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name}</p>}
            </div>
            <Button type='submit'>Create</Button>
          </form>
        </CardContent>
      </Card>
    </Admin>
  )
}
