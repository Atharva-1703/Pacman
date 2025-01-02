import React from 'react'

const QuestionCard = ({question}: {question: string}) => {
  return (
    <div className="absolute h-[156px] w-[323px] left-[35px] top-[165px] bg-[#0058fd] text-white rounded-[20px] flex justify-center items-center font-poppins font-bold leading-[30px] px-2">
    <p className="text-center break-words whitespace-normal overflow-hidden ">
        {question}
    </p>
</div>


  )
}

export default QuestionCard
