import ImageComponent from "./ImageComponent";

function HomePage() {
    const handlePlay=()=>{
      document.getElementById("play")?.classList.add("hide");
      document.getElementById("dash-line")?.classList.remove("hide");
      document.getElementById("dash-line")?.classList.add("visible");
      animatePac();
    }
    function animatePac(){
      const pac=document.getElementById("pac");
      setTimeout(() => {
        pac?.classList.add('translate-x-[250px]')
        document.getElementsByClassName("dashed-line")[0].classList.remove("visible");
        document.getElementsByClassName("dashed-line")[1].classList.add("hide");
      }, 1000);
      setTimeout(() => {
        pac?.classList.add('scale-[1.67]')
        pac?.classList.add('translate-y-[-240px]')
      }, 3000);
      setTimeout(() => {
        document.getElementsByClassName('background')[0].classList.add('opacity-30');
      }, 5000);
    }
  return (
  <>
    <div className="bg-[url(/resources/images/bg.png)] bg-175%
     w-full h-full bg-no-repeat relative flex justify-center items-center overflow-hidden bg-left-bottom">
      <div className="font-porter absolute rounded-[20px] bg-[#0058fd] flex justify-center items-center text-center not-italic font-normal text-5xl text-white w-[452px] h-[252px] top-[0px] right-[-452px] animate-slideIn">Pac-man Run</div>
      <button id="play" className="font-seymour w-[197px] h-[75px] bottom-[0] left-[-197px] rounded-[20px] bg-[#0058fd] absolute flex justify-center items-center font-normal text-2xl text-white not-italic animate-slideRight" onClick={handlePlay}>Play</button>
      <div id="dash-line" className="hide">
      <hr className="dashed-line inline right-0"/>
      <hr className="dashed-line inline left-0 " />
      </div>
      
    </div>
    <div id="pac" className="absolute top-[434px] left-[-178px]  transition  duration-1000 ease-linear">
    <ImageComponent src="/resources/images/pacman.png" alt="pacman" className=" w-[220px]"/>
    </div>
</>
    
  );
}
export default HomePage;
