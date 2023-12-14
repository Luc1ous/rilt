import { Link } from '@inertiajs/inertia-react'
import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'
import React from 'react'

export default function Pagination({ data }) {
  return (
    <div className='w-full flex justify-center items-center gap-8'>

      <div className='flex justify-center items-center gap-2'>

        <div className='p-2 bg-gray-50 border border-gray-200 hover:bg-gray-100  rounded-md'>
          {data.current_page === 1 ? 
            (<span className='text-gray-600'><DoubleArrowLeftIcon /></span>) : 
            (<Link href={data.first_page_url} preserveScroll><DoubleArrowLeftIcon /></Link>)
          }
        </div>

        <div className='p-2 bg-gray-50 border border-gray-200 hover:bg-gray-100  rounded-md'>
          {data.prev_page_url ? 
            (<Link href={data.prev_page_url} preserveScroll><ChevronLeftIcon /></Link>) : 
            (<span className='text-gray-600'><ChevronLeftIcon /></span>)
          }
        </div>

      </div>

      <div>
        <b>{data.current_page}</b> / <span>{data.last_page}</span>
      </div>

      <div className='flex justify-center items-center gap-2'>

        <div className='p-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-md'>
          {data.next_page_url ? 
            (<Link href={data.next_page_url} preserveScroll><ChevronRightIcon /></Link>) : 
            (<span className='text-gray-600'><ChevronRightIcon /></span>)
          }
        </div>

        <div className='p-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-md'>
          {data.current_page !== data.last_page ? 
            (<Link href={data.last_page_url} preserveScroll><DoubleArrowRightIcon /></Link>) : 
            (<span className='text-gray-600'><DoubleArrowRightIcon /></span>)
          }
        </div>

      </div>
    </div>
  )
}
