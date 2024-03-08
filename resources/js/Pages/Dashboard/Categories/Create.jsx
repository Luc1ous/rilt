import React from 'react'
import Admin from '@/Layout/Admin'
import { Card, CardContent } from '@/Components/ui/card'
import { Label } from '@/Components/ui/label'
import { Input } from '@/Components/ui/input'
import { Textarea } from '@/Components/ui/textarea'
import { Button } from '@/Components/ui/button'
import { useForm } from '@inertiajs/inertia-react'
import { useToast } from '@/Components/ui/use-toast'

export default function Create({ errors }) {
  const { toast } = useToast()
  const { data, setData, post } = useForm({
    image: '',
    name: '',
    description: '',
  })

  function submit(e) {
    e.preventDefault()
    post('/dashboard/categories', {
      onSuccess: () => toast({ title: 'Success', description: 'Category created successfully' })
    })
  }

  return (
    <Admin>
      <Admin.Title>Create Category</Admin.Title>
      <Admin.Description>Here you can create category</Admin.Description>

      <Card className='my-4'>
        <CardContent>
          <form onSubmit={submit}>
            <div className="my-4">
              <Label htmlFor='image'>Image</Label>
              <Input id='image' className={errors.image ? 'border-red-500' : ''} type='file' onChange={e => setData('image', e.target.files[0])} />
              {errors.image && <p className='text-red-500 text-xs mt-1'>{errors.image}</p>}
            </div>
            <div className='my-4'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' className={errors.name ? 'border-red-500' : ''} value={data.name} onChange={e => setData('name', e.target.value)} placeholder='Laravel' />
              {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name}</p>}
            </div>
            <div className='my-4'>
              <Label htmlFor='description'>Description</Label>
              <Textarea id='description' className={errors.description ? 'border-red-500' : ''} value={data.description} onChange={e => setData('description', e.target.value)} placeholder='lorem'></Textarea>
              {errors.description && <p className='text-red-500 text-xs mt-1'>{errors.description}</p>}
            </div>
            <Button type='submit'>Create</Button>
          </form>
        </CardContent>
      </Card>
    </Admin>
  )
}
