import { useState, useContext, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GameContext } from "../context/game";
const SingleQuiz = ({ questions, points, time }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [timeLimit, setTimeLimit] = useState(time * 60);
  const { score, setScore, setGameState } = useContext(GameContext);
  const timeRef = useRef(timeLimit);
  const minutes = Math.floor(timeLimit / 60);
  const secondsLeft = timeLimit % 60;
  const seconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
  const finishQuiz = () => {
    if (optionChosen === "") {
      toast.error(`Please, select an option to continue.`);
      return;
    }
    if (questions[currentQuestion].answer === optionChosen) {
      setScore(score + +points);
    }
    setOptionChosen("");
    setGameState("finished");
  };

  const nextQuestion = () => {
    if (optionChosen === "") {
      toast.error(`Please, select an option to continue.`);
      return;
    }
    if (questions[currentQuestion].answer === optionChosen) {
      setScore(score + +points);
    }
    setOptionChosen("");
    setCurrentQuestion(currentQuestion + 1);
  };
  const tick = () => {
    if (timeRef.current === 0) {
      setGameState("finished");
      return;
    }
    timeRef.current--;
    setTimeLimit(timeRef.current);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRef.current === 0) {
        clearInterval(interval);
      }
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-lora text-lg lg:text-xl">
      <p className="text-center text-[#a45ee5] font-black text-2xl my-3 lg:text-4xl lg:my-6">
        {currentQuestion + 1} / {questions.length}
      </p>
      <p className="font-bold my-4 text-center text-xl">
        Time left: <span className={`${timeLimit <= 90 ? "text-red-600" : ""}`}>{minutes + ":" + seconds}</span>
      </p>
      <p className="font-extrabold my-3 text-xl text-center lg:my-6">
        {questions[currentQuestion].question}
      </p>
      <div className="flex flex-col w-[88%] mx-auto lg:w-full lg:flex-row flex-wrap lg:justify-between my-5">
        {questions[currentQuestion].options.map((option, i) => (
          <button
            key={i}
            className={`border w-full lg:w-[49%] my-2 p-2 rounded-lg ${
              optionChosen === option ? "border-[#a45ee5] border-2" : ""
            }`}
            onClick={() => setOptionChosen(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={
          currentQuestion === questions.length - 1 ? finishQuiz : nextQuestion
        }
        className="bg-[#a45ee5] rounded-full w-full mx-0 p-3 text-white mt-5 lg:w-[380px] lg:mx-auto md:w-[80%] md:mx-auto"
      >
        {currentQuestion === questions.length - 1
          ? "Finish Quiz"
          : " Next Question"}
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default SingleQuiz;
