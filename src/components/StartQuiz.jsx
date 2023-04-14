import { useContext } from "react";
import { GameContext } from "../context/game";

const StartQuiz = ({ quiz }) => {
  const { setGameState } = useContext(GameContext);
  return (
    <div className="font-lora text-lg text-center my-20 lg:text-2xl md:my-28">
      <p className="text-xl font-bold lg:text-4xl">{quiz.quizName}</p>
      <p className="my-2 lg:my-5">{quiz.description}</p>
      <p className="my-2 lg:my-5">{quiz.time} mins</p>
      <p className="my-2 lg:my-5">{quiz.points} points per question</p>
      <button
        className="bg-[#a45ee5] rounded-md w-[88%] mx-auto p-2.5 text-white mt-5 lg:w-[350px]"
        onClick={() => setGameState("playing")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartQuiz;
