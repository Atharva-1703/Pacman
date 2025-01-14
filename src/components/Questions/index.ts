import { useRef, useState } from "react";
import sample from "../../sample.json";


export const useQuestions = () => {
  const questions = sample.data.questions;
  const [questionIndex, setQuestionIndex] = useState(0);
  const correctOption=useRef(questions[0].correctOptionsIndex);
  const correctCount=useRef(0);
  const wrongCount=useRef(0);


  const moveToNextQuestion = () => {
      correctOption.current = questions[questionIndex + 1].correctOptionsIndex;
      setQuestionIndex((prev) => prev + 1);
  };

  return {
    questions,
    questionIndex,
    correctOption,
    correctCount,
    wrongCount,
    moveToNextQuestion,
  };
};
