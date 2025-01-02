import React from 'react'
import ImageComponent from '../../ImageComponent'

const OptionCard = ({optionClass,option,id,imageInvert}: {optionClass?: string,option?: string,id?: string ,imageInvert?: boolean}) => {
  return (
    <div id={id}className={`absolute w-[147px] h-[67px] ${optionClass}`}>
      <div className='relative'>

    <ImageComponent src='resources/images/option.png' alt='option' className={` ${imageInvert?'-scale-x-100':''}`}/>
    <p className={`absolute text-center break-words whitespace-normal overflow-hidden inset-0 font-poppins font-bold leading-[30px] flex justify-center items-center`}>
        {option}
      </p>
      </div>
    
    
    
</div>

  )
}

export default OptionCard
