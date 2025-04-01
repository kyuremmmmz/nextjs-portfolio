import { ButtonType } from '@/types/Buttontype'
import React from 'react'

function Button({componentName, componentFunction}: ButtonType) {
  return (
    <div className="relative">
      <div className="absolute">
        <button onClick={componentFunction}>{ componentName }</button>
      </div>
    </div>
  )
}

export default Button
