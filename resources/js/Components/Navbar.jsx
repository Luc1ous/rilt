import React, { useState } from 'react'
import { Link } from '@inertiajs/inertia-react'
import { usePage } from '@inertiajs/inertia-react'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
  Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Inertia } from '@inertiajs/inertia'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { url } = usePage()
  const { auth } = usePage().props

  function toggleMenu(e) {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  function handleLogout(e) {
    e.preventDefault()
    Inertia.post('/logout')
  }

  return (
    <div className='w-full z-50 sticky top-0 py-6 container bg-white shadow-md'>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
        <div className='flex justify-between items-center'>
          <h4 className='text-2xl font-medium'>Laravel blog</h4>
          <button className='lg:hidden' onClick={toggleMenu}>
            {!isOpen ? <HamburgerMenuIcon /> : <Cross1Icon />}
          </button>
        </div>
        <ul className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row mt-3 lg:mt-0 gap-2 lg:gap-6`}>
          <Link href='/' className={url === '/' ? 'text-fuchsia-600' : 'text-gray-600 hover:text-fuchsia-600'}>Home</Link>
          <Link href='/articles' className={url.startsWith('/articles') ? 'text-fuchsia-600' : 'text-gray-600 hover:text-fuchsia-600'}>Articles</Link>
          <Link href='/categories' className={url.startsWith('/categories') ? 'text-fuchsia-600' : 'text-gray-600 hover:text-fuchsia-600'}>Categories</Link>
          {auth.user && (
            <>
              <Dialog>
                <DialogTrigger className='flex sm:justify-start text-gray-600 hover:text-red-600'>Logout</DialogTrigger>
                <DialogContent className=''>
                  <DialogHeader>
                    <DialogTitle>Are you sure want to logout ?</DialogTitle>
                    <DialogDescription>
                      This action will logged you out from your account.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className='sm:justify-start'>
                    <Button onClick={handleLogout} variant='destructive' className=''>Logout</Button>
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Cancel
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          )}
        </ul>
        <ul className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row mt-2 lg:mt-0 gap-2 lg:gap-6`}>
          {auth.user ? (
            <DropdownMenu>
              <div className='inline-flex justify-start'>
                <DropdownMenuTrigger asChild>
                  <div className='flex justify-start'>
                    <Button variant="outline">{auth.user.name}</Button>
                  </div>
                </DropdownMenuTrigger>
              </div>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href='/profile'>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href='/dashboard'>Dashboard</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href='/signin' className='text-gray-600 hover:text-fuchsia-600'>Sign In</Link>
              <Link href='/signup' className='text-gray-600 hover:text-fuchsia-600'>Sign Up</Link>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}
