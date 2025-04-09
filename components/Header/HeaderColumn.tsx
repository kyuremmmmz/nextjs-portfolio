import React from 'react'
import { HeaderType } from '@/types/HeaderTypes'

function HeaderColumn({title, title2}: HeaderType) {
  return (
    <div data-aos="fade-right" className="flex flex-col px-[20px]">
                  <div className="flex flex-col lg:gap-0">
                      <div className="flex flex-col lg:gap-0">
                          <div className='flex flex-col flex-wrap gap-0 lg:gap-0 lg:pb-0'>
                              <h1 className="text-center  md:text-start text-[38px] md:text-[96px] font-bold">{title}</h1>
                              <h1 className="text-center md:text-start text-[38px] text-[#00ADB5] md:text-[96px] font-bold">{ title2 }</h1>
                          </div>
                      </div>
                  </div>
    </div>
  )
}

export default HeaderColumn
