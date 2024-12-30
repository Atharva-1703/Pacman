import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import HomePage from "../HomePage";
import GamePage from "../pages/GamePage";
// import ResultPage from "../pages/ResultPage";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/play" element={<GamePage/>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;