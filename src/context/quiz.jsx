import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [quizDetails, setQuizDetails] = useState({ questions: [] });
  return (
    <QuizContext.Provider value={{ quizDetails, setQuizDetails }}>
      {children}
    </QuizContext.Provider>
  );
};

