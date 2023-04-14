import { ref } from "firebase/database";
import { useDatabaseValue } from "@react-query-firebase/database";
import { database } from "../config/firebase";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { GameContext } from "../context/game";
import StartQuiz from "../components/StartQuiz";
import { useContext } from "react";
import SingleQuiz from "../components/SingleQuiz";
import FinishQuiz from "../components/FinishQuiz";

const Quiz = () => {
  const { quizId } = useParams();
  const { gameState } = useContext(GameContext);
  const singleQuiz = [];
  const dbRef = ref(database, "quiz");
  const quizes = useDatabaseValue(["quiz"], dbRef, {
    subscribe: true,
  });

  if (quizes.isLoading) {
    return <Loading />;
  }
  const snapshot = quizes.data;

  snapshot.forEach((childSnapshot) => {
    const { id } = childSnapshot.val();
    if (id !== quizId) return;
    singleQuiz.push(childSnapshot.val());
  });
  const [quiz] = singleQuiz;
  return (
    <div className="w-[88%] mx-auto">
      {gameState === "start" && <StartQuiz quiz={quiz} />}
      {gameState === "playing" && (
        <SingleQuiz
          questions={quiz.questions}
          points={quiz.points}
          time={quiz.time}
        />
      )}
      {gameState === "finished" && <FinishQuiz />}
    </div>
  );
};

export default Quiz;
