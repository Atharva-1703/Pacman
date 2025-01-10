import  { useEffect, useRef, useState } from "react";
import PathMaze from "../../components/GamePage/PathMazeComponent";
import QuestionCard from "../../components/GamePage/QuestionCard";
import ImageComponent from "../../components/ImageComponent";
import OptionCard from "../../components/GamePage/OptionCard";
import UtilitiesCard from "../../components/GamePage/UtilitiesCard";
import { listenForArrowKeys } from "../../components/GamePage/GetKeyComponent";
import { handleOption1, handleOption2, handleOption3, handleOption4 } from "../../components/GamePage/OptionPaths";

const GameView = () => {
  const startOption1 = useRef(false);
  const startOption2 = useRef(false);
  const startOption3 = useRef(false);
  const startOption4 = useRef(false);
  const [showCherry,setShowCherry]=useState(false);
  const lastKeyPressTime = useRef<number | null>(null);
  const pacRef = useRef<HTMLDivElement | null>(null);
  const movePac = [
    "translate-x-[130px]",
    "translate-x-[190px]",
    "translate-x-[250px]",
  ];
  const pathMaze=[
    'path-1',
    'path-2',
    'path-3'
  ]
  const correctOption=2;
  let movIdx = 0;
  useEffect(() => {
    const stopListening = listenForArrowKeys((key) => {
      const now = Date.now();
      
      const timeDiff = (startOption1.current || startOption2.current || startOption3.current || startOption4.current)
      ? 1000  // Delay for specific paths
      : 500;

      if (lastKeyPressTime.current === null || now - lastKeyPressTime.current >= timeDiff) {
        lastKeyPressTime.current = now;   
        if (key) {
          if (startOption1.current) {
            handleOption1({key,pacRef,movIdx,setShowCherry,correctOption});
          }
          else if (startOption2.current) {
            handleOption2({key,pacRef,movIdx,setShowCherry,correctOption});
          }
          else if (startOption3.current) {
            handleOption3({key,pacRef,movIdx,setShowCherry,correctOption});
          }
          else if (startOption4.current) {
            handleOption4({key,pacRef,movIdx,setShowCherry,correctOption});
          } else {
            handleCommonPath(key);
          }
        }
      }
    });
   
    return () => stopListening();
  }, []);
 
  const handleCommonPath = (key: string) => {
    if (pacRef.current && key === "ArrowRight" && movIdx < movePac.length) {
      if(movIdx>0){
        pacRef.current.classList.remove(movePac[movIdx-1]);
      }
      else{
        pacRef.current.classList.remove("translate-x-[50px]");
      }
      pacRef.current.classList.add(movePac[movIdx]);
      document.getElementById(pathMaze[movIdx])?.classList.add("animate-fadeOut");
      movIdx++;
    }
    else if (pacRef.current && key === "ArrowDown" && movIdx <= movePac.length) {
      if (movIdx === 0) { 
        startOption1.current=true;
        handleOption1({key,pacRef,movIdx,setShowCherry,correctOption})
      }
      if (movIdx === 3) {
        startOption4.current=true;
        handleOption4({key,pacRef,movIdx,setShowCherry,correctOption})
      }
    }
    else if (pacRef.current && key === "ArrowUp" && movIdx < movePac.length) {
      if (movIdx === 1) { 
        startOption2.current=true;
        handleOption2({key,pacRef,movIdx,setShowCherry,correctOption})
      }
      if (movIdx === 2) { 
        startOption3.current=true;
        handleOption3({key,pacRef,movIdx,setShowCherry,correctOption})
      }
    }
  };

  useEffect(() => {
    if (pacRef.current) {
      pacRef.current.classList.add("translate-x-[50px]");
    }
  }, []);
  return (
    <div className="relative pt-2 w-full h-screen ">
      <ImageComponent src="/resources/images/bg.png" alt="bg" className="" />
      {/* Utilities */}

      <UtilitiesCard />

      <QuestionCard question="Largest animal on earth?" />

      <PathMaze />

      <div
        ref={pacRef}
        // id="pac"
        className="absolute left-[37px] top-[590px] transition-all duration-500 ease-linear"
      > 
        
        <ImageComponent
          src="/resources/images/pacman.png"
          alt="pac"
          className="w-[44px] h-[44px]"
        />
        {showCherry?<ImageComponent
            src="/resources/images/cherry.png"
            alt="pac"
            className="absolute top-2 left-4 w-[25px] h-[29px]"
          />:""}
          
        
      </div>

      <OptionCard
        id="option1"
        optionClass=" top-[700px] left-[50px]"
        option="Hippopotamus"
        />
      <OptionCard
        id="option2"
        optionClass=" top-[420px] left-[33px]"
        option="Blue Whale"
      />
      <OptionCard
        id="option3"
        optionClass=" top-[430px] right-[20px]"
        option="Shark"
        imageInvert
      />
      
      <OptionCard
        id="option4"
        optionClass=" top-[740px] right-[60px]"
        option="Elephant"
        imageInvert
      />
    </div>
  );
};

export default GameView;
