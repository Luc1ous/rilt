import { Button } from '@/Components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu'
import { Head, Link, usePage } from '@inertiajs/inertia-react'
import { ArchiveIcon, CardStackPlusIcon, ClipboardIcon, DashboardIcon, ExitIcon, HomeIcon, LockOpen1Icon, MixIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons'
import React from 'react'

export default function Admin({ children, title }) {
  const { url } = usePage()
  const { auth } = usePage().props
  return (
    <>
      <Head>
        <title>{title ?? 'Dashboard'}</title>
      </Head>

      <div className="bg-gray-50 dark:bg-slate-900">

        <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
          <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
            <div className="me-5 lg:me-0 lg:hidden">
              <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">RILT</a>
            </div>

            <div className="w-full flex items-center justify-end ms-auto sm:gap-x-3 sm:order-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {auth.user.avatar ?
                    (<img className='w-12 h-12 rounded-full cursor-pointer' src={auth.user.avatar} />) : (<div className='w-12 h-12 bg-gray-200 rounded-full cursor-pointer'></div>)
                  }
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Signed in as {auth.user.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className='flex justify-start gap-4'>
                    <a href='/' className='flex justify-start items-center gap-4'>
                      <HomeIcon />
                      Homepage
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link className='text-red-600 flex justify-start items-center gap-4'>
                      <ExitIcon />
                      Logout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </header>

        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center py-4">
            <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
              <span className="sr-only">Toggle Navigation</span>
              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
            </button>
          </div>
        </div>

        <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-6">
            <a className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">RILT</a>
          </div>

          <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
            <ul className="space-y-2">
              <li>
                <Link className={`${url === '/dashboard' ? 'bg-gray-100' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`} href="/dashboard">
                  <DashboardIcon />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className={`${url.startsWith('/dashboard/articles') ? 'bg-gray-100' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`} href="/dashboard/articles">
                  <ClipboardIcon />
                  Articles
                </Link>
              </li>
              {auth.user.role.includes('Super Admin') && (
                <>
                  <p className='my-8 text-xs text-gray-600 px-2.5'>Super Admin</p>
                  <li>
                    <Link className={`${url.startsWith('/dashboard/draft') ? 'bg-gray-100' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`} href="/dashboard/draft">
                      <ArchiveIcon />
                      Draft Articles
                    </Link>
                  </li>
                  <li>
                    <Link className={`${url.startsWith('/dashboard/published') ? 'bg-gray-100' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`} href="/dashboard/published">
                      <CardStackPlusIcon />
                      Published Articles
                    </Link>
                  </li>
                  <li>
                    <Link className={`${url.startsWith('/dashboard/categories') ? 'bg-gray-100' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`} href="/dashboard/categories">
                      <MixIcon />
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link className={`${url.startsWith('/dashboard/users') ? 'bg-gray-100' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`} href="/dashboard/users">
                      <PersonIcon />
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link className={`${url.startsWith('/dashboard/roles') ? 'bg-gray-100' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`} href="/dashboard/roles">
                      <RocketIcon />
                      Roles
                    </Link>
                  </li>
                  <li>
                    <Link className={`${url.startsWith('/dashboard/permissions') ? 'bg-gray-100' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`} href="/dashboard/permissions">
                      <LockOpen1Icon />
                      Permissions
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>

        <div className="w-full min-h-screen pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
          <header>
            {children}
          </header>
        </div>

      </div>
    </>
  )
}

function Title({ children }) {
  return (
    <h2 className='text-2xl font-bold'>{children}</h2>
  )
}

function Description({ children }) {
  return (
    <p className='text-sm text-gray-600 leading-loose'>{children}</p>
  )
}

Admin.Title = Title
Admin.Description = Description
