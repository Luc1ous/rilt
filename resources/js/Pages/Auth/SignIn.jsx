import React, { useState } from 'react'
import Auth from '@/Layout/Auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Button } from '@/Components/ui/button'

export default function Signin() {
  const { errors } = usePage().props
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  function handleChange(e) {
    setValues(values => ({
      ...values, 
      [e.target.id]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    Inertia.post('/signin', values)
  }

  return (
    <Auth>
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Don't have an account ? <Link href='/signup' className='text-blue-500 underline'>Sign up here</Link></CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className=''>
              <Label htmlFor="email">Email</Label>
              <Input type="text" id="email" value={values.email} onChange={handleChange} placeholder="Email" />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
              )}
            </div>
            <div className='my-2'>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" value={values.password} onChange={handleChange} placeholder="*********" />
              {errors.password && (
                <p className='text-red-500 text-sm mt-1'>{errors.password}</p>
              )}
            </div>
            <Button type="submit">Sign In</Button>
          </form>
        </CardContent>
      </Card>
    </Auth>
  )
}
