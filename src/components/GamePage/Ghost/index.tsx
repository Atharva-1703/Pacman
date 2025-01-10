import React from 'react'
import ImageComponent from '../../ImageComponent'

const Ghost = () => {
  return (
    <div className="relative">

    <ImageComponent src="/resources/images/red.png" alt='red ghost' className="w-[32px] h-[33px] absolute left-3 top-1" />
    <ImageComponent src="/resources/images/blue.png" alt='blue ghost' className="w-[38px] h-[37px] " />
    </div>
  )
}

export default Ghost
