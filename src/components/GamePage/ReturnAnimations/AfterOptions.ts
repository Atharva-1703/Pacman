import GhostActions from "./ghostFunctions";
import ReturnActions from "./returnFunctions";

const option = ["option1", "option2", "option3", "option4"];

const home = [
  "translate-y-[70px]",
  "translate-x-[140px]",
  "translate-x-[200px]",
  "translate-x-[250px]",
];

interface GameActionParams {
  movIdx: number;
  pacRef: React.RefObject<HTMLDivElement>;
  correctOption: number;
  setShowCherry: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handleAfterOptions = (
  {movIdx,pacRef,correctOption,setShowCherry}:GameActionParams
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
    }
  }, 500);
  returnActions[movIdx]();
  setTimeout(() => {
    if (isCorrect) {
      // home[movIdx]();
      pacRef.current?.classList.remove("duration-500");
      pacRef.current?.classList.add("duration-1000");
      pacRef.current?.classList.remove(home[movIdx]);
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
