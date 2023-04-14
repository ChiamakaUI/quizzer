import * as yup from "yup";

export const quizSchema = yup.object().shape({
  quizName: yup.string().required("Please enter quiz name"),
  description: yup.string().required("Please enter quiz description"),
  points: yup.number().required("Please enter grading system"),
  time: yup.number().required("Please enter time limit"),
  numberOfQuestions: yup.number().required("Please enter number of questions"),
});

export const questionSchema = yup.object().shape({
  question: yup.string().required("Please enter the Question"),
  optionA: yup.string().required("Please enter first option"),
  optionB: yup.string().required("Please enter second option"),
  optionC: yup.string().required("Please enter third option"),
  optionD: yup.string().required("Please enter fourth option"),
  answer: yup.string().required("Please enter the correct option"),
});
