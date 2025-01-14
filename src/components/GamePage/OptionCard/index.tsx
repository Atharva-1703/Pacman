import { useEffect, useState } from 'react'
import ImageComponent from '../../ImageComponent'

const OptionCard = ({ optionClass, option, id, imageInvert }: { optionClass?: string, option?: string, id?: string, imageInvert?: boolean }) => {
  const [fontSize, setFontSize] = useState(18); // Default font size

  useEffect(() => {
    // Adjust font size based on the length of the text
    const length = option ? option.length : 0;
    
    if (length <= 10) {
      setFontSize(14); // Larger font size if the text is short
    } else if (length <= 20) {
      setFontSize(14); // Medium font size for moderate text length
    } else {
      setFontSize(12); // Smaller font size if the text is long
    }
  }, [option]); // Re-run whenever the 'option' changes

  return (
    <div id={id} className={`flex justify-center m-0 p-0  items-center absolute h-auto max-h-[200px] w-auto max-w-[150px] ${optionClass}`}>
      {/* Image background */}
      <ImageComponent
        src="resources/images/option.png"
        alt="option"
        className={`w-full h-auto max-h-[200px] object-contain ${imageInvert ? '-scale-x-100' : ''}`}
      />
      
      <p
        className={`absolute text-center break-words whitespace-normal overflow-hidden font-poppins font-bold leading-[30px]  min-h-[40px] max-h-auto p-2`}
        style={{
          lineHeight: 'normal',
          fontSize: `${fontSize}px`, // Dynamically set the font size
        }}
      >
        {option}
      </p>
    </div>
  )
}

export default OptionCard
