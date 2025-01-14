import PathMaze from "../../components/GamePage/PathMazeComponent";
import QuestionCard from "../../components/GamePage/QuestionCard";
import ImageComponent from "../../components/ImageComponent";
import OptionCard from "../../components/GamePage/OptionCard";
import UtilitiesCard from "../../components/GamePage/UtilitiesCard";
import { useEffect } from "react";

interface GameViewProps {
  showCherry: boolean;
  showMessage: boolean;
  pacRef: React.RefObject<HTMLDivElement>;
  question: string;
  options: string[];
}

const GameView: React.FC<GameViewProps> = ({showCherry,showMessage,pacRef,question,options}) => {
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

      <QuestionCard question={question} />

      <PathMaze />

      <div className="absolute left-[37px] top-[590px]">
      
        <div id="message" className=" hidden">
          {showMessage?<ImageComponent
          src="/resources/images/yes.png"
          alt="yes"
          className="z-50 absolute -top-5 left-1 w-[34px] h-[34px]"
        />:<ImageComponent
        src="/resources/images/no.png"
        alt="no"
        className="z-10 absolute -top-4 -left-5 w-[45px] h-[45px]"
      />}
          
        
        </div>

        <div
          ref={pacRef}
          // id="pac"
          className=" transition-transform duration-500 ease-linear"
        >
          
          <ImageComponent
            src="/resources/images/pacman.png"
            alt="pac"
            className="w-[44px] h-[44px]"
          />
          {showCherry ? (
            <ImageComponent
              src="/resources/images/cherry.png"
              alt="cherry"
              className="absolute top-2 left-4 w-[25px] h-[29px]"
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <OptionCard
        id="option1"
        optionClass=" top-[700px] left-[50px]"
        option={options[0]}
      />
      <OptionCard
        id="option2"
        optionClass=" top-[420px] left-[33px]"
        option={options[1]}
      />
      <OptionCard
        id="option3"
        optionClass=" top-[430px] right-[20px]"
        option={options[2]}
        imageInvert
      />

      <OptionCard
        id="option4"
        optionClass=" top-[740px] right-[60px]"
        option={options[3]}
        imageInvert
      />
    </div>
  );
};

export default GameView;
