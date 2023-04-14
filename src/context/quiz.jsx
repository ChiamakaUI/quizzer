import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [quizDetails, setQuizDetails] = useState({ questions: [] });
  // console.log(quizDetails)
  return (
    <QuizContext.Provider value={{ quizDetails, setQuizDetails }}>
      {children}
    </QuizContext.Provider>
  );
};

// export const useThemeContext = () => useContext(QuizContext);
