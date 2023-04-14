import Modal from "./Modal";
import { MdCancel } from "react-icons/md";
import QuizDetails from "./QuizDetails";
import Questions from "./Questions";
import { useState } from "react";
const QuizForm = ({ closeFunc }) => {
  const [step, setStep] = useState(0);

  return (
    <Modal>
      <div className="bg-white h-full md:h-auto my-auto lg:w-[60%] lg:mx-auto lg:h-auto md:w-[80%] md:mx-auto">
        <div className="lg:mt-20 md:mt-20 flex flex-row items-center justify-between w-[22%] ml-auto lg:my-6 md:my-6 py-8 md:py-5">
          {/* <p>AddQuiz</p> */}
          <MdCancel
            className="text-5xl cursor-pointer text-[#a45ee5]"
            onClick={() => closeFunc(false)}
          />
        </div>
        <div>
          {step === 0 ? <QuizDetails stepFunc={setStep} /> : <Questions closeModal={closeFunc}/>}
        </div>
      </div>
    </Modal>
  );
};

export default QuizForm;
//z-[1000] absolute top-28 right-44
