import EditQuizInput from "./EditQuizInput";
import { ref, update, onValue } from "firebase/database";
import { database } from "../config/firebase";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const EditQuizForm = ({ options, question, answer, quizKey, quizIndex }) => {
  const dbRef = ref(database, `quiz/${quizKey}/questions`);
  const [questions, setQuestions] = useState([]);
  const [optionsState, setOptionsState] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const [optionsList, setOptionsList] = useState([]);

  const getQuestions = () => {
    onValue(dbRef, (snapshot) => {
      const questions = snapshot.val();
      setQuestions(questions);
    });
  };
  useEffect(() => {
    getQuestions();
  }, []);

  const deleteQuestion = (e) => {
    e.preventDefault();
    const newQuestions = questions.splice(quizIndex, 1);
    update(ref(database, `quiz/${quizKey}/`), { questions: newQuestions });
    toast.success(`Question deleted`);
  };

  const editQuestion = (e) => {
    e.preventDefault();
    const [newAnswer] = answerState;
    const newValue = {
      question,
      answer: newAnswer,
      options: optionsState,
    };
    update(ref(database, `quiz/${quizKey}/questions/${quizIndex}`), newValue);
    toast.success(`Question edited successfully`);
  };

  const addNewOption = (e) => {
    e.preventDefault();
    setOptionsList(
      optionsList.concat(
        <EditQuizInput
          key={optionsList.length}
          inputValue=""
          updateStateValue={setOptionsState}
        />
      )
    );
  };

  return (
    <form className="font-lora w-[85%] mx-auto my-5 lg:w-[75%]">
      <p className='text-xl my-2'>{question}</p>
      <p className="font-semibold">Correct Option: </p>
      <EditQuizInput inputValue={answer} updateStateValue={setAnswerState} />
      <p className="font-semibold">Other Options:</p>
      {options.map((option, index) => (
        <EditQuizInput
          key={index}
          inputValue={option}
          updateStateValue={setOptionsState}
        />
      ))}
      {optionsList}

      <div className="flex flex-row justify-between items-center w-full ml-auto my-6 md:w-[45%] lg:w-[28%]">
        <button
          className="bg-[#a45ee5] text-white px-2.5 py-1 rounded"
          onClick={editQuestion}
        >
          Edit Question
        </button>
        <button
          className="bg-red-700 text-white px-2.5 py-1 rounded"
          onClick={deleteQuestion}
        >
          Delete Question
        </button>
      </div>
      <div className='w-[80%] mx-auto'>
        <button className="bg-[#a45ee5] text-white w-full p-2" onClick={addNewOption}>
          Add Option
        </button>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </form>
  );
};

export default EditQuizForm;
