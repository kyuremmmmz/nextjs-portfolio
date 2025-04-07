'use client'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { usePathname } from 'next/navigation'

function NavBar() {
  const path = usePathname();
  return (
    <nav className="sticky top-0 z-50 flex flex-row items-center justify-between bg-inherit border-b border-gray-300 border-opacity-30 w-full px-5 py-5 md:px-20 lg:px-[296px]">
        <h1 className=' font-bold size-[24px]'>CDBJ</h1>
        <div className='hidden sm:flex flex-row gap-8'>
          <Link href={''} className={path == `/` ? '' : ''}>Home</Link>
        <Link href={'#about'} className={` ${path == `/#about` ? 'hover:border-b-2 border-amber-50 duration-300' : 'border-b-2 border-amber-50'}`}>About</Link>
          <Link href={''} className={path == `/` ? '' : ''}>Skills</Link>
          <Link href={''} className={path == `/` ? '' : ''}>Projects</Link>
          <Link href={''} className={path == `/` ? '' : ''}>Testimonials</Link>
          <Link href={''} className={path == `/` ? '' : ''}>Contact</Link>
        </div>
        <div className='lg:hidden'>
          <Sheet>
            <SheetTrigger><Menu className='' /></SheetTrigger>
            <SheetContent className="w-[200px] sm:w-[250px]">
              <SheetHeader>
                <SheetTitle className=' text-white font-bold'>CDBJ</SheetTitle>
              </SheetHeader>
              <div className=' flex flex-col px-4 gap-5'>
                <Link href={''} className={`w-full py-2 text-left hover:bg-black hover:text-white rounded-md transition-colors duration-200 ${path === '/' ? ' text-white' : 'text-gray-200'}`}>Home</Link>
                <Link href={'#about'} className={`w-full py-2 text-left hover:bg-black hover:text-white rounded-md transition-colors duration-200 ${path === '/' ? ' text-white' : 'text-gray-200'}`}>About</Link>
                <Link href={''} className={`w-full py-2 text-left hover:bg-black hover:text-white rounded-md transition-colors duration-200 ${path === '/' ? ' text-white' : 'text-gray-200'}`}>Skills</Link>
                <Link href={''} className={`w-full py-2 text-left hover:bg-black hover:text-white rounded-md transition-colors duration-200 ${path === '/' ? ' text-white' : 'text-gray-200'}`}>Projects</Link>
                <Link href={''} className={`w-full py-2 text-left hover:bg-black hover:text-white rounded-md transition-colors duration-200 ${path === '/' ? ' text-white' : 'text-gray-200'}`}>Testimonials</Link>
                <Link href={''} className={`w-full py-2 text-left hover:bg-black hover:text-white rounded-md transition-colors duration-200 ${path === '/' ? ' text-white' : 'text-gray-200'}`}>Blogs</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
  )
}

export default NavBar
