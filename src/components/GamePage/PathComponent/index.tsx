import React from 'react'

const Path = ({id,className}: {id?: string,className?: string}) => {
  return (
    <hr id={id} className={`absolute h-0 inline border-[4px]  border-dashed border-[#FFEA00] transition-opacity duration-1000 ease-linear  ${className}`}/>
  )
}

export default Path
