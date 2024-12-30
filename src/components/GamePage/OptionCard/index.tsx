import React from 'react'
import ImageComponent from '../../ImageComponent'

const OptionCard = ({houseClass,optionClass}: {houseClass?: string, optionClass?: string}) => {
  return (
    <div id="option1" className=''>
        <ImageComponent src='resources/images/option.png' alt='option' className={`absolute w-[147px] h-[67px] ${optionClass}`}/>
        <ImageComponent src='resources/images/pacHouse.png'alt='Pac House'className={`absolute w-[92px] h[94px] ${houseClass}`} />
    </div>
  )
}

export default OptionCard
