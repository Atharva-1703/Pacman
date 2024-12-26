import ImageComponent from "./ImageComponent";

function HomePage() {
    const handlePlay=()=>{
      document.getElementById("play")?.classList.add("hidden");
      document.getElementById("dash-line")?.classList.remove("hide");
      document.getElementById("dash-line")?.classList.add("visible");
    }
  return (
    <div className="background crop relative ml-auto mr-auto overflow-hidden bg-left-bottom">
      <div className="title-box absolute flex justify-center items-center not-italic font-normal text-5xl text-white">Pac-man Run</div>
      <button id="play" className="play-box absolute flex justify-center items-center font-normal text-2xl text-white not-italic" onClick={handlePlay}>Play</button>
      <div id="dash-line" className="hide">
      <hr className="dashed-line inline right-0"/>
      <hr className="dashed-line inline left-0" />
      </div>
      <div className="absolute top-[421px] left-[-170px]">
      <ImageComponent src="/resources/images/pacman.png" alt="pacman" className=" w-[220px] h-[220px]"/>
      </div>
      

    </div>
    
  );
}
export default HomePage;
