import { ref } from "firebase/database";
import { useDatabaseSnapshot } from "@react-query-firebase/database";
import { database } from "../config/firebase";
import QuizCard from "./QuizCard";
import Loading from "./Loading";

const CreatedQuiz = () => {
  const dbRef = ref(database, "quiz");
  const quizzes = useDatabaseSnapshot(["quiz"], dbRef);
  if (quizzes.isLoading) {
    return <Loading/>;
  }
  const snapshot = quizzes.data;

  const createdQuizzes = [];

  snapshot.forEach((childSnapshot) => {
    createdQuizzes.push(childSnapshot.val());
  });

  return (
    <div className="flex flex-row flex-wrap justify-between items-center w-[97%] md:w-[80%] lg:w-[85%] mx-auto">
      {createdQuizzes.map((quiz) => (
        <QuizCard key={quiz.id} data={quiz} />
      ))}
    </div>
  );
};

export default CreatedQuiz;
