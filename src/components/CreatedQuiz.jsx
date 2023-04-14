import { ref, onValue } from "firebase/database";
import { database } from "../config/firebase";
import QuizCard from "./QuizCard";
import Loading from "./Loading";
import { useState, useEffect } from "react";

const CreatedQuiz = () => {
  const dbRef = ref(database, "quiz");
  const [createdQuizzes, setCreatedQuizzes] = useState([]);

  const getData = () => {
    onValue(dbRef, (snapshot) => {
      const quizzes = snapshot.val();
      setCreatedQuizzes(Object.values(quizzes));
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {createdQuizzes.length === 0 ? (
        <Loading />
      ) : (
        <div className="flex flex-row flex-wrap justify-between items-center w-[97%] md:w-[80%] lg:w-[85%] mx-auto">
          {createdQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} data={quiz} />
          ))}
        </div>
      )}
    </>
  );
};

export default CreatedQuiz;

