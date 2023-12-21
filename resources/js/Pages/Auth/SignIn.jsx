import React, { useState } from 'react'
import Auth from '@/Layout/Auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { Inertia } from '@inertiajs/inertia'
import { Head, Link, usePage } from '@inertiajs/inertia-react'
import { Button } from '@/Components/ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

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
      <Head>
        <title>Sign In</title>
      </Head>
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
            <Button type="submit" className='w-full bg-sky-500 hover:bg-sky-600'>Sign In</Button>
          </form>
          <div class="py-3 flex items-center text-xs text-gray-600 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-400 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-400 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or Sign In With</div>
          <Button className='flex gap-2 w-full my-2'>
            {/* <GitHubLogoIcon /> */}
            Github
          </Button>
          <Button variant='secondary' className='flex gap-2 w-full my-2'>
            Google
          </Button>
        </CardContent>
      </Card>
    </Auth>
  )
}
