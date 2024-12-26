import React from 'react'

// interface ImageProps {
//     className?: any;
//     src: string;
//     alt?: any;
//   }


const ImageComponent = ({src, alt, className}: {src: string, alt: string, className?: string}) => {
    console.log(src);
    
  return (
    
    <div>
      <img src={src} alt={alt} className={className}/>
    </div>
  )
}

export default ImageComponent
