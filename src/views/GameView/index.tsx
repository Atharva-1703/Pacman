import React, { useEffect, useRef, useState } from "react";
import PathMaze from "../../components/GamePage/PathMazeComponent";
import QuestionCard from "../../components/GamePage/QuestionCard";
import ImageComponent from "../../components/ImageComponent";
import OptionCard from "../../components/GamePage/OptionCard";
import UtilitiesCard from "../../components/GamePage/UtilitiesCard";
import { listenForArrowKeys } from "../../components/GamePage/GetKeyComponent";

const GameView = () => {
  const startOption1 = useRef(false);
  const startOption2 = useRef(false);
  const startOption3 = useRef(false);
  const startOption4 = useRef(false);
  const lastKeyPressTime = useRef<number | null>(null);
  const pacRef = useRef<HTMLDivElement | null>(null);
  const cntRef = useRef(0);
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
  const option=[
    'option1',
    'option2',
    'option3',
    'option4'
  ]
  const correctOption=1;
  const correctOpt = document.getElementById(option[correctOption])?.children[0] as HTMLImageElement;

  let movIdx = 0;

  useEffect(() => {
    const stopListening = listenForArrowKeys((key) => {
      const now = Date.now();
      
      if (lastKeyPressTime.current === null || now - lastKeyPressTime.current >= 1000) {
        lastKeyPressTime.current = now;   
        if (key) {
          if (startOption1.current) {
            handleOption1(key);
          }
          else if (startOption2.current) {
            handleOption2(key);
          }
          else if (startOption3.current) {
            handleOption3(key);
          }
          else if (startOption4.current) {
            handleOption4(key);
          } else {
            handleCommonPath(key);
          }
        }
      }
    });
   
    return () => stopListening();
  }, []);



  const handleAfterOptions=(movIdx:number)=>{
    setTimeout(() => {
      handleAnswerCheck(movIdx);
      pacRef.current?.classList.remove("scale-x-[-1]");
    }, 1000);
    setTimeout(() => {
      pacRef.current?.classList.add("translate-x-[140px]");
      
    }, 2000);
    setTimeout(() => {
      
      pacRef.current?.classList.add("rotate-90");
    }, 3000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-y-[-130px]");
    }, 4000);
    setTimeout(() => {
      pacRef.current?.classList.remove("rotate-90");
      pacRef.current?.classList.add("scale-x-[-1]");
    }, 5000);
    
  }


  const handleAnswerCheck=(movIdx:number)=>{
    const correctOpt = document.getElementById(option[correctOption])?.children[0] as HTMLImageElement;
   if(correctOpt){ correctOpt.src="/resources/images/right.png";}
    if(movIdx!==correctOption){
      const wrongOpt=document.getElementById(option[movIdx])?.children[0] as HTMLImageElement | null;
      if(wrongOpt){wrongOpt.src="/resources/images/wrong.png"}
      return false;
    }
    return true;
  }
  
  
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
        handleOption1("ArrowDown")
      }
      if (movIdx === 3) {
        startOption4.current=true;
        handleOption4("ArrowDown")
      }
    }
    else if (pacRef.current && key === "ArrowUp" && movIdx < movePac.length) {
      if (movIdx === 1) { 
        startOption2.current=true;
        handleOption2("ArrowUp")
      }
      if (movIdx === 2) { 
        startOption3.current=true;
        handleOption3("ArrowUp")
      }
    }
  };
  

  const handleOption1=(key:string)=>{
    if(pacRef.current && key==="ArrowDown" && cntRef.current===0 ){
      pacRef.current.classList.add('rotate-90')
      setTimeout(() => {
        document.getElementById('opt1-1')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.add("translate-y-[70px]");
        cntRef.current++;
      }, 500);
    }
    if(pacRef.current && key==="ArrowLeft" && cntRef.current===1){
      pacRef.current.classList.remove("rotate-90");
      pacRef.current.classList.add("scale-x-[-1]");
      setTimeout(() => {
        document.getElementById('opt1-2')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.remove("translate-x-[50px]");
        pacRef.current?.classList.add("translate-x-[-20px]");
        cntRef.current++;
      }, 500);
    }
    if(pacRef.current && key==="ArrowDown" && cntRef.current===2){
      pacRef.current.classList.add("rotate-[-90deg]");
      setTimeout(() => {
        document.getElementById('opt1-3')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.remove("translate-y-[70px]");
        pacRef.current?.classList.add("translate-y-[140px]");
        cntRef.current++;
        handleAfterOptions(movIdx);
      },500)
    }
  }

  const handleOption2=(key:string)=>{
    if(pacRef.current && key==="ArrowUp" && cntRef.current===0 ){ 
      pacRef.current.classList.add("rotate-[-90deg]")
      setTimeout(() => {
        document.getElementById('opt2-1')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.add("translate-y-[-130px]");
        cntRef.current++;
      }, 500);
    }
    if(pacRef.current && key==="ArrowLeft" && cntRef.current===1 ){
      pacRef.current.classList.remove("rotate-[-90deg]");
      pacRef.current.classList.add("scale-x-[-1]");
      setTimeout(() => {
        document.getElementById('opt2-2')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.remove("translate-x-[130px]");
        pacRef.current?.classList.add("translate-x-[10px]");
        cntRef.current++;
        handleAfterOptions(movIdx);
      }, 500);
      
    }
  }
  
  const handleOption3=(key:string)=>{
    if(pacRef.current && key==="ArrowUp" && cntRef.current===0 ){
      pacRef.current.classList.add("-rotate-90")
      setTimeout(() => {  
        document.getElementById('opt3-1')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.add("translate-y-[-90px]");
        cntRef.current++;
      },500)
    }
    if(pacRef.current && key==="ArrowRight" && cntRef.current===1 ){
      pacRef.current.classList.remove("-rotate-90");
      setTimeout(() => {
        document.getElementById('opt3-2')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.add("translate-x-[250px]");
        cntRef.current++;
        handleAfterOptions(movIdx);
      }, 500);
    }
  }

  const handleOption4=(key:string)=>{
    if(pacRef.current && key==="ArrowDown" && cntRef.current===0 ){
      pacRef.current.classList.add("rotate-90")
      setTimeout(() => {
        document.getElementById('opt4-1')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.add("translate-y-[130px]");
      cntRef.current++;
      }, 500);
    }
    if(pacRef.current && key==="ArrowRight" && cntRef.current===1 ){
      pacRef.current.classList.remove("rotate-90");
      setTimeout(() => {
        document.getElementById('opt4-2')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.add("translate-x-[290px]");
      cntRef.current++;
      handleAfterOptions(movIdx);
      }, 500);
    }
  }

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
        className="absolute left-[37px] top-[590px] transition-all duration-1000 ease-linear"
      >
        <ImageComponent
          src="/resources/images/pacman.png"
          alt="pac"
          className="w-[44px] h-[44px]"
        />
      </div>

      <OptionCard
        id="option1"
        optionClass=" top-[700px] left-[40px]"
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
