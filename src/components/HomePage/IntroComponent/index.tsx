import React from 'react'
import ImageComponent from '../../ImageComponent'
import ButtonComponent from '../../ButtonComponent'



const IntroComponent = ({handleFunction}: {handleFunction: () => void}) => {
  return (
    <div
        id="background"
        className="bg-[url(/resources/images/bg.png)] bg-175% w-full h-screen bg-no-repeat relative flex justify-center items-center  overflow-hidden bg-left-bottom transition-opacity duration-1000 ease-linear"
      >
        
        <div
          id="title"
          className="font-porter absolute rounded-[20px] bg-[#0058fd] flex justify-center items-center text-center not-italic font-normal text-5xl text-white w-[452px] h-[252px] top-[0px] right-[-452px] animate-slideIn transition-all duration-1000 ease-linear"
        >
          Pac-man Run
        </div>
        <ButtonComponent id="play" handleFunction={handleFunction} text="Play" className="bottom-[0] z-10 left-[-197px] w-[197px] h-[75px] animate-slideRight" /> 
        
        <div id="dash-line" className="opacity-0">
          <hr
            id="first-dash"
            className="absolute w-[49%] top-[541px] h-0 border-[7.5px] border-dashed border-[#FFEA00] inline left-0"
          />
          <hr
            id="second-dash"
            className="absolute w-[49%] top-[541px] h-0 border-[7.5px] border-dashed border-[#FFEA00] right-0"
          />
        </div>
      </div>
  )
}

export default IntroComponent
