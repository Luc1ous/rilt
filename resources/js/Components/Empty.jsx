import React from 'react'
import { TableCell } from './ui/table'

export default function Empty() {
  return (
    <TableCell colSpan='4' className='text-center'>
      <img className='max-w-sm mx-auto' src={'/assets/empty.png'} alt="" />
      Articles empty
    </TableCell>
  )
}
