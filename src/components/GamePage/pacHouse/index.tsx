import React from 'react'
import ImageComponent from '../../ImageComponent'


const PacHouse = ({houseClass}:{houseClass?: string
}) => {
  return (
    <ImageComponent
        src='resources/images/pacHouse.png' 
        alt='Pac House' 
        className={`absolute w-[92px] h-[94px] ${houseClass}`} 
      />
  )
}

export default PacHouse
