import { ButtonType } from '@/types/Buttontype'
import React from 'react'

function Button({componentName, componentFunction}: ButtonType) {
  return (
    <div className="relative">
      <div className="absolute bg-[#00ADB5] rounded-3xl w-[129px] h-[47px] text-center items-center py-3 cursor-pointer">
        <button className=' cursor-pointer w-full h-full' onClick={componentFunction}>{ componentName }</button>
      </div>
    </div>
  )
}

export default Button
