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
      <div className='max-w-4xl mx-auto'>
        <Card className='p-8'>
          <div className='w-full flex justify-end'>
            <Link href={`/profile/edit/${auth.user.username}`}>
              <Button variant='secondary' className='gap-2'>
                <ExternalLinkIcon />
                Edit Profile
              </Button>
            </Link>
          </div>
          <div className='flex flex-wrap md:flex-nowrap items-center gap-4'>

            <div className='md:basis-1/3 lg:basis-1/5'>
              <img className='bg-gray-300 rounded-full w-20 h-20 aspect-auto' src="https://plus.unsplash.com/premium_photo-1702400311588-2f56c9c467a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

            <div className=''>
              <h3 className='text-xl font-medium'>{auth.user.fullname}</h3>
              <p className='line-clamp-2 text-sm text-gray-600 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore laborum numquam quo tenetur nobis repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iusto.</p>
            </div>

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
