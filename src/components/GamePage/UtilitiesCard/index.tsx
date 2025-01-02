import React from 'react'
import ImageComponent from '../../ImageComponent'

const UtilitiesCard = () => {
  return (
    <div id='utilities'>
        <div id='coins' className='bg-[#88F0C8] w-[65px] h-[30px] rounded-[20px] text-center absolute right-1 top-2 items-center flex justify-center'>
          <ImageComponent src='/resources/images/coin.png' alt='coin' className='w-[16px] h-[23px] '/>  
        50
        </div>
        <div>
            <ImageComponent src='/resources/images/hint.png' alt='hint icon' className='absolute mt-2 right-1  w-[50px] top-[36px]'/>
            <ImageComponent src='/resources/images/powerup.png' alt='hint icon' className='absolute mt-2 right-1  w-[50px] top-[86px]'/>
        </div>
        </div>
  )
}

export default UtilitiesCard
