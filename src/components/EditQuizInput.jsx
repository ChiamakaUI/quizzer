import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const EditQuizInput = ({ inputValue, updateStateValue }) => {
  const [value, setValue] = useState(inputValue);

  const saveInputValue = (e) => {
    e.preventDefault();
    updateStateValue((prev) => [...prev, value]);
    toast.success(`Option saved successfully`);
  };
  return (
    <div>
      <input
        type="text"
        className="w-full p-3.5 border my-2 rounded focus:outline-none"
        name="quizName"
        placeholder="Option"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex flex-row w-[80%] md:w-[45%] lg:w-[45%] my-3 items-center">
        <button
          className="bg-[#a45ee5] rounded py-1.5 text-white px-2 mx-1"
          onClick={saveInputValue}
        >
          Save Option
        </button>
        <button className="bg-red-700 text-white py-1.5 rounded px-2">
          Delete Option
        </button>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default EditQuizInput;
