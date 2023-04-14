import QuizForm from "../components/QuizForm";
import { useState } from "react";
import CreatedQuiz from "../components/CreatedQuiz";
import Header from "../components/Header";
const Home = () => {
  const [showQuizForm, setShowQuizForm] = useState(false);
  return (
    <main className="font-lora">
      <Header showFormFunc={setShowQuizForm} />
      <p className="text-center text-xl lg:text-3xl my-5 font-semibold">
        Click on a Quiz to Start
      </p>
      {showQuizForm && <QuizForm closeFunc={setShowQuizForm} />}
      <CreatedQuiz />
    </main>
  );
};

export default Home;
