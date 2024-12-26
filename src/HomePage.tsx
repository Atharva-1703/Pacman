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
      }, 1000);
      setTimeout(() => {
        document.getElementsByClassName("dashed-line")[0].classList.remove("visible");
        document.getElementsByClassName("dashed-line")[1].classList.add("hide");
        pac?.classList.add('scale-[1.67]')
        pac?.classList.add('translate-y-[-240px]')
        
      }, 2000);
    }
  return (
    <div className="background crop relative flex justify-center items-center overflow-hidden bg-left-bottom">
      <div className="title-box absolute flex justify-center items-center not-italic font-normal text-5xl text-white">Pac-man Run</div>
      <button id="play" className="play-box absolute flex justify-center items-center font-normal text-2xl text-white not-italic" onClick={handlePlay}>Play</button>
      <div id="dash-line" className="hide">
      <hr className="dashed-line inline right-0"/>
      <hr className="dashed-line inline left-0" />
      </div>
      
      <div id="pac" className="absolute top-[434px] left-[-178px] transition-all duration-1000 ease-linear ">
      <ImageComponent src="/resources/images/pacman.png" alt="pacman" className=" w-[220px] "/>
      </div>
      

    </div>
    
  );
}
export default HomePage;
