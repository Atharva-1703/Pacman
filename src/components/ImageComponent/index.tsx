import React from 'react'



const ImageComponent = ({src, alt, className}: {src: string, alt: string, className?: string}) => {
    
    
  return (
    
    <div>
      <img src={src} alt={alt} className={className}/>
    </div>
  )
}

export default ImageComponent
