import { Head, Link, usePage } from '@inertiajs/inertia-react'
import { ClipboardIcon, DashboardIcon, LockOpen1Icon, MixIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons'
import React from 'react'

export default function Admin({ children, title }) {
  const { url } = usePage()
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

              <div className="flex flex-row items-center justify-end gap-2">
                <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                  <button id="hs-dropdown-with-header" type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800" src="https://plus.unsplash.com/premium_photo-1687710306899-10a3bfcacf9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-with-header">
                    <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-300">james@site.com</p>
                    </div>
                    <div className="mt-2 py-2 first:pt-0 last:pb-0">
                      <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                        Newsletter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center py-4">
            <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
              <span className="sr-only">Toggle Navigation</span>
              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>

        <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-6">
            <a className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">RILT</a>
          </div>

          <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
            <ul className="space-y-1.5">
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
