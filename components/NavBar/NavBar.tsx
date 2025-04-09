'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React, {  } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import usePath from '@/app/hooks/usePath/usePath';

function NavBar() {
  const { path, pathName  } = usePath();
  console.log('Current path:', path);

  const linkStyles = `
    relative 
    inline-block 
    pb-1 
    text-gray-200 
    hover:text-amber-50 
    transition-colors 
    duration-300 
    ease-in-out
    after:content-[''] 
    after:absolute 
    after:bottom-0 
    after:left-1/2 
    after:h-[2px] 
    after:bg-amber-50 
    after:transform 
    after:-translate-x-1/2 
    after:w-0 
    after:transition-all 
    after:duration-300 
    after:ease-in-out 
    hover:after:w-full
  `;

  return (
    <nav className="sticky top-0 z-50 flex flex-row items-center justify-between bg-inherit border-b border-gray-300 border-opacity-30 w-full px-5 py-5 md:px-20 lg:px-[100px] xl:px-[100px] 2xl:px-[296px]">
      <h1 className="font-bold text-[24px]">CDBJ</h1>

      <div className="hidden sm:flex flex-row gap-8">
        <Link
          onClick={()=> pathName('#home')}
          href="/#home"
          className={`${linkStyles} ${path === '#home' ? 'text-amber-50 after:w-full border-b-1 border-amber-50' : ''}`}
        >
          Home
        </Link>
        <Link
          onClick={() => pathName('#about')}
          href="/#about"
          className={`${linkStyles} ${path === '#about' ? 'text-amber-50 after:w-full border-b-1 border-amber-50' : ''}`}
        >
          About
        </Link>
        <Link
          onClick={() => pathName('#skills')}
          href="/#skills"
          className={`${linkStyles} ${path === '#skills' ? 'text-amber-50 after:w-full border-b-1 border-amber-50' : ''}`}
        >
          Skills
        </Link>
        <Link
          onClick={() => pathName('#projects')}
          href="/#projects"
          className={`${linkStyles} ${path === '#projects' ? 'text-amber-50 after:w-full border-b-1 border-amber-50' : ''}`}
        >
          Projects
        </Link>
        <Link
          onClick={() => pathName('#testimonials')}
          href="/#testimonials"
          className={`${linkStyles} ${path === '#testimonials' ? 'text-amber-50 after:w-full border-b-1 border-amber-50' : ''}`}
        >
          Testimonials
        </Link>
        <Link
          onClick={() => pathName('#home')}
          href="/#contact"
          className={`${linkStyles} ${path === '/#contact' ? 'text-amber-50 after:w-full border-b-1 border-amber-50' : ''}`}
        >
          Contact
        </Link>
      </div>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent className="w-[200px] sm:w-[250px] bg-gray-900">
            <SheetHeader>
              <SheetTitle className="text-white font-bold">CDBJ</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col px-4 gap-5 mt-6">
              <Link
                href="/#home"
                className={`w-full py-2 text-left rounded-md transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-amber-50 ${path === '/#home' ? 'text-amber-50 bg-gray-800' : 'text-gray-200'
                  }`}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className={`w-full py-2 text-left rounded-md transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-amber-50 ${path === '/#about' ? 'text-amber-50 bg-gray-800' : 'text-gray-200'
                  }`}
              >
                About
              </Link>
              <Link
                href="/#skills"
                className={`w-full py-2 text-left rounded-md transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-amber-50 ${path === '/#skills' ? 'text-amber-50 bg-gray-800' : 'text-gray-200'
                  }`}
              >
                Skills
              </Link>
              <Link
                href="/#projects"
                className={`w-full py-2 text-left rounded-md transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-amber-50 ${path === '/#projects' ? 'text-amber-50 bg-gray-800' : 'text-gray-200'
                  }`}
              >
                Projects
              </Link>
              <Link
                href="/#testimonials"
                className={`w-full py-2 text-left rounded-md transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-amber-50 ${path === '/#testimonials' ? 'text-amber-50 bg-gray-800' : 'text-gray-200'
                  }`}
              >
                Testimonials
              </Link>
              <Link
                href="/#contact"
                className={`w-full py-2 text-left rounded-md transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-amber-50 ${path === '/#contact' ? 'text-amber-50 bg-gray-800' : 'text-gray-200'
                  }`}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default NavBar;