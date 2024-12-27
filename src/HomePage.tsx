import { useState } from "react";
import ImageComponent from "./ImageComponent";

function HomePage() {
  const handlePlay = () => {
    document.getElementById("play")?.classList.add("opacity-0");
    setTimeout(() => {
      document.getElementById("play")?.classList.add("hidden");
    }, 500);

    document.getElementById("dash-line")?.classList.add("animate-fadeIn");
    animatePac();
  };
  function animatePac() {
    const pac = document.getElementById("pac");
    const startText = document.getElementById("start-text");
    const controls = document.getElementById("controls");
    setTimeout(() => {
      document.getElementById("first-dash")?.classList.add("animate-fadeOut");
      pac?.classList.add("translate-x-[250px]");
    }, 1000);
    setTimeout(() => {
      pac?.classList.add("scale-[1.4]");
      pac?.classList.add("translate-y-[-240px]");
      document.getElementById("background")?.classList.add("opacity-30");
    }, 2500);
    setTimeout(() => {
      document.getElementById("title")?.classList.add("opacity-0");
      document.getElementById("second-dash")?.classList.add("animate-fadeOut");
      startText?.classList.add("opacity-100");
    }, 4000);
    setTimeout(() => {
      pac?.classList.add("scale-[0.8]");
      controls?.classList.toggle("opacity-100");
      startText?.classList.add("translate-y-[180px]");
      startText?.classList.toggle("h-[108px]");
      startText?.classList.toggle("text-[24px]");
      startText?.classList.toggle("leading-[36px]");
    }, 5000);
    setTimeout(() => {
      controls?.classList.add("translate-y-[-50px]");
      pac?.classList.toggle("translate-y-[-290px]");
      startText?.classList.toggle("opacity-100");
      document.getElementById('note')?.classList.toggle('opacity-100');
      document.getElementById('start')?.classList.toggle('opacity-100');
    }, 6500);
  }
  return (
    <>
    {/* Background */}
      <div
        id="background"
        className="bg-[url(/resources/images/bg.png)] bg-175%
     w-full h-full bg-no-repeat relative flex justify-center items-center overflow-hidden bg-left-bottom transition-all duration-1000 ease-linear"
      >
        <div
          id="title"
          className="font-porter absolute rounded-[20px] bg-[#0058fd] flex justify-center items-center text-center not-italic font-normal text-5xl text-white w-[452px] h-[252px] top-[0px] right-[-452px] animate-slideIn transition-all duration-1000 ease-linear"
        >
          Pac-man Run
        </div>
        <button
          id="play"
          className="font-seymour w-[197px] h-[75px] bottom-[0] left-[-197px] rounded-[20px] bg-[#0058fd] absolute flex justify-center items-center font-normal text-2xl text-white not-italic transition-all duration-500 ease-linear animate-slideRight" 
          onClick={handlePlay}
        >
          Play
        </button>
        <div id="dash-line" className="opacity-0">
          <hr
            id="first-dash"
            className="absolute w-[49%] top-[480px] h-0 border-[7.5px]  border-dashed border-[#FFEA00]  inline left-0 "
          />
          <hr
            id="second-dash"
            className="absolute w-[49%] top-[480px] h-0 border-[7.5px]   border-dashed border-[#FFEA00]  right-0"
          />
        </div>
      </div>

    {/* Controls */}
      <div
        id="controls"
        className="absolute top-[50px] left-[140px] w-full transition-all duration-1000 ease-linear opacity-0"
      >
        <div
          className="absolute font-poppins text-white font-black text-center top-0 left-0 text-[24px] leading-9 "
        >
          Up
          <ImageComponent
            src="/resources/images/up.png"
            alt="up"
            className="w-[88px] "
          />
        </div>
        <div 
        className="absolute font-poppins text-white font-black text-center top-[150px] left-[85px] text-[24px] leading-9 flex">
          <ImageComponent
            src="/resources/images/up.png"
            alt="front"
            className="w-[88px] rotate-90 "
          />
          <span className="my-auto">Front</span>
        </div>
        <div 
        className="absolute font-poppins text-white font-black text-center top-[270px] left-0 text-[24px] leading-9">
          <ImageComponent
            src="/resources/images/up.png"
            alt="down"
            className="w-[88px] rotate-180 "
          />
          Down
        </div>
      </div>

      {/* Pacman */}
      <div
        id="pac"
        className="absolute top-[370px] left-[-178px]  transition  duration-1000 ease-linear"
      >
        <ImageComponent
          src="/resources/images/pacman.png"
          alt="pacman"
          className=" w-[220px]"
        />
      </div>

      <div
        id="start-text"
        className="absolute w-[291px] h-[216px] text-center text-[36px] leading-[54px] font-poppins -z-30 opacity-0  not-italic font-black text-white text-2xl left-[51px] top-[400px] transition  duration-1000 ease-linear"
      >
        Move Pac-man to go towards the right answer
      </div>
      <div
        id="note"
        className="absolute w-[291px] h-[144px] text-center text-[32px] leading-[48px] font-poppins opacity-0  not-italic font-black text-white text-2xl left-[51px] top-[400px] transition  duration-1000 ease-linear"
      >
        Pac-man cannot go back so choose wisely
      </div>
      <div>
      <button
          id="start"
          className="font-seymour w-[197px] h-[75px] bottom-[40px] left-[98px] rounded-[20px] bg-[#0058fd] absolute flex opacity-0 justify-center items-center font-normal text-2xl text-white not-italic transition-all duration-1000 ease-linear " 
          onClick={handlePlay}
        >
          Start
        </button>
      </div>
    </>
  );
}
export default HomePage;
// 488  > 683
