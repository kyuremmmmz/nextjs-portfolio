'use client'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { usePathname } from 'next/navigation'

function NavBar() {
  const path = usePathname();
  return (
    <div>
        <nav className=" flex flex-row items-end justify-between bg-inherit border-b border-gray-300 border-opacity-30 w-full md:bg-inherit  px-[20px] lg:px-[296px] sm:px-[20px] overflow-hidden py-5">
        <h1 className=' font-bold size-[24px]'>CDBJ</h1>
        <div className='hidden sm:flex flex-row gap-8'>
          <Link href={''} className={path == `/` ? '' : ''}>Home</Link>
          <Link href={''} className={path == `/` ? '' : ''}>About</Link>
          <Link href={''} className={path == `/` ? '' : ''}>Skills</Link>
          <Link href={''} className={path == `/` ? '' : ''}>Projects</Link>
          <Link href={''} className={path == `/` ? '' : ''}>Testimonials</Link>
          <Link href={''} className={path == `/` ? '' : ''}>Blogs</Link>
        </div>
        <div className='lg:hidden'>
          <Sheet>
            <SheetTrigger><Menu className='' /></SheetTrigger>
            <SheetContent className="w-[200px] sm:w-[250px]">
              <SheetHeader>
                <SheetTitle className=' text-white font-bold'>CDBJ</SheetTitle>
              </SheetHeader>
              <div className=' flex flex-col px-4 gap-5'>
                <Link href={''} className={path == `/` ? ' w-full bg-inherit hover:bg-blue-300' : ' w-full hover:bg-blue-300'}>Home</Link>
                <Link href={''} className={path == `/` ? ' w-full bg-inherit hover:bg-blue-300' : ' w-full hover:bg-blue-300'}>About</Link>
                <Link href={''} className={path == `/` ? ' w-full bg-inherit hover:bg-blue-300' : ' w-full hover:bg-blue-300'}>Skills</Link>
                <Link href={''} className={path == `/` ? ' w-full bg-inherit hover:bg-blue-300' : ' w-full hover:bg-blue-300'}>Projects</Link>
                <Link href={''} className={path == `/` ? ' w-full bg-inherit hover:bg-blue-300' : ' w-full hover:bg-blue-300'}>Testimonials</Link>
                <Link href={''} className={path == `/` ? ' w-full bg-inherit hover:bg-blue-300' : ' w-full hover:bg-blue-300'}>Blogs</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
