import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'

function NavBar() {
  return (
    <div>
        <nav className=" flex flex-row items-end justify-between bg-inherit border-b border-gray-300 border-opacity-30 w-full md:bg-inherit md:border-0 px-[96px] sm:px-[20px] overflow-hidden py-5">
        <h1 className=' font-bold size-[24px]'>CDBJ</h1>
        <Link href={''}  />
        <Link href={''}/>
        <Link href={''} />
        <Sheet>
          <SheetTrigger><Menu className='' /></SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[440px]">
            <SheetHeader>
              <SheetTitle>CDBJ</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

export default NavBar
