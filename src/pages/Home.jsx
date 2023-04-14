import QuizForm from "../components/QuizForm";
import { useState } from "react";
import CreatedQuiz from "../components/CreatedQuiz";
import Header from "../components/Header";
const Home = () => {
  const [showQuizForm, setShowQuizForm] = useState(false);
  return (
    <main>
      <Header showFormFunc={setShowQuizForm} />
      {showQuizForm && <QuizForm closeFunc={setShowQuizForm} />}
      <CreatedQuiz />
    </main>
  );
};

export default Home;
