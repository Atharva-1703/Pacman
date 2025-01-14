import { useEffect, useRef, useState } from "react";
import { listenForArrowKeys } from "../../components/GamePage/GetKeyComponent";
import {
  handleOption1,
  handleOption2,
  handleOption3,
  handleOption4,
} from "../../components/GamePage/OptionPaths";
import GameView from "../../views/GameView";
import {useQuestions} from "../../components/Questions/index.ts"
import { useNavigate } from "react-router-dom";

const GameContainer = () => {
  const navigate=useNavigate()
  const startOption1 = useRef(false);
  const startOption2 = useRef(false);
  const startOption3 = useRef(false);
  const startOption4 = useRef(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showCherry, setShowCherry] = useState(false);
  const { questions, questionIndex,  moveToNextQuestion } =
    useQuestions();
    const correctOption=useRef(questions[0].correctOptionsIndex);
  const lastKeyPressTime = useRef<number | null>(null);
  const pacRef = useRef<HTMLDivElement | null>(null);
  const movePac = [
    "translate-x-[130px]",
    "translate-x-[190px]",
    "translate-x-[250px]",
  ];
  const questionsSize=questions.length;
  const movIdx=useRef(0);
  useEffect(()=>{
    startOption1.current=false;
    startOption2.current=false;
    startOption3.current=false;
    startOption4.current=false;
    setShowCherry(false);
    setShowMessage(false);
    movIdx.current=0;
    correctOption.current=questions[questionIndex].correctOptionsIndex;
    // console.log("movIdx after" ,movIdx);
    console.log("question no :",questionIndex);
     
    // console.log("correct opt :",correctOption);
    
    
  },[questionIndex])
  const pathMaze = ["path-1", "path-2", "path-3"];

  useEffect(() => {
    const stopListening = listenForArrowKeys((key) => {
      const now = Date.now();

      const timeDiff =
        startOption1.current ||
        startOption2.current ||
        startOption3.current ||
        startOption4.current
          ? 1000 // Delay for specific paths
          : 500;

      if (
        lastKeyPressTime.current === null ||
        now - lastKeyPressTime.current >= timeDiff
      ) {
        lastKeyPressTime.current = now;
        if (key) { 
          if (startOption1.current) {
            handleOption1({
              key,
              pacRef,
              movIdx,
              setShowCherry,
              correctOption:correctOption.current,
              setShowMessage,
              moveToNextQuestion,
            });
          } else if (startOption2.current) {
            handleOption2({
              key,
              pacRef,
              movIdx,
              setShowCherry,
              correctOption:correctOption.current,
              setShowMessage,
              moveToNextQuestion,
            });
          } else if (startOption3.current) {
            handleOption3({
              key,
              pacRef,
              movIdx,
              setShowCherry,
              correctOption:correctOption.current,
              setShowMessage,
              moveToNextQuestion,
            });
          } else if (startOption4.current) {
            handleOption4({
              key,
              pacRef,
              movIdx,
              setShowCherry,
              correctOption:correctOption.current,
              setShowMessage,
              moveToNextQuestion,
            });
          } else {
            handleCommonPath(key);
          }
        }
      }
    });

    return () => stopListening();
  }, []);

  const handleCommonPath = (key: string) => {
    if (pacRef.current && key === "ArrowRight" && movIdx.current < movePac.length) {
      if (movIdx.current > 0) {
        pacRef.current.classList.remove(movePac[movIdx.current - 1]);
      } else {
        pacRef.current.classList.remove("translate-x-[50px]");
      }
      pacRef.current.classList.add(movePac[movIdx.current]);
      document
        .getElementById(pathMaze[movIdx.current])
        ?.classList.add("animate-fadeOut");
      movIdx.current++;
    } else if (
      pacRef.current &&
      key === "ArrowDown" &&
      movIdx.current <= movePac.length
    ) {
      if (movIdx.current === 0) {
        startOption1.current = true;
        handleOption1({
          key,
          pacRef,
          movIdx,
          setShowCherry,
          correctOption:correctOption.current,
          setShowMessage,
          moveToNextQuestion,
        });
      }
      if (movIdx.current === 3) {
        startOption4.current = true;
        handleOption4({
          key,
          pacRef,
          movIdx,
          setShowCherry,
          correctOption:correctOption.current,
          setShowMessage,
          moveToNextQuestion,
        });
      }
    } else if (pacRef.current && key === "ArrowUp" && movIdx.current < movePac.length) {
      if (movIdx.current === 1) {
        startOption2.current = true;
        handleOption2({
          key,
          pacRef,
          movIdx,
          setShowCherry,
          correctOption:correctOption.current,
          setShowMessage,
          moveToNextQuestion,
        });
      }
      if (movIdx.current === 2) {
        startOption3.current = true;
        handleOption3({
          key,
          pacRef,
          movIdx,
          setShowCherry,
          correctOption:correctOption.current,
          setShowMessage,
          moveToNextQuestion,
        });
      }
    }
  };

  useEffect(() => {
    if (questionIndex >= 3) {
      navigate("/result");
    }
  }, [questionIndex, navigate]);
  

  return (
    questionIndex<3&&
    <GameView
      key={questionIndex}
      showMessage={showMessage}
      showCherry={showCherry}
      pacRef={pacRef}
      question={questions[questionIndex].question}
      options={questions[questionIndex].options}
    />
  );
};

export default GameContainer;
