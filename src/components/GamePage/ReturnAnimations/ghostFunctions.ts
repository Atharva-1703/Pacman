import { messageMove } from "./returnFunctions";

const GhostActions = (pacRef: React.RefObject<HTMLDivElement>) => [
    // ? return from 1st option
     ()=>{
        const ghost=document.getElementById("opt1-ghost");
        setTimeout(() => {
          ghost?.classList.add("-translate-y-[110px]");
        }, 1000);
        setTimeout(() => {
          ghost?.classList.add("translate-x-[70px]");
        }, 2200);
        setTimeout(() => {
          pacRef.current?.classList.add("animate-fadeOut")
          messageMove("duration-500","duration-1000")
          messageMove("","scale-[200%]")
        }, 3400);
    },
    // ? return form 2nd option 
    () => {
        const ghost=document.getElementById("opt2-ghost");
        setTimeout(() => {
          ghost?.classList.add("-translate-y-[40px]");
        }, 0);
        setTimeout(() => {
          ghost?.classList.add("translate-x-[160px]");
        }, 1100);
        setTimeout(() => {
          ghost?.classList.remove('-translate-y-[40px]')
          ghost?.classList.add('translate-y-[90px]')
        }, 2200);
        setTimeout(() => {
          pacRef.current?.classList.add("animate-fadeOut")
          messageMove("duration-500","duration-1000")
          messageMove("","scale-[200%]")
        }, 3300);
    },
    // ? return from 3rd option
    () => {
        const ghost=document.getElementById("opt3-ghost");
        setTimeout(() => {
          ghost?.classList.add("translate-x-[-80px]");
        }, 1000);
        setTimeout(() => {
          ghost?.classList.add("translate-y-[80px]");
        }, 2200);
        setTimeout(() => {
          pacRef.current?.classList.add("animate-fadeOut")
          messageMove("duration-500","duration-1000")
          messageMove("","scale-[200%]")
        }, 3400);
    },
    // ? return from 4th option
    () => {
        const ghost=document.getElementById("opt4-ghost");
        setTimeout(() => {
          ghost?.classList.add("-translate-y-[50px]");
        }, 500);
        setTimeout(() => {
          ghost?.classList.add("-translate-x-[40px]");
        }, 1500);
        setTimeout(() => {
          ghost?.classList.remove('-translate-y-[50px]')
          ghost?.classList.add('-translate-y-[170px]')
        }, 2500);
        setTimeout(() => {
          pacRef.current?.classList.add("animate-fadeOut")
          messageMove("duration-500","duration-1000")
          messageMove("","scale-[200%]")
        }, 3300);
    },
  ];
  
  export default GhostActions;