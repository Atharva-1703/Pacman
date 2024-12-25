function HomePage() {
    
  return (
    
    <div className="background crop relative ml-auto mr-auto overflow-hidden bg-left-bottom">
      <div className="title-box absolute flex justify-center items-center not-italic font-normal text-5xl text-white">Pac-man Run</div>
      <button className="play-box absolute flex justify-center items-center font-normal text-2xl text-white not-italic">Play</button>
      {/* <div className="dashed-line"></div> */}
      <hr className="dashed-line"/>
    </div>
    
  );
}
export default HomePage;
