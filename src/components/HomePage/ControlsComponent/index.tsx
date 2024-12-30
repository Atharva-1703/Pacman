import React from 'react'
import ImageComponent from '../../ImageComponent'

const ControlsComponent = () => {
  return (
    <div
        id="controls"
        className="absolute top-[110px] left-[140px] w-full transition duration-1000 ease-linear opacity-0"
      >
        <div className="absolute font-poppins text-white font-black text-center top-0 left-0 text-[24px] leading-9">
          Up
          <ImageComponent src="/resources/images/up.png" alt="up" className="w-[88px]" />
        </div>
        <div className="absolute font-poppins text-white font-black text-center top-[150px] left-[85px] text-[24px] leading-9 flex">
          <ImageComponent src="/resources/images/up.png" alt="front" className="w-[88px] rotate-90" />
          <span className="my-auto">Front</span>
        </div>
        <div className="absolute font-poppins text-white font-black text-center top-[270px] left-0 text-[24px] leading-9">
          <ImageComponent src="/resources/images/up.png" alt="down" className="w-[88px] rotate-180" />
          Down
        </div>
      </div>
  )
}

export default ControlsComponent
