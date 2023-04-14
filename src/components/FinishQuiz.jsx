import { useContext } from "react";
import { GameContext } from "../context/game";
import { useNavigate } from "react-router-dom";

const FinishQuiz = () => {
  const { score, setGameState } = useContext(GameContext);
  const navigate = useNavigate();
  return (
    <div className="font-lora text-lg text-center my-20 lg:text-2xl md:my-28">
      <p className="my-2 lg:my-5">You completed have completed this Quiz </p>
      <p className="my-2 lg:my-5">You scored:</p>
      <p className="text-3xl font-bold lg:text-6xl">{score}</p>

      <button
        className="bg-[#a45ee5] rounded-full w-[88%] mx-auto p-2.5 text-white mt-5 lg:w-[350px]"
        onClick={() => {
          navigate("/");
          setGameState("start");
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default FinishQuiz;
