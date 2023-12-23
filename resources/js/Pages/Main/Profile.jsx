import React from 'react'
import Default from '@/Layout/Default'
import { usePage } from '@inertiajs/inertia-react'
import { Card } from '@/Components/ui/card'
import { Button } from '@/Components/ui/button'
import { Link } from '@inertiajs/inertia-react'
import { ExternalLinkIcon } from '@radix-ui/react-icons'

export default function Profile() {
  const { auth } = usePage().props
  return (
    <Default>
      <div className='max-w-4xl mx-auto my-12'>
        <Card className='p-8'>
          <div className='w-full flex justify-end'>
            <Link href={`/profile/edit/${auth.user.username}`}>
              <Button variant='secondary' className='gap-2'>
                <ExternalLinkIcon />
                Edit Profile
              </Button>
            </Link>
          </div>

          <div className='mt-6 flex relative flex-col items-center'>
            <div className="w-full">
              <img className='w-full h-32 md:h-64 aspect-video rounded-lg' src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='flex justify-center items-center'>
              <img className="w-20 h-20 bg-gray-700 rounded-full absolute -bottom-8 ring-white ring-4" src={auth.user.avatar} alt="" />
            </div>
          </div>

          <div className='text-center my-12'>
            <h3 className='text-xl font-medium'>{auth.user.fullname}</h3>
            <p className='line-clamp-2 text-sm text-gray-600 leading-relaxed'>Junior Web Developer</p>
          </div>

          <div className='mt-10'>
            <h2 className='text-xl font-semibold'>Your latest articles</h2>
            <div className='mt-8 flex items-center gap-4 flex-wrap lg:flex-nowrap'>
              <img className='w-full h-full rounded-md basis-2/3' src="https://images.unsplash.com/photo-1701962541409-e2c1256a8574?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
              <div>
                <h2 className='text-base font-semibold line-clamp-1'>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolore.</h2>
                <p className='text-sm text-gray-600 line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quaerat ducimus corporis explicabo delectus consequatur veniam culpa illum? Nam doloribus explicabo rerum voluptate vero veniam maiores neque aspernatur! Distinctio repudiandae consectetur iusto quidem eveniet quos soluta tempore aliquam neque non?</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Default>
  )
}
