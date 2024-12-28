import React from 'react'
import ImageComponent from './ImageComponent'

const GamePage = () => {
  return (
    
     <div className='relative pt-2 w-full h-screen '>
        <ImageComponent src='/resources/images/bg.png' alt='bg' className=''/>
        {/* Utilities */}
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

        <div id='question' className='absolute h-[156px] w-[323px] left-[35px] top-[165px] bg-[#0058fd] rounded-[20px]'></div>


        <div id="pac" className='absolute  left-[37px] top-[590px]'>
            <ImageComponent src='/resources/images/pacman.png' alt='pac' className='w-[44px] h-[44px]' />
        </div>
        <div id="option1" className=''>
            <ImageComponent src='/resources/images/pacHouse.png' alt='Pac House' className='absolute w-[92px] h-[94px] -scale-x-100 top-[470px]' />
        </div>
        <div id="option2" className=''>
            <ImageComponent src='/resources/images/pacHouse.png' alt='Pac House' className='absolute w-[92px] h-[94px] top-[479px] right-0' />
        </div>
        <div id="option3" className=''>
            <ImageComponent src='/resources/images/pacHouse.png' alt='Pac House' className='absolute w-[92px] h-[94px] -scale-x-100 bottom-[15px] left-0' />
        </div>
        <div id="option4" className=''>
            <ImageComponent src='/resources/images/pacHouse.png' alt='Pac House' className='absolute w-[92px] h-[94px] bottom-[15px] right-0' />
        </div>
     </div> 
    
  )
}

export default GamePage
