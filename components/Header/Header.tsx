import React from 'react'
import Bulb from '../Svgs/Bulb'
import Music from '../Svgs/Music'
import { HeaderType } from '@/types/HeaderTypes'

function Header({title, title2}: HeaderType) {
  return (
    <div data-aos="fade-right" className="flex flex-col px-[20px]">
                  <div className="flex flex-col gap-2 lg:gap-8">
                      <div className="flex flex-col gap-2 lg:gap-8">
                          <Music />
                          <div className='flex flex-row gap-2 lg:gap-8 lg:pb-20'>
                              <h1 className="text-center md:text-start text-[40px] md:text-[96px] font-bold">{title}</h1>
                              <h1 className="text-center md:text-start text-[40px] text-[#00ADB5] md:text-[96px] font-bold">{ title2 }</h1>
                              <Bulb />
                          </div>
                      </div>
                  </div>
    </div>
  )
}

export default Header
