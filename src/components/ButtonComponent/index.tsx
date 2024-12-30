import React from 'react'

interface buttonProps{
    handleFunction: () => void,
    id?:string,
    className?:string,
    text:string
}

const ButtonComponent:React.FC<buttonProps> = ({handleFunction, id, className, text}) => {
  return (
    <button
        id={id}
        className={`font-seymour rounded-[20px] bg-[#0058fd] absolute flex justify-center items-center font-normal text-2xl text-white transition-all duration-1000 ease-linear  ${className}`}
        onClick={handleFunction}
      >
        {/* ] */}
        {text}
      </button>
  )
}

export default ButtonComponent
