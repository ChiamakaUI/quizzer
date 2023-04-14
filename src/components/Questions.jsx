import { useState, useEffect, useCallback } from "react";
import QuestionForm from "./QuestionForm";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import toast, { Toaster } from "react-hot-toast";
import { ref, push } from "firebase/database";
import { database } from "../config/firebase";
import uuid from "react-uuid";

const Questions = ({closeModal}) => {
  const [num, setNum] = useState([]);
  const { quizDetails } = useContext(QuizContext);

  const { numberOfQuestions, questions } = quizDetails;

  // console.log(questions.length);
  const generateNumberOfQuestions = useCallback(() => {
    const quizQuestions = Array.from(
      { length: numberOfQuestions },
      (_, i) => i + 1
    );
    setNum(quizQuestions);
  }, []);

  useEffect(() => {
    generateNumberOfQuestions();
  }, []);

  const sendQuiz = () => {
    if (questions.length !== numberOfQuestions) {
      toast.error(`Please, save questions to continue.`);
      return;
    }

    const newQuiz = {
      ...quizDetails,
      id: uuid(),
    };
    // console.log(newQuiz);
    push(ref(database, "quiz/"), newQuiz);
    toast.success(`Your quiz has been created`);
    closeModal(false)
  };

  return (
    <div className="overflow-y-auto">
      {num.map((n) => (
        <QuestionForm key={n} />
      ))}
      <div className="mx-auto w-[75%] my-6">
        <button
          className="w-full border text-white p-3 bg-[#a45ee5] rounded"
          onClick={sendQuiz}
        >
          Finish
        </button>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Questions;

//md:w-[35%]
