import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { quizSchema } from "../schema/formSchema";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const QuizDetails = ({ stepFunc }) => {
  const { quizDetails, setQuizDetails } = useContext(QuizContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(quizSchema),
  });
  const onSubmit = (data) => {
    setQuizDetails({...quizDetails, ...data});
    stepFunc((prev) => prev + 1);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[80%] mx-auto lg:w-[70%] font-lora"
    >
      <p className="text-center text-lg">Quiz Details</p>
      <input
        type="text"
        className="w-full p-3.5 border my-2 rounded focus:outline-none"
        name="quizName"
        placeholder="Quiz Name"
        {...register("quizName")}
      />
      <p className="font-medium text-xs text-red-500">
        {errors.quizName?.message}
      </p>
      <input
        type="text"
        className="w-full p-3.5 border my-2 rounded focus:outline-none"
        name="description"
        placeholder="Description"
        {...register("description")}
      />
      <p className="font-medium text-xs text-red-500">
        {errors.description?.message}
      </p>
      <input
        type="text"
        className="w-full p-3.5 border my-2 rounded focus:outline-none"
        name="points"
        placeholder="Points per Question"
        {...register("points")}
      />
      <p className="font-medium text-xs text-red-500">
        {errors.points?.message}
      </p>
      <input
        type="text"
        className="w-full p-3.5 border my-2 rounded focus:outline-none"
        name="time"
        placeholder="Time Limit"
        {...register("time")}
      />
      <p className="font-medium text-xs text-red-500">{errors.time?.message}</p>
      <input
        type="text"
        className="w-full p-3.5 border my-2 rounded focus:outline-none"
        name="numberOfQuestions"
        placeholder="Number of Questions"
        {...register("numberOfQuestions")}
      />
      <p className="font-medium text-xs text-red-500">
        {errors.numberOfQuestions?.message}
      </p>
      <button className="w-[60%] border text-white p-3 md:w-[35%] my-3.5 bg-[#a45ee5] rounded-md">
        Continue
      </button>
    </form>
  );
};

export default QuizDetails;
