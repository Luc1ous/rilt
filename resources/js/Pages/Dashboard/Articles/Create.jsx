import React, { useState } from 'react'
import Admin from '@/Layout/Admin'
import { Card, CardContent } from '@/Components/ui/card'
import { Label } from '@/Components/ui/label'
import { Input } from '@/Components/ui/input'
import { Button } from '@/Components/ui/button'
import { Textarea } from '@/Components/ui/textarea'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'

export default function Create({ categories }) {
  const { errors } = usePage().props
  const [values, setValues] = useState({
    title: '',
    category_id: '',
    body: ''
  })

  function handleChange(e) {
    setValues(values => ({
      ...values, 
      [e.target.id]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    Inertia.post('/dashboard/articles', values)
  }
  return (
    <Admin>
      <Admin.Title>Create Article</Admin.Title>
      <Admin.Description>Let's create an awesome article to read.</Admin.Description>

      <Card className='my-6'>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='my-4'>
              <Label htmlFor='id'>Title</Label>
              <Input type='text' className={errors.title ? 'border-red-500' : ''} id='title' value={values.title} onChange={handleChange} placeholder='How to Install Laravel' />
              {errors.title && <p className='text-red-500 text-xs mt-1'>{errors.title}</p>}
            </div>
            <div className='my-4'>
              <Label>Category</Label>
              <select defaultValue={1} onChange={handleChange} id='category_id' className="py-2 px-3 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                {categories.map((category, index) => (
                  <option key={index} value={category.id}>{category.name}</option>
                ))}
              </select>
              {errors.category_id && <p className='text-red-500 text-xs mt-1'>{errors.category_id}</p>}
            </div>
            <div className="my-4">
              <Label>Body</Label>
              <Textarea id='body' className={errors.body ? 'border-red-500' : ''} value={values.body} onChange={handleChange} placeholder='Type your content here...'></Textarea>
              {errors.body && <p className='text-red-500 text-xs mt-1'>{errors.body}</p>}
            </div>
            <Button type='submit'>Create</Button>
          </form>
        </CardContent>
      </Card>
    </Admin>
  )
}
