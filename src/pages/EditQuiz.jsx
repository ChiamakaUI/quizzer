import { ref, onValue, update } from "firebase/database";
import { database } from "../config/firebase";
import { useParams } from "react-router-dom";
import EditQuizForm from "../components/EditQuizForm";
import { useState, useEffect } from "react";
import QuestionForm from "../components/QuestionForm";

const EditQuiz = () => {
  const { quizId } = useParams();
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState([]);
  const [key, setKey] = useState("");
  const dbRef = ref(database, "quiz");

  const getData = () => {
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const { id, questions } = childSnapshot.val();
        if (id !== quizId) return;
        setKey(childSnapshot.ref.key);
        if (questions === undefined) return;
        setQuizQuestions(questions);
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const pushNewQuestions = (data) => {
    const id = quizQuestions.length;
    update(ref(database, `quiz/${key}/questions/${id}`), data);
  };

  const addNewQuestions = () => {
    setNewQuestion(
      newQuestion.concat(
        <QuestionForm
          key={newQuestion.length}
          edit={true}
          addQuestionFunc={pushNewQuestions}
          setNewQuestion={setNewQuestion}
        />
      )
    );
  };
  return (
    <div className="font-lora">
      {quizQuestions.length === 0 ? (
        <div>
          <p>There are no questions, click add button to add a question</p>
        </div>
      ) : (
        <div>
          {quizQuestions.map((question, index) => (
            <EditQuizForm
              key={index}
              options={question.options}
              answer={question.answer}
              question={question.question}
              quizKey={key}
              quizIndex={index}
            />
          ))}
        </div>
      )}
      {newQuestion}

      <div className="w-[88%] mx-auto my-5">
        <button
          className="bg-[#a45ee5] text-white w-full p-2"
          onClick={addNewQuestions}
        >
          Add Question
        </button>
      </div>
    </div>
  );
};

export default EditQuiz;
