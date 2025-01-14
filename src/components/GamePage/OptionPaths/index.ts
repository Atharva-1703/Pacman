import { handleAfterOptions } from "../ReturnAnimations/AfterOptions";


interface GameActionParams {
  key: string;
  pacRef: React.RefObject<HTMLDivElement>;
  movIdx: React.MutableRefObject<number>;
  setShowCherry: React.Dispatch<React.SetStateAction<boolean>>;
  correctOption:number,
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>
  moveToNextQuestion:()=>void
}


let cnt=0;

export const resetCnt = () => {
  cnt = 0;
  
};

export const handleOption1=({
              key,
             pacRef,
              movIdx,
              setShowCherry,
              correctOption,
              setShowMessage,moveToNextQuestion
            }:GameActionParams)=>{
    if(pacRef.current && key==="ArrowDown" && cnt===0 ){
      pacRef.current.classList.add('rotate-90')
      setTimeout(() => {
        document.getElementById('opt1-1')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.add("translate-y-[70px]");
        cnt++;
      }, 500);
    }
    if(pacRef.current && key==="ArrowLeft" && cnt===1){
      pacRef.current.classList.remove("rotate-90");
      pacRef.current.classList.add("-scale-x-100");
      setTimeout(() => {
        document.getElementById('opt1-2')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.remove("translate-x-[50px]");
        pacRef.current?.classList.add("translate-x-[-20px]");
        cnt++;
      }, 500);
    }
    if(pacRef.current && key==="ArrowDown" && cnt===2){
      pacRef.current.classList.add("-rotate-90");
      setTimeout(() => {
        document.getElementById('opt1-3')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.remove("translate-y-[70px]");
        pacRef.current?.classList.add("translate-y-[140px]");
        cnt++;
        handleAfterOptions(movIdx,pacRef,correctOption,setShowCherry,setShowMessage,moveToNextQuestion);
      },500)
    }
  }

export  const handleOption2=({
              key,
             pacRef,
              movIdx,
              setShowCherry,
              correctOption,
              setShowMessage,moveToNextQuestion
            }:GameActionParams)=>{
    if(pacRef.current && key==="ArrowUp" && cnt===0 ){ 
      pacRef.current.classList.add("-rotate-90")
      setTimeout(() => {
        document.getElementById('opt2-1')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.add("translate-y-[-130px]");
        cnt++;
      }, 500);
    }
    if(pacRef.current && key==="ArrowLeft" && cnt===1 ){
      pacRef.current.classList.remove("-rotate-90");
      pacRef.current.classList.add("-scale-x-100");
      setTimeout(() => {
        document.getElementById('opt2-2')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.remove("translate-x-[130px]");
        pacRef.current?.classList.add("translate-x-[10px]");
        cnt++;
        handleAfterOptions(movIdx,pacRef,correctOption,setShowCherry,setShowMessage,moveToNextQuestion);
      }, 500);
    }
  }
  
export  const handleOption3=({
              key,
             pacRef,
              movIdx,
              setShowCherry,
              correctOption,
              setShowMessage,moveToNextQuestion
            }:GameActionParams)=>{
    if(pacRef.current && key==="ArrowUp" && cnt===0 ){
      pacRef.current.classList.add("-rotate-90")
      setTimeout(() => {  
        document.getElementById('opt3-1')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.add("translate-y-[-90px]");
        cnt++;
      },500)
    }
    if(pacRef.current && key==="ArrowRight" && cnt===1 ){
      pacRef.current.classList.remove("-rotate-90");
      setTimeout(() => {
        document.getElementById('opt3-2')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.remove("translate-x-[190px]");
        pacRef.current?.classList.add("translate-x-[250px]");
        cnt++;
        handleAfterOptions(movIdx,pacRef,correctOption,setShowCherry,setShowMessage,moveToNextQuestion);
      }, 500);
    }
  }

export  const handleOption4=({
              key,
             pacRef,
              movIdx,
              setShowCherry,
              correctOption,
              setShowMessage,moveToNextQuestion
            }:GameActionParams)=>{
    if(pacRef.current && key==="ArrowDown" && cnt===0 ){
      pacRef.current.classList.add("rotate-90")
      setTimeout(() => {
        document.getElementById('opt4-1')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.add("translate-y-[130px]");
      cnt++;
      }, 500);
    }
    if(pacRef.current && key==="ArrowRight" && cnt===1 ){
      pacRef.current.classList.remove("rotate-90");
      setTimeout(() => {
        document.getElementById('opt4-2')?.classList.add("animate-fadeOut");
        pacRef.current?.classList.add("translate-x-[290px]");
      cnt++;
      handleAfterOptions(movIdx,pacRef,correctOption,setShowCherry,setShowMessage,moveToNextQuestion);
      }, 500);
    }
  }