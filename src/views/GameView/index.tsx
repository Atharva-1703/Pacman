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


  let movIdx = 0;
  const movePac = [
    "translate-x-[130px]",
    "translate-x-[190px]",
    "translate-x-[250px]",
  ];

  useEffect(() => {
    const stopListening = listenForArrowKeys((key) => {
      const now = Date.now();
      
      if (lastKeyPressTime.current === null || now - lastKeyPressTime.current >= 1000) {
        lastKeyPressTime.current = now;  
        
        if (key) {
          if (startOption1.current) {
            handleOption1(key);
          }
          if (startOption2.current) {
            handleOption2(key);
          }
          if (startOption3.current) {
            handleOption3(key);
          }
          if (startOption4.current) {
            handleOption4(key);
          } else {
            handleCommonPath(key);
          }
        }
      }
    });
   
    return () => stopListening();
  }, []);
  

  // console.log(keyPressed);
  
  const handleCommonPath = (key: string) => {
    if (pacRef.current && key === "ArrowRight" && movIdx < movePac.length) {
      if(movIdx>0){
        pacRef.current.classList.remove(movePac[movIdx-1]);
      }
      else{
        pacRef.current.classList.remove("translate-x-[50px]");
      }
      pacRef.current.classList.add(movePac[movIdx]);
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
     pacRef.current.classList.add("translate-y-[70px]");
     cntRef.current++;
    }
    if(pacRef.current && key==="ArrowLeft" && cntRef.current===1){
      pacRef.current.classList.remove("translate-x-[50px]");
      pacRef.current.classList.add("translate-x-[-20px]");
      cntRef.current++;
    }
    if(pacRef.current && key==="ArrowDown" && cntRef.current===2){
      pacRef.current.classList.remove("translate-y-[70px]");
      pacRef.current.classList.add("translate-y-[140px]");
      cntRef.current++;
    }
  }

  const handleOption2=(key:string)=>{
    if(pacRef.current && key==="ArrowUp" && cntRef.current===0 ){
      pacRef.current.classList.add("translate-y-[-130px]");
      cntRef.current++;
    }
    if(pacRef.current && key==="ArrowLeft" && cntRef.current===1 ){
      console.log("1");
      
      pacRef.current.classList.remove("translate-x-[130px]");
      pacRef.current.classList.add("translate-x-[10px]");
      cntRef.current++;
    }
  }
  
  const handleOption3=(key:string)=>{
    if(pacRef.current && key==="ArrowUp" && cntRef.current===0 ){
      pacRef.current.classList.add("translate-y-[-90px]");
      cntRef.current++;
    }
    if(pacRef.current && key==="ArrowRight" && cntRef.current===1 ){
      
      pacRef.current.classList.add("translate-x-[250px]");
      cntRef.current++;
    }
  }

  const handleOption4=(key:string)=>{
    if(pacRef.current && key==="ArrowDown" && cntRef.current===0 ){
      console.log("h");
      
      pacRef.current.classList.add("translate-y-[130px]");
      cntRef.current++;
    }
    if(pacRef.current && key==="ArrowRight" && cntRef.current===1 ){
      
      pacRef.current.classList.add("translate-x-[300px]");
      cntRef.current++;
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
        optionClass=" top-[420px] left-[33px]"
        option="Blue Whale"
      />
      <OptionCard
        id="option2"
        optionClass=" top-[430px] right-[20px]"
        option="Shark"
        imageInvert
      />
      <OptionCard
        id="option3"
        optionClass=" top-[700px] left-[40px]"
        option="Hippopotamus"
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
