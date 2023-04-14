import { ref, onValue } from "firebase/database";
import { database } from "../config/firebase";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { GameContext } from "../context/game";
import StartQuiz from "../components/StartQuiz";
import { useContext } from "react";
import SingleQuiz from "../components/SingleQuiz";
import FinishQuiz from "../components/FinishQuiz";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
  const { quizId } = useParams();
  const { gameState } = useContext(GameContext);
  const dbRef = ref(database, "quiz");
  const [quiz, setQuiz] = useState({});
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const { id, questions } = childSnapshot.val();
        if (id !== quizId) return;
        setQuiz(childSnapshot.val());
        if (questions === undefined) return;
        setQuestions(questions);
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {Object.keys(quiz).length === 0 ? (
        <Loading />
      ) : questions.length === 0 ? (
        <div className='font-lora text-center text-xl lg:text-2xl'>
          <p>There are no questions in this Quiz</p>
          <button
            className="bg-[#a45ee5] rounded-full w-[88%] mx-auto p-2.5 text-white mt-5 lg:w-[350px]"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </button>
        </div>
      ) : (
        <div className="w-[88%] mx-auto">
          {gameState === "start" && <StartQuiz quiz={quiz} />}
          {gameState === "playing" && (
            <SingleQuiz
              questions={questions}
              points={quiz.points}
              time={quiz.time}
            />
          )}
          {gameState === "finished" && <FinishQuiz />}
        </div>
      )}
    </>
  );
};

export default Quiz;

