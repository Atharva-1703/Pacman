import React from 'react'
import HomeView from '../../views/HomeView'
import { useNavigate } from 'react-router-dom';
import { animateIntro } from '../../components/IntroAnimation/animate';

const HomeContainer = () => {
    const navigate = useNavigate();

    const handleStart = () => {
      navigate("/play");
    };
  
    const handlePlay = () => {
      // Hiding "Play" button
      document.getElementById("play")?.classList.add("opacity-0");
      setTimeout(() => {
        document.getElementById("play")?.classList.add("hidden");
      }, 500);
  
      // Add animation classes to elements
      document.getElementById("dash-line")?.classList.add("animate-fadeIn");
      // animatePac();
      animateIntro();
    };
  
  return (
    <div className='relative max-w-[393px]  overflow-hidden'>
      <HomeView handlePlay={handlePlay} handleStart={handleStart}  />
    </div>
    
  )
}

export default HomeContainer