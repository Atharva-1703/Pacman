import GhostActions from "./ghostFunctions";
import ReturnActions, { messageMove } from "./returnFunctions";

const option = ["option1", "option2", "option3", "option4"];

const home = [
  "translate-y-[70px]",
  "translate-x-[140px]",
  "translate-x-[200px]",
  "translate-x-[250px]",
];



export const handleAfterOptions = (
  movIdx: number,
  pacRef: React.RefObject<HTMLDivElement>,
  correctOption: number,
  setShowCherry: React.Dispatch<React.SetStateAction<boolean>>,
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const returnActions = ReturnActions(pacRef);
  const ghostActions = GhostActions(pacRef);

  let isCorrect = false;
  setTimeout(() => {
    isCorrect = handleAnswerCheck(movIdx, correctOption);
    if (!isCorrect) {
      ghostActions[movIdx]();
    } else {
      setShowCherry(true);
      setShowMessage(true);
    }
  }, 500);
  returnActions[movIdx]();
  setTimeout(() => {
    if (isCorrect) {

      if(movIdx>0)
      {pacRef.current?.classList.remove("duration-500");
      pacRef.current?.classList.add("duration-1000");
      messageMove("duration-500","duration-1000")
      }
      pacRef.current?.classList.remove(home[movIdx]);
      messageMove(home[movIdx],"")
      if(movIdx===0){
        setTimeout(() => {
          pacRef.current?.classList.remove("-rotate-90")
          pacRef.current?.classList.add("-scale-x-100");
        }, 500);
        setTimeout(() => {
          pacRef.current?.classList.remove("translate-x-[50px]")
          messageMove("translate-x-[50px]","")
        }, 1000);
      }
    }
  }, 3500);
};

const handleAnswerCheck = (movIdx: number, correctOption: number) => {
  const correctOpt = document.getElementById(option[correctOption])
    ?.children[0] as HTMLImageElement;
  if (correctOpt) {
    correctOpt.src = "/resources/images/right.png";
  }
  if (movIdx !== correctOption) {
    const wrongOpt = document.getElementById(option[movIdx])
      ?.children[0] as HTMLImageElement | null;
    if (wrongOpt) {
      wrongOpt.src = "/resources/images/wrong.png";
    }
    return false;
  }
  return true;
};
