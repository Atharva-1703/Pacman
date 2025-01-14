import ImageComponent from "../../components/ImageComponent";
import { getCorrectCnt } from "../../components/GamePage/ReturnAnimations/AfterOptions";

const ResultView = () => {
  const [correct, wrong] = getCorrectCnt();
  return (
    <div className=" flex justify-center items-center w-full h-full ">
      <ImageComponent
        src="/resources/images/bg.png"
        alt="bg"
        className=" w-full h-full"
      />

      <div className="bg-blue-500 w-[80%] max-w-[400px] rounded-2xl p-6 text-center absolute h-[80%]">
        {/* Title */}
        <h1 className="text-white text-3xl mt-10 font-bold font-poppins ">
          Game Over
        </h1>
        <div className="w-full h-full flex flex-col justify-center items-center gap-4 font-bold font-poppins ">
          {/* Right Count */}
          <div className="bg-white rounded-lg p-4 mb-4 w-[80%]">
            <p className="text-green-500 text-xl font-bold">Right -{correct}</p>
          </div>

          {/* Wrong Count */}
          <div className="bg-white rounded-lg p-4 w-[80%]">
            <p className="text-red-500 text-xl font-bold">Wrong - {wrong}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
