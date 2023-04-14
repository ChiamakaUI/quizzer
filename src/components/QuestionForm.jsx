import { yupResolver } from "@hookform/resolvers/yup";
import { questionSchema } from "../schema/formSchema";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import toast, { Toaster } from "react-hot-toast";

const QuestionForm = ({ edit, addQuestionFunc, setNewQuestion }) => {
  const { quizDetails } = useContext(QuizContext);

  const { questions } = quizDetails;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(questionSchema),
  });
  const onSubmit = (data) => {
     const { question, optionA, optionB, optionC, optionD, answer } = data;
    const questionData = {
      question,
      answer,
      options: [optionA, optionB, optionC, optionD],
    };
    if (edit) {
      addQuestionFunc(questionData);
      toast.success(`Question saved successfully`);
      setNewQuestion([])
    }
    questions.push(questionData);
    toast.success(`Question saved successfully`);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[80%] mx-auto lg:w-[70%] font-lora"
      >
        <input
          type="text"
          className="w-full p-3.5 border my-2 rounded focus:outline-none"
          name="question"
          placeholder="Enter Question"
          {...register("question")}
        />
        <p className="font-medium text-xs text-red-500">
          {errors.question?.message}
        </p>
        <div className="flex flex-row flex-wrap justify-between">
          <div className="w-[48%] my-2">
            <input
              type="text"
              className="w-full rounded focus:outline-none p-3.5 border"
              name="optionA"
              placeholder="Option A"
              {...register("optionA")}
            />
            <p className="font-medium text-xs text-red-500">
              {errors.optionA?.message}
            </p>
          </div>
          <div className="w-[48%] my-2">
            <input
              type="text"
              className="w-full rounded focus:outline-none p-3.5 border"
              name="optionB"
              placeholder="Option B"
              {...register("optionB")}
            />
            <p className="font-medium text-xs text-red-500">
              {errors.optionB?.message}
            </p>
          </div>
          <div className="w-[48%] my-2">
            <input
              type="text"
              className="w-full rounded focus:outline-none p-3.5 border"
              name="optionC"
              placeholder="Option C"
              {...register("optionC")}
            />
            <p className="font-medium text-xs text-red-500">
              {errors.optionC?.message}
            </p>
          </div>
          <div className="w-[48%] my-2">
            <input
              type="text"
              className="w-full rounded focus:outline-none p-3.5 border"
              name="optionD"
              placeholder="Option D"
              {...register("optionD")}
            />
            <p className="font-medium text-xs text-red-500">
              {errors.optionD?.message}
            </p>
          </div>
        </div>
        <input
          type="text"
          className="w-full rounded focus:outline-none p-3.5 border"
          name="answer"
          placeholder="Correct Option"
          {...register("answer")}
        />
        <p className="font-medium text-xs text-red-500">
          {errors.answer?.message}
        </p>
        <button className="w-[60%] border text-white p-3 md:w-[35%] my-3.5 bg-[#a45ee5] rounded">
          Save
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default QuestionForm;
