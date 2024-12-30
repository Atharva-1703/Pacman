import React from 'react'
import PathMaze from '../../components/PathMazeComponent'
import QuestionCard from '../../components/QuestionCard'
import ImageComponent from '../../components/ImageComponent'
import OptionCard from '../../components/OptionCard'

const GameView = () => {
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

        <QuestionCard  />
        
        <PathMaze/>

        <div id="pac" className='absolute  left-[37px] top-[590px]'>
            <ImageComponent src='/resources/images/pacman.png' alt='pac' className='w-[44px] h-[44px]' />
        </div>
        

        <OptionCard houseClass={'top-[479px] right-0'} optionClass='top-[420px] left-[33px]'/>
        <OptionCard houseClass={'-scale-x-100 top-[470px]'} optionClass='-scale-x-100 top-[430px] right-[20px]'/>
        <OptionCard houseClass={'-scale-x-100 top-[750px] left-[-10px]'} optionClass=' top-[700px] left-[40px]'/>
        <OptionCard houseClass={'top-[750px] right-0'} optionClass='-scale-x-100 top-[740px] right-[60px]'/>
        
     </div> 
  )
}

export default GameView
