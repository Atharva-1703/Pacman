import React from "react";
import ImageComponent from "../../components/ImageComponent";
import ControlsComponent from "../../components/HomePage/ControlsComponent";
import TextComponent from "../../components/HomePage/TextComponent";
import ButtonComponent from "../../components/ButtonComponent";
import IntroComponent from "../../components/HomePage/IntroComponent";

interface HomeViewProps {
  handlePlay: () => void;
  handleStart: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ handlePlay, handleStart }) => {
  return (
    <div>
      <IntroComponent handleFunction={handlePlay}/>

      <ControlsComponent />

      <div
        id="pac"
        className="absolute top-[435px] transition-all duration-1000 left-[-178px] ease-linear"
      >
        <ImageComponent
          src="/resources/images/pacman.png"
          alt="pacman"
          className="w-[220px]"
        />
      </div>

      <TextComponent
        id="start-text"
        text="Move Pac-man to go towards the right answer"
        className="w-[291px] text-[36px] leading-[54px]  left-[51px] top-[488px]"
      />

      <TextComponent
        id="note"
        className=" w-[291px] text-[32px] leading-[48px]  left-[51px] top-[531px]"
        text="Pac-man cannot go back so choose wisely"
      />

        <ButtonComponent id="start" handleFunction={handleStart}
        text="Start" className="w-[197px] h-[75px] bottom-[40px] left-[98px] hidden opacity-0" />
      
    </div>
  );
};

export default HomeView;
