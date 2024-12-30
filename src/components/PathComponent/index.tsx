import React from 'react'

const Path = ({className}: {className?: string}) => {
  return (
    <hr className={`absolute h-0 inline border-[4px]  border-dashed border-[#FFEA00] ${className}`}/>
  )
}

export default Path
