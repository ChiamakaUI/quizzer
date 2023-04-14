import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);
  return (
    <GameContext.Provider value={{ gameState, setGameState, score, setScore }}>
      {children}
    </GameContext.Provider>
  );
};

