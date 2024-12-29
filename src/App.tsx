import HomePage from "./HomePage";
import "./App.css";
import GamePage from "./GamePage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<HomePage /> />
          <Route path="/play" element=<GamePage /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
