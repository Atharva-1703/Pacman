import React from 'react'

interface TextComponentProps {
    id?:string,
    className?:string,
    text:string
}

const TextComponent:React.FC<TextComponentProps> = ({id,className,text}) => {
  return (
    <div id={id} className={`absolute h-auto text-center font-poppins opacity-0 not-italic font-black text-white  transition duration-1000 ease-linear ${className}`}>
      {text}
    </div>
  )
}

export default TextComponent
