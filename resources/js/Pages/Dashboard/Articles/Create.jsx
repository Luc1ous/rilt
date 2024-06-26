import React, { useState } from 'react'
import Admin from '@/Layout/Admin'
import { Card, CardContent } from '@/Components/ui/card'
import { Label } from '@/Components/ui/label'
import { Input } from '@/Components/ui/input'
import { Button } from '@/Components/ui/button'
import { Textarea } from '@/Components/ui/textarea'
import { Inertia } from '@inertiajs/inertia'
import { useForm, usePage } from '@inertiajs/inertia-react'
import { useToast } from '@/Components/ui/use-toast'

export default function Create({ categories }) {
  const { errors } = usePage().props
  const { toast } = useToast()
  const { data, setData, post, processing } = useForm({
    thumbnail: '',
    title: '',
    category_id: '',
    body: ''
  })

  function submit(e) {
    e.preventDefault()
    post('/dashboard/articles', {
      onSuccess: () => toast({ title: "Success", description: "Article created successfully" })
    })
  }

  return (
    <Admin>
      <Admin.Title>Create Article</Admin.Title>
      <Admin.Description>Let's create an awesome article to read.</Admin.Description>

      <Card className='my-6'>
        <CardContent>
          <form onSubmit={submit}>
            <div className="my-4">
              <Label htmlFor='thumbnail'>Thumbnail</Label>
              <Input id='thumbnail' className={errors.image ? 'border-red-500' : ''} type='file' onChange={e => setData('thumbnail', e.target.files[0])} />
              {errors.thumbnail && <p className='text-red-500 text-xs mt-1'>{errors.thumbnail}</p>}
            </div>
            <div className='my-4'>
              <Label htmlFor='id'>Title</Label>
              <Input type='text' className={errors.title ? 'border-red-500' : ''} id='title' value={data.title} onChange={e => setData('title', e.target.value)} placeholder='How to Install Laravel' />
              {errors.title && <p className='text-red-500 text-xs mt-1'>{errors.title}</p>}
            </div>
            <div className='my-4'>
              <Label>Category</Label>
              <select defaultValue={0} onChange={e => setData('category_id', e.target.value)} id='category_id' className="py-2 px-3 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                <option value={0} disabled >Select category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.id}>{category.name}</option>
                ))}
              </select>
              {errors.category_id && <p className='text-red-500 text-xs mt-1'>{errors.category_id}</p>}
            </div>
            <div className="my-4">
              <Label>Body</Label>
              <Textarea id='body' rows={10} className={errors.body ? 'border-red-500' : ''} value={data.body} onChange={e => setData('body', e.target.value)} placeholder='Type your content here...'></Textarea>
              {errors.body && <p className='text-red-500 text-xs mt-1'>{errors.body}</p>}
            </div>
            <Button disabled={processing} type='submit'>Create</Button>
          </form>
        </CardContent>
      </Card>
    </Admin>
  )
}
