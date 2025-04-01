import { ButtonType } from '@/types/Buttontype'
import React from 'react'

function Button({componentName, componentFunction, className}: ButtonType) {
  return (
    <div className="relative">
      <div className={className}>
        <button className=' cursor-pointer w-full h-full font-bold' onClick={componentFunction}>{ componentName }</button>
      </div>
    </div>
  )
}

export default Button
